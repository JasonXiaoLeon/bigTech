import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectdb';
import Data from '@/models/Data';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { data } = body;

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ message: 'No data provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await connectDB();

    const existingIds = await Data.find({ uniqueId: { $in: data.map((item: { uniqueId: any; }) => item.uniqueId) } })
      .select('uniqueId')
      .lean()
      .exec();

    const existingIdSet = new Set(existingIds.map((item) => item.uniqueId));

    // 筛选出没有在数据库中存在的条目
    const newData = data.filter((item: { uniqueId: any; }) => !existingIdSet.has(item.uniqueId));

    if (newData.length > 0) {
      // 使用 bulkWrite 插入数据
      const bulkOps = newData.map((item: any) => ({
        insertOne: {
          document: item,
        },
      }));

      await Data.bulkWrite(bulkOps);

      return new Response(JSON.stringify({
        message: 'Data successfully uploaded',
        insertedData: newData,
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({
        message: 'No new data to insert. All data already exists.',
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error uploading data:', error);
    return new Response(JSON.stringify({
      message: 'Error uploading data',
      error: error,
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
