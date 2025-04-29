'use client'

import React, { useState, useRef } from 'react'
import Papa from 'papaparse'
import SparkMD5 from 'spark-md5'

const FileUploadToDatabase = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type !== 'text/csv') {
      alert('请上传 CSV 文件');
      return;
    }
    setSelectedFile(file);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const file = selectedFile;
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
    setSelectedFile(null);
    setTimeout(() => setProgress(0), 1000);
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

      setProgress(Math.round(((i + 1) / totalChunks) * 100));
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div
        className={`w-[400px] h-[220px] border-2 ${
          isDragging ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
        } border-dashed rounded-lg flex flex-col items-center justify-center text-gray-500 cursor-pointer transition-all`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <svg
          className="w-12 h-12 mb-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16v-4m0 0l4 4m-4-4l-4 4m14-8v4m0 0l-4-4m4 4l4-4m-2 10H6a2 2 0 01-2-2V7a2 2 0 012-2h3l2 2h4l2-2h3a2 2 0 012 2v10a2 2 0 01-2 2z" />
        </svg>
        <p className="text-md">{selectedFile ? selectedFile.name : '拖拽 CSV 文件到这里 或 点击选择文件'}</p>
        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          className="hidden"
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={!selectedFile || isLoading}
        className="w-[400px] py-2 px-4 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold rounded-lg transition"
      >
        {isLoading ? '上传中...' : '提交上传'}
      </button>

      {isLoading && (
        <div className="w-[400px] bg-gray-200 rounded h-4 overflow-hidden">
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
