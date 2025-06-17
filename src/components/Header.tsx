'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { href: '/', label: 'ホーム' },
  { href: '/products', label: '製品一覧' },
  { href: '/contact', label: 'お問い合わせ' },
  { href: '/about', label: 'このアプリについて' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                textDecoration: pathname === href ? 'underline' : 'none',
                color: pathname === href ? '#0070f3' : '#000',
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}