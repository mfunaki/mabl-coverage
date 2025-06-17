'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 本番ではここでAPIに送信処理などを実装
    router.push('/contact/thanks');
  };

  return (
    <main>
      <h1>お問い合わせ</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            お名前:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              data-testid="contact-name"
            />
          </label>
        </div>
        <div>
          <label>
            メールアドレス:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              data-testid="contact-email"
            />
          </label>
        </div>
        <div>
          <label>
            メッセージ:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              data-testid="contact-message"
            />
          </label>
        </div>
        <button type="submit" data-testid="contact-submit">
          送信
        </button>
      </form>
    </main>
  );
}