export const metadata = {
  title: 'このアプリについて - デモアプリケーション',
  description: 'このアプリについての説明ページです',
};

export default function AboutPage() {
  return (
    <main>
      <h1>このアプリについて</h1>
      <p>
        このデモアプリケーションは、mabl のカバレッジ機能を紹介するために構築されました。
        さまざまな画面遷移、フォーム操作、インタラクティブ要素を通じて、
        テストカバレッジの視覚化と分析を行うことができます。
      </p>
      <p>
        Next.js の最新構成（App Router、TypeScript、ESLint/Prettier）をベースにし、
        Google Cloud Run にも対応できるよう軽量かつ実践的な設計を目指しています。
      </p>
    </main>
  );
}