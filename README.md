# astro-starlight-sample

Astro Starlightを使って、AI会話ログ・技術メモ・調査メモ・判断メモを体系化されたドキュメントサイトにできるか確認するためのサンプルです。

## 目的

このリポジトリは、Starlightが「人間が触って評価できる知識整理サイト」として使えるかを確認するためのプロトタイプです。
30ページ程度のサンプルコンテンツを用意し、サイドバー、検索、目次、Markdown/MDX、コード表示、表、画像、コンポーネント、ADR、用語集、技術調査メモを確認できるようにしています。

## ローカル起動

```bash
npm install
npm run dev
```

開発サーバーのURLをブラウザで開き、トップページと「機能確認ガイド」を確認してください。

## ビルド

```bash
npm run build
```

ビルド成果物はリポジトリ直下の `docs/` に出力されます。

## GitHub Pagesで公開する方法

GitHub Pagesでは、`main` ブランチの `/docs` を公開する前提です。

1. GitHubのリポジトリ設定を開く
2. **Pages** を開く
3. Sourceに **Deploy from a branch** を選ぶ
4. Branchに `main`、Folderに `/docs` を選ぶ
5. 保存して公開を待つ

Astro設定では、GitHub PagesのプロジェクトサイトURLを想定して以下を指定しています。

```js
site: 'https://tosi29.github.io'
base: '/astro-starlight-sample'
outDir: './docs'
```

## ソースとビルド成果物の関係

| パス | 役割 |
| :--- | :--- |
| `src/content/docs/` | Starlightの本文ソース |
| `src/components/` | MDXから使うAstroコンポーネント |
| `public/` | 画像などの静的ファイル |
| `project-notes/` | 公開成果物とは別に残す仮定・設計判断 |
| `docs/` | GitHub Pages公開用の生成物 |

`docs/` は生成物として扱います。
本文や構成を変更するときは、原則として `src/` 配下を編集してから `npm run build` を実行します。

## ビルド成果物の運用方針

`docs/` は `npm run build` で再生成できる成果物です。
このPRではレビュー差分を小さくするため、`docs/` はコミットせず `.gitignore` に含めています。

GitHub Pagesの **Deploy from a branch** で `/docs` を公開する場合は、公開前に以下を実行して生成物を用意してください。

```bash
npm run build
```

`docs/` をブランチ公開用にコミットする運用へ切り替える場合は、`.gitignore` から `docs/` を外し、生成物だけを別コミットにすると差分を確認しやすくなります。

## 人間が確認すべき主な機能

- トップページから「機能確認ガイド」へ進めるか
- 30ページ程度のサイドバーが読みにくくないか
- 日本語検索で目的のページを探せるか
- 長いページの目次が役に立つか
- Markdownの表、引用、コードブロックが読みやすいか
- MDXページでカード、タブ、Aside、独自コンポーネントが表示されるか
- ADR、用語集、調査メモ、技術メモを分けて管理しやすいか
- `docs/` をGitHub Pagesに置く運用が現実的か

## 既知の制約

- `docs/` をコミットするため、PR差分は大きくなります。
- 双方向リンクやバックリンク中心のDigital Garden用途では、Quartz系ツールの方が自然な場合があります。
- MDXを多用すると、Markdownだけの運用より編集者の学習コストが上がります。
- このサンプルは機能確認用であり、大規模サイトの性能検証は目的にしていません。
