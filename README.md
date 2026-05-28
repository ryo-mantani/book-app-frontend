# book-app-frontend

本管理アプリのフロントエンドです。  
React + Vite を使用し、Spring Bootで作成したREST APIと通信して本の情報を表示します。

アプリイメージ画像：book-app-frontend\docs\images

## 使用技術

- React
- Vite
- JavaScript
- CSS
- fetch API

## ドキュメント
- [学習ログ](docs/React-study-log.md)
- [開発ログ](docs/React-development-log.md)


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
PostgreSQL に保存された本データの CRUD（登録・一覧表示・更新・削除）機能を実装済みです。
また、React の useState を利用した削除モード・更新モード切替UIや、
カード型レイアウトによる一覧表示機能も実装しています。

## 今後の予定

- CSSによる画面レイアウト調整
- 検索機能
- 編集・更新機能