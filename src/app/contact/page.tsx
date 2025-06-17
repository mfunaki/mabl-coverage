'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/contact/thanks');
  };

  return (
    <main>
      <h1 data-testid="contact-heading">お問い合わせ</h1>
      <form onSubmit={handleSubmit} data-testid="contact-form">
        <div>
          <label htmlFor="name">お名前:</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            data-testid="contact-name"
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            data-testid="contact-email"
          />
        </div>
        <div>
          <label htmlFor="message">メッセージ:</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            data-testid="contact-message"
          />
        </div>
        <button type="submit" data-testid="contact-submit">
          送信
        </button>
      </form>
    </main>
  );
}