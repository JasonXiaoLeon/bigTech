'use client'

import React, { useState } from 'react'
import Papa from 'papaparse'
import SparkMD5 from 'spark-md5'

const FileUploadToDatabase = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const fileSizeMB = file.size / (1024 * 1024);
      setIsLoading(true);
      setProgress(0);

      if (fileSizeMB < 5) {
        await uploadWholeFile(file);
      } else {
        await splitAndUpload(file);
      }

      setIsLoading(false);
      setProgress(100);
      alert('上传完成！');
      event.target.value = ''; // 上传完清空input
      setTimeout(() => setProgress(0), 1000); // 过1秒把进度清零
    }
  };

  const uploadWholeFile = async (file: File) => {
    const fileText = await file.text();
    const fileHash = SparkMD5.hash(fileText);

    const parsed = Papa.parse(fileText, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    });

    const fileData = parsed.data as any[];

    if (fileData.length > 0) {
      try {
        const response = await fetch('/api/auth/user/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isWholeFile: true, fileHash, data: fileData }),
        });

        if (!response.ok) {
          console.error('整体文件上传失败:', await response.text());
        }
      } catch (error) {
        console.error('整体文件上传错误:', error);
      }
    }
  };

  const splitAndUpload = async (file: File) => {
    const chunkSize = 1 * 1024 * 1024; // 1MB per chunk
    const totalChunks = Math.ceil(file.size / chunkSize);

    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);

      const chunkText = await chunk.text();
      const chunkHash = SparkMD5.hash(chunkText);

      const parsed = Papa.parse(chunkText, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
      });

      const chunkData = parsed.data as any[];

      if (chunkData.length > 0) {
        try {
          const response = await fetch('/api/auth/user/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chunkHash, data: chunkData }),
          });

          if (!response.ok) {
            console.error('分片上传失败:', await response.text());
          }
        } catch (error) {
          console.error('分片上传错误:', error);
        }
      }

      // 更新进度
      setProgress(Math.round(((i + 1) / totalChunks) * 100));
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input type="file" accept=".csv" onChange={handleFileUpload} disabled={isLoading} />
      <button disabled={isLoading} className="p-2 bg-blue-500 text-white rounded">
        {isLoading ? '上传中...' : '上传 CSV 文件'}
      </button>

      {isLoading && (
        <div className="w-full max-w-md bg-gray-200 rounded h-4 overflow-hidden">
          <div
            className="h-4 bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {progress > 0 && !isLoading && (
        <div className="text-green-600">上传完成！</div>
      )}
    </div>
  );
};

export default FileUploadToDatabase;
