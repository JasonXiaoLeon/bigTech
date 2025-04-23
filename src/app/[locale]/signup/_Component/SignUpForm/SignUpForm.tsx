'use client';
import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 检查密码是否包含特殊字符，并且检查是否包含至少一个数字和一个字母
    const hasInvalidChar = /[^a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    
    if (hasInvalidChar) {
      setPasswordError('密码只能包含字母、数字和常见的特殊字符如 !@#$%^&*() 等');
      return;
    } else if (!hasLetter || !hasDigit) {
      setPasswordError('密码必须包含至少一个字母和一个数字');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('注册成功');
        window.location.href = '/login';
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert('注册失败');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
