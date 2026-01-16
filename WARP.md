# WARP.md

このファイルは、このリポジトリで作業する際のガイダンスを提供します。

## ビルド・開発コマンド

```bash
# 開発サーバー起動（Turbopack使用）
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# リント
npm run lint
```

### Docker開発

```bash
# 開発環境（ホットリロード有効）
docker-compose -f docker-compose.dev.yml up --build

# 本番環境
docker-compose up --build
```

## アーキテクチャ

### 技術スタック
- Next.js 15 (App Router) + React 19
- TypeScript (strict mode)
- Tailwind CSS v4
- Google Cloud Run へのデプロイ対応

### ディレクトリ構成

```
src/
├── app/           # App Router ページ・API
│   ├── api/       # REST API エンドポイント
│   │   └── products/  # /api/products, /api/products/[id]
│   ├── products/  # 製品一覧・詳細ページ
│   └── demo/      # mabl自動修復デモページ
├── components/    # 共有コンポーネント
├── data/          # 静的データ（products.ts）
└── types/         # TypeScript型定義
```

### パスエイリアス
- `@/*` → `./src/*`

### サーバーサイドfetchのベースURL
製品ページ（`src/app/products/`）では、サーバーサイドでAPIを呼び出す際に `NEXT_PUBLIC_BASE_URL` 環境変数を使用。未設定の場合は `headers()` からホストを自動検出する。

### OpenAPI仕様
`public/openapi.yaml` にAPI仕様書を配置。mablによるAPIテストに対応。

## mabl連携

このアプリケーションはmablのビジュアルテスト・自動修復機能のデモ用。`data-testid` 属性がテスト対象要素に付与されている。
