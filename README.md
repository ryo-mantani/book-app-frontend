# book-app-frontend

本管理アプリのフロントエンドです。  
React + Vite を使用し、Spring Bootで作成したREST APIと通信して本の情報を表示します。

## 使用技術

- React
- Vite
- JavaScript
- CSS
- fetch API

## 機能

- 本一覧の表示
- Spring Boot APIとの通信
- PostgreSQLに保存された本データの表示

※ 登録・削除・検索・更新機能は今後追加予定です。

## 起動方法

### 1. フロントエンドを起動

```bash
npm run dev
```

### 2. ブラウザで確認

```text
http://localhost:5173
```

## API接続先

バックエンド側のSpring Boot APIに接続しています。

```text
http://localhost:8080/books
```

## 現在の状態

React フロントエンドから Spring Boot REST API に通信し、
PostgreSQL に保存された本データを一覧表示するところまで実装済みです。

## 今後の予定

- CSSによる画面レイアウト調整
- 本の登録フォーム作成
- POST通信による登録機能
- DELETE通信による削除機能
- 検索機能
- 編集・更新機能