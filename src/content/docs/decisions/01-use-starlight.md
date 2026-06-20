---
title: "ADR: Starlightを採用する"
description: "Docs型プロトタイプとしてStarlightを使う判断"
---


## 状況

AI会話ログや技術メモを、他人にも読ませやすい形へ整理したいです。

## 決定

プロトタイプにはAstro Starlightを使います。

## 理由

- Docs向けのサイドバー、検索、目次が標準である
- Markdown/MDXを使い分けられる
- 静的サイトとしてGitHub Pagesへ出しやすい

## 見直し条件

双方向リンクや未整理メモの育成が主目的になった場合は、Quartz系を再検討します。
