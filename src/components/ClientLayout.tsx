'use client';
import { usePathname } from 'next/navigation';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const screenId = pathname.replace(/^\/$/, 'home').replace(/\//g, '-');

  return <div data-screen-id={screenId}>{children}</div>;
}