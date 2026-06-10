# book-app-frontend

## 概要
本管理アプリのフロントエンドです。  
React + Vite を使用し、Spring Bootで作成したREST APIと通信して本の情報を表示します。

## 📷 画面イメージ
画面イメージはフロントエンドリポジトリに掲載しています。

### 一覧画面
![一覧画面](https://github.com/ryo-mantani/book-app-frontend/tree/main/docs/images/01-home.png)

### 登録確認
![登録確認](https://github.com/ryo-mantani/book-app-frontend/tree/main/docs/images/02-register-confirm.png)

### 更新モード
![更新モード](https://github.com/ryo-mantani/book-app-frontend/tree/main/docs/images/03-update-mode.png)

### 削除モード
![削除モード](https://github.com/ryo-mantani/book-app-frontend/tree/main/docs/images/04-delete-mode.png)

### 検索結果
![検索結果](https://github.com/ryo-mantani/book-app-frontend/tree/main/docs/images/05-search-result.png)


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

## 💡 工夫した点
- useState・useEffectを利用した状態管理
- モード変更時の選択状態リセット
- カード選択による視覚的な編集対象の表示
- 削除前の確認ダイアログによる誤操作防止
- Spring Boot REST APIと連携したCRUD処理

## ドキュメント
- [学習ログ](docs/React-study-log.md)
- [開発ログ](docs/React-development-log.md)

## 使用技術
- React
- Vite
- JavaScript
- CSS
- fetch API

## 機能
### CRUD機能
- 本一覧表示（GET）
- 本登録（POST）
- 本更新（PUT）
- 本削除（DELETE）
- タイトル・著者による部分一致検索

### API連携
- Spring Boot REST API連携

### 状態管理
- React useState・useEffectによる状態管理

### UI機能
- トグルボタンによるモード切替
  - 削除モード切替
  - 更新モード切替
  - 検索モード切替
- カード選択による編集機能
- 確認ダイアログ
- カード型レイアウト表示

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