---
title: "コード表示サンプル"
description: "設定・スクリプト・疑似コードの表示確認"
---


## Astro設定例

```js
export default defineConfig({
  site: 'https://tosi29.github.io',
  base: '/astro-starlight-sample',
  outDir: './docs'
});
```

## Mermaidの代わりに使う疑似コード

```text
会話ログ
  -> 判断軸を抽出
  -> 読者向けに再構成
  -> ADRまたは技術メモへ配置
```

## 確認ポイント

コードブロックの配色、コピー操作、横スクロールの扱いを確認します。
