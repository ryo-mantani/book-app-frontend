# book-app-frontend

本管理アプリのフロントエンドです。  
React + Vite を使用し、Spring Bootで作成したREST APIと通信して本の情報を表示します。



## 使用技術

- React
- Vite
- JavaScript
- CSS
- fetch API

## ドキュメント
- [学習ログ](docs/React-study-log.md)
- [開発ログ](docs/React-development-log.md)
- [アプリイメージ画像](docs/images)

## 機能
### CRUD機能
- 本一覧表示（GET）
- 本登録（POST）
- 本更新（PUT）
- 本削除（DELETE）

### API連携
- Spring Boot REST API連携
- React useStateによる状態管理

### UI機能
- トグルボタンによるモード切替
  - 削除モード切替
  - 更新モード切替
  - 検索モード切替
- カード選択による編集機能
- 確認ダイアログ
- カード型レイアウト表示
- 検索機能

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
PostgreSQL に保存された本データの CRUD
（登録・一覧表示・更新・削除）機能を実装済みです。

また、React の useState・useEffect を利用した状態管理を行い、
削除モード・更新モード・検索モードの切替UIを実装しています。

更新モードではカード選択による編集機能を実装し、
選択状態の可視化やモード変更時の状態リセット処理にも対応しています。

検索機能ではタイトル・著者による部分一致検索を実装し、
Spring Boot REST API と連携した検索結果表示を行っています。

一覧画面はカード型レイアウトで構成し、
CSSによるUI改善およびユーザビリティ向上を継続しています。

## 📷 画面イメージ
画面イメージはフロントエンドリポジトリに掲載しています。
- [book-app-frontend]
   (https://github.com/ryo-mantani/book-app-frontend/tree/main/docs/images)


## 🚀 今後実装予定
### フロントエンド強化
- 表紙画像対応
- UI改善

### 機能追加
- 積読管理機能
- 未読率表示
- シリーズ管理機能
- グラフ表示

### 外部連携
- バーコード読み取り
- 書籍API連携
- 最新刊との差分表示
- 巻数抜けチェック
---