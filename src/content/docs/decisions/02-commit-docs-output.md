---
title: "ADR: docs出力をコミットする"
description: "GitHub PagesのDeploy from a branchに合わせる判断"
---


## 状況

GitHub Pagesで`main`ブランチの`docs/`を公開する前提があります。

## 決定

`docs/`配下のビルド成果物をコミットします。

## 理由

- Deploy from a branchで公開できる
- Actions設定なしで確認できる
- Issueの要件に合う

## 影響

実装差分と生成物差分が混ざるとレビューしづらいため、コミットを分けます。
