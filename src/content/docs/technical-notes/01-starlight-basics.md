---
title: "Starlight基本構成メモ"
description: "Astro Starlightの主要ファイルと役割"
---


## 主要ファイル

| ファイル | 役割 |
| :--- | :--- |
| `astro.config.mjs` | Starlight設定、site/base/outDir |
| `src/content/docs/` | ドキュメント本文 |
| `public/` | 画像などの静的ファイル |
| `docs/` | GitHub Pages向けビルド成果物 |

## 確認ポイント

Starlightは、Docsに必要な検索、サイドバー、目次、テーマを最初から持っています。
独自実装を増やさずに評価できる点が、このプロトタイプの狙いです。
