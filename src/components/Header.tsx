'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'このアプリについて' },
  { href: '/contact', label: 'Contact' },
  { href: '/products', label: 'Products' },
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