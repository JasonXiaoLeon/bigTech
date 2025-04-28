import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectdb';
import Data from '@/models/Data';
import HashChunk from '@/models/HashChunk';
import File from '@/models/File';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { chunkHash, fileHash, data, isWholeFile } = body;

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ message: '缺少数据' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await connectDB();

    if (isWholeFile) {
      if (!fileHash) {
        return new Response(JSON.stringify({ message: '缺少 fileHash 参数' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const existingFile = await File.findOne({ fileHash }).lean();
      if (!existingFile) {
        await File.create({ fileHash, data });
        console.log(`文件 ${fileHash} 已保存到 files`);
      } else {
        console.log(`文件 ${fileHash} 已存在，跳过保存`);
      }
    } else {
      if (!chunkHash) {
        return new Response(JSON.stringify({ message: '缺少 chunkHash 参数' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const existingHash = await HashChunk.findOne({ chunkHash }).lean();
      if (!existingHash) {
        await HashChunk.create({ chunkHash });

        const bulkOps = data.map((item: any) => ({
          insertOne: { document: item },
        }));

        await Data.bulkWrite(bulkOps);
        console.log(`分片 ${chunkHash} 已保存到 data`);
      } else {
        console.log(`分片 ${chunkHash} 已存在，跳过保存`);
      }
    }

    return new Response(JSON.stringify({ message: '上传处理完成' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('处理上传错误:', error);
    return new Response(JSON.stringify({ message: '服务器错误', error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
