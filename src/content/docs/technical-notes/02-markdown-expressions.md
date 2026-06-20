---
title: "Markdown表現サンプル"
description: "表、引用、コード、リストの見え方"
---


## 表

| 比較軸 | Starlight | Digital Garden系 |
| :--- | :--- | :--- |
| 章立て | 強い | 弱め |
| 双方向リンク | 標準では弱い | 強い |
| 初見読者導線 | 作りやすい | 工夫が必要 |

## 引用

> メモは書いた瞬間ではなく、読み返された瞬間に価値が決まる。

## コード

```ts
export type NoteKind = 'log' | 'research' | 'adr' | 'reference';

export function shouldPublish(kind: NoteKind) {
  return kind !== 'log';
}
```

## リスト

- 結論を先に書く
- 根拠を近くに置く
- 長い背景は別ページへ逃がす
