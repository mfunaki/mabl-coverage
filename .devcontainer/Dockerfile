FROM node:20-alpine

# 開発に必要なパッケージをインストール
RUN apk add --no-cache \
    git \
    openssh-client \
    bash \
    curl \
    libc6-compat

# グローバルにインストールする開発ツール
RUN npm install -g \
    npm@latest \
    typescript \
    ts-node

# 作業ディレクトリを設定
WORKDIR /workspace

# ユーザーをnodeに設定（非rootで実行）
USER node

# デフォルトシェルをbashに設定
ENV SHELL=/bin/bash

CMD ["sleep", "infinity"]
