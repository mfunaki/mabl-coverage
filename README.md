# 🧪 Next.js + Cloud Run 製品デモアプリ（mablビジュアルテスト付き）

## 概要 / Overview

このアプリケーションは、Next.js (App Router構成) を用いた製品一覧＆詳細表示アプリで、Google Cloud Run 上にデプロイされています。  
mabl による視覚的テスト（Visual Testing）と視覚的学習（Visual Learning）のデモ用途として構築されました。

This is a demo web app that lists and displays product details using Next.js (App Router) and is deployed on Google Cloud Run.  
It is designed to demonstrate mabl’s **visual testing and visual learning capabilities** in a real-world CI/CD workflow.

---

## 🧩 主な構成 / Features

- Next.js 15 + App Router
- `/products`：製品一覧表示（API経由）
- `/products/[id]`：製品詳細ページ
- `/api/products`：RESTful API（JSON応答）
- `/api.yaml`：OpenAPI仕様書（mablによるAPI自動テストに対応）
- `/`：OpenAPIファイルへのリンク付きホーム画面
- mabl によるテストカバレッジ＆ビジュアル比較対応済み

---

## 🚀 デプロイ / Deployment

```bash
gcloud run deploy mabl-coverage \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated
```

## 🐳 Docker での実行 / Docker Usage

### 本番環境 / Production

```bash
# イメージをビルド
docker build -t mabl-coverage .

# コンテナを起動
docker run -p 3000:3000 mabl-coverage

# または docker-compose で起動
docker-compose up --build
```

### 開発環境 / Development

```bash
# 開発用コンテナを起動（ホットリロード有効）
docker-compose -f docker-compose.dev.yml up --build
```

### Windows環境でポート8082を使用する場合

Windows + Dockerでポート8082にマッピングする場合：

```bash
# Windows専用の設定ファイルを使用
docker-compose -f docker-compose.dev.windows.yml up --build

# アクセス先
# - ホストマシン（Windows）から: http://localhost:8082
# - コンテナ内部では自動的に localhost:3000 を使用
```

**重要**: コンテナ内部では常に `NEXT_PUBLIC_BASE_URL=http://localhost:3000` が設定されており、  
サーバーサイドでのAPI呼び出しは正しく動作します。ホストマシンからのアクセスのみポート8082を使用してください。

---

## ⚙️ 環境変数 / Environment Variables

### ローカル開発環境

`.env.local.example` を `.env.local` にコピーして使用してください：

```bash
cp .env.local.example .env.local
```

| 変数名 | 説明 | デフォルト値 |
|--------|------|-------------|
| `NEXT_PUBLIC_BASE_URL` | サーバーサイドでのAPI呼び出し時のベースURL | `headers()`から自動検出 |
| `NODE_ENV` | 実行環境 | `development` / `production` |

### Docker環境での設定

Docker環境では、コンテナ内部のポート（3000）を使用するため、`NEXT_PUBLIC_BASE_URL=http://localhost:3000` が推奨されます。  
これは `docker-compose.yml` および `docker-compose.dev.yml` に既に設定されています。

### ポートマッピングについて

- **コンテナ内部**: 常に `localhost:3000` でNext.jsが起動
- **ホストマシン**: `docker-compose.yml`の`ports`で指定したポート（例: `8082:3000`）でアクセス
- **サーバーサイドのfetch**: `NEXT_PUBLIC_BASE_URL`を使用するため、コンテナ内部のポート（3000）を指定

---