# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

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

# Windows環境でポート8082を使用する場合
docker-compose -f docker-compose.dev.windows.yml up --build
```

### Cloud Runデプロイ

```bash
gcloud run deploy mabl-coverage \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated
```

## Architecture

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
│   ├── contact/   # お問い合わせページ
│   ├── about/     # 概要ページ
│   └── demo/      # mabl自動修復デモページ
│       ├── auto-healing/        # 従来型自動修復デモ
│       └── visual-auto-healing/ # ビジュアル自動修復デモ
├── components/    # 共有コンポーネント
├── data/          # 静的データ（products.ts）
└── types/         # TypeScript型定義
```

### パスエイリアス
- `@/*` → `./src/*`

### 環境変数

| 変数名 | 説明 | デフォルト |
|--------|------|-----------|
| `NEXT_PUBLIC_BASE_URL` | サーバーサイドAPI呼び出しのベースURL | `headers()`から自動検出 |
| `NODE_ENV` | 実行環境（http/https判定に使用） | `development` |

Docker環境では `NEXT_PUBLIC_BASE_URL=http://localhost:3000` を使用（docker-compose.ymlに設定済み）。

### OpenAPI仕様
`public/openapi.yaml` にAPI仕様書を配置。mablによるAPIテストに対応。

## mabl連携

このアプリケーションはmablのビジュアルテスト・自動修復機能のデモ用。

### data-testid命名規則
- 製品カード: `product-card-{id}`, `product-title-{id}`, `product-link-{id}`
- フォーム要素: `dynamic-name-input`, `dynamic-email-input`, `dynamic-submit-btn`
- ボタン: `regenerate-attributes-btn`

デモページでは要素のid/class属性が動的に変化しても、`data-testid`属性により安定したテストが可能。
