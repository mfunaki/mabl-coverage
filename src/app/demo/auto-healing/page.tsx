'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AutoHealingDemo() {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [isDynamic, setIsDynamic] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const regenerateAttributes = () => {
    setTimestamp(Date.now());
    setIsDynamic(!isDynamic);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('フォームが送信されました（デモ）');
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <div className="mb-6">
        <Link href="/products" className="text-blue-600 hover:underline">
          ← 製品一覧に戻る
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">従来型自動修復デモ</h1>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">🔧 このデモについて</h2>
        <p className="text-sm text-gray-700">
          このフォームの要素は、クリックするたびにid属性やclass名が動的に変化します。
          mablの従来型自動修復機能は、data-testid属性を基に要素を特定し続けます。
        </p>
      </div>

      <div className="auto-healing-demo bg-white border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">フォーム要素の自動修復テスト</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor={`name-input-${timestamp}`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              お名前
            </label>
            <input
              type="text"
              id={`name-input-${timestamp}`}
              className={`w-full px-3 py-2 border rounded-md ${
                isDynamic ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="動的に変化する入力欄"
              data-testid="dynamic-name-input"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label 
              htmlFor={`email-input-${timestamp}`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id={`email-input-${timestamp}`}
              className={`w-full px-3 py-2 border rounded-md ${
                isDynamic ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="メールアドレスを入力"
              data-testid="dynamic-email-input"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label 
              htmlFor={`message-input-${timestamp}`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              メッセージ
            </label>
            <textarea
              id={`message-input-${timestamp}`}
              className={`w-full px-3 py-2 border rounded-md ${
                isDynamic ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
              placeholder="メッセージを入力"
              data-testid="dynamic-message-input"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className={`px-4 py-2 rounded-md text-white font-medium ${
                isDynamic ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
              } transition-colors`}
              data-testid="dynamic-submit-btn"
            >
              送信
            </button>

            <button
              type="button"
              onClick={regenerateAttributes}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              data-testid="regenerate-attributes-btn"
            >
              属性を再生成
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="font-medium mb-2">現在の属性状態:</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>タイムスタンプ: {timestamp}</p>
            <p>スタイル状態: {isDynamic ? '動的スタイル' : '静的スタイル'}</p>
            <p>要素ID: name-input-{timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}