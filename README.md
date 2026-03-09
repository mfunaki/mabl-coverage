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

```bash
# イメージをビルド
docker build -t mabl-coverage .

# コンテナを起動
docker run -p 3000:3000 mabl-coverage

# または docker-compose で起動
docker-compose up --build
```

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
これは `docker-compose.yml` に既に設定されています。

---