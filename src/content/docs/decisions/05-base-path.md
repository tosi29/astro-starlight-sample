---
title: "ADR: baseにリポジトリ名を設定する"
description: "GitHub PagesのURL構造に合わせる判断"
---


## 状況

プロジェクトサイトとして公開する場合、URLにはリポジトリ名が入ります。

## 決定

Astro設定で`base: '/astro-starlight-sample'`を指定します。

## 理由

CSS、JS、画像の参照がリポジトリ名付きURLで壊れないようにするためです。

## 確認方法

ビルド後のHTMLで、アセットURLに`/astro-starlight-sample/`が含まれることを確認します。
