# Pokédex

Reactでポケモン図鑑を作りました。

## 概要

[PokeAPI](https://pokeapi.co/)からデータを取得し、ポケモンの画像、名前、タイプなどを一覧表示します。詳細をクリックすることで、より詳しい情報をモーダルで確認することができます。

## 主な機能

- **ポケモン一覧表示**: ポケモンをグリッド形式で一覧表示します。
- **詳細情報の閲覧**: ポケモンをクリックすると、モーダルウィンドウで詳細情報（画像、タイプ、ステータスなど）を確認できます。

## 技術スタック

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Data Source**: [PokeAPI](https://pokeapi.co/)

## セットアップと実行方法

### 前提条件

- Node.js (推奨バージョン: LTS)
- npm

### インストール

プロジェクトのディレクトリで以下のコマンドを実行して、依存関係をインストールします。

```bash
npm install
```

### 開発サーバーの起動

以下のコマンドを実行して、ローカル開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで `http://localhost:5173` (またはコンソールに表示されるURL) にアクセスしてください。
