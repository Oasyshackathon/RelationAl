# RelationAl - フロントエンド

[Next.js](https://nextjs.org/)

## Getting Started

```bash
# 1回実行したら以降は不要
npm i

npm run dev
```

を実行後、 [http://localhost:3000](http://localhost:3000) にアクセス

## ディレクトリ構成

- public -> 公開したいファイルの格納場所
  - images -> 画像
- src -> ソースコードをまとめたディレクトリ
  - components -> 共通コンポーネント
    - elements -> 要素(ex. button, input)
    - layouts -> ページのレイアウト
      - Footer -> フッター
      - Header -> ヘッダー
      - Main -> メイン部分（body）
        - Main ページ名 -> ページごとのメイン部分
  - const -> 定数
  - features -> 機能ごとの独自コンポーネント
    - 機能名 -> 機能別に分ける
      - api -> 機能ごとの API 関連
        - contracts -> コントラクト API
      - components -> 機能ごとの独自コンポーネント置き場
  - hooks -> カスタムフック
  - lib -> 共通機能
  - models -> 状態変数をまとめる
  - pages -> web ページ
    - api -> Next.js の API（バックエンド）
  - styles -> 共通スタイル(global.css のみ)
  - stores -> 状態変数の実体
  - types -> 型定義
  - utils -> 便利関数まとめ
