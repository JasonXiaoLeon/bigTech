"use client";
import React, { useState, useRef } from "react";
import SparkMD5 from "spark-md5";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const CHUNK_SIZE = 1 * 1024 * 1024; // 1MB

  // 计算文件的哈希值，使用 ReadableStream 逐块读取
  const calculateHash = (file: File, chunkSize: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      const spark = new SparkMD5.ArrayBuffer();
      const reader = new FileReader();
      let currentChunk = 0;
      const chunks = Math.ceil(file.size / chunkSize);

      const stream = new ReadableStream({
        start(controller) {
          const readNextChunk = () => {
            const start = currentChunk * chunkSize;
            const end = Math.min(start + chunkSize, file.size);
            const chunk = file.slice(start, end);
            
            reader.onload = () => {
              spark.append(reader.result as ArrayBuffer);
              currentChunk++;
              if (currentChunk < chunks) {
                readNextChunk(); // 继续读取下一个分片
              } else {
                const hash = spark.end(); // 完成哈希计算
                console.log("文件的哈希值:", hash); // 打印哈希值
                resolve(hash);
                controller.close();
              }
            };
            reader.onerror = (err) => {
              reject(err);
              controller.error(err);
            };
            reader.readAsArrayBuffer(chunk); // 读取当前分片
          };
          readNextChunk();
        }
      });

      const readerStream = stream.getReader();
      readerStream.read().catch(reject);
    });
  };

  // 处理文件选择
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "text/csv",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];

      if (!validTypes.includes(file.type)) {
        alert("只允许上传 CSV 或 Excel 文件");
        return;
      }

      const maxSize = 5 * 1024 * 1024; // 5MB
      const chunks = createChunks(file, CHUNK_SIZE);
      const fileHash = await calculateHash(file, CHUNK_SIZE); // 获取文件哈希值

      if (file.size > maxSize) {
        uploadChunks(chunks, file.name, fileHash);
        return;
      }

      setSelectedFile(file); // 不超过大小直接上传
    }
  };

  // 创建文件分片
  const createChunks = (file: File, chunkSize: number) => {
    const chunks = [];
    let cur = 0;
    while (cur < file.size) {
      chunks.push(file.slice(cur, cur + chunkSize));
      cur += chunkSize;
    }
    return chunks;
  };

  // 上传分片
  const uploadChunks = async (chunks: Blob[], fileName: string, fileHash: string) => {
    const uploadedListRes = await fetch(`/api/upload-status?fileHash=${fileHash}`);
    const uploadedList = await uploadedListRes.json(); // 已上传的分片索引

    for (let i = 0; i < chunks.length; i++) {
      if (uploadedList.includes(i)) {
        console.log(`Chunk ${i} 已上传，跳过`);
        continue;
      }

      const formData = new FormData();
      formData.append("file", chunks[i]);
      formData.append("fileName", fileName);
      formData.append("chunkIndex", String(i));
      formData.append("totalChunks", String(chunks.length));
      formData.append("fileHash", fileHash);

      const res = await fetch("/api/upload-chunk", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log(`Chunk ${i + 1}/${chunks.length} 上传完成`, result);
    }

    await fetch(`/api/merge-chunks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileHash, fileName }),
    });
  };

  // 上传文件
  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("file", selectedFile);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    console.log(result);
  };

  // 移除文件
  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // 清空 input
    }
  };

  return (
    <div className="p-4 border rounded w-[360px] mx-auto">
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={handleFileChange}
      />

      {selectedFile && (
        <div className="mt-4 flex items-center justify-between bg-gray-100 p-2 rounded">
          <span>
            {selectedFile.name.length > 20
              ? `${selectedFile.name.slice(0, 10)}...${selectedFile.name.slice(-7)}`
              : selectedFile.name}
          </span>
          <button
            onClick={handleRemoveFile}
            className="text-red-500 hover:text-red-700"
          >
            <svg
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
            >
              <path
                d="M911.9 198l-8-8H675.2c-8.7-35.4-29.1-67.4-57.5-90.6C587.8 75.3 550.3 62 512 62s-75.9 13.3-105.7 37.4c-28.5 23.1-48.9 55.2-57.5 90.6h-229l-8 8v64l8 8h263.4c10.6 0 21-3.9 28.6-11.2 7.9-7.6 12.2-17.8 12.2-28.7 0-23.5 9.1-45.6 25.8-62.2 16.6-16.7 38.7-25.8 62.2-25.8s45.6 9.2 62.2 25.8c16.6 16.7 25.8 38.8 25.8 62.2 0 10.9 4.3 21.1 12.2 28.7 7.6 7.4 18 11.2 28.6 11.2h263.1c4.4 0 8-3.6 8-8v-64zM792 370c-4.4 0-8 3.6-8 8v460.5c-0.2 24.1-19.9 43.5-44 43.5H283.9c-24.1 0-43.8-19.4-44-43.6V378c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v459.7c0 69.7 41.5 124.3 94.5 124.3h515.1c53 0 94.5-54.6 94.5-124.3V378c0-4.4-3.6-8-8-8h-64z"
                fill="#d81e06"
              ></path>
              <path
                d="M424 822h-56c-4.4 0-8-3.6-8-8V430c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v384c0 4.4-3.6 8-8 8zM664 822h-56c-4.4 0-8-3.6-8-8V430c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v384c0 4.4-3.6 8-8 8z"
                fill="#d81e06"
              ></path>
            </svg>
          </button>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
      >
        上传
      </button>
    </div>
  );
};

export default UploadFile;
