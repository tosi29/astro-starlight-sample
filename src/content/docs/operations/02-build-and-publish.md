---
title: "ビルドと公開手順"
description: "docs配下へ出力してGitHub Pagesへ公開する"
---


## ビルド

```bash
npm run build
```

成果物はリポジトリ直下の`docs/`に出力されます。

## GitHub Pages設定

1. GitHubのSettingsを開く
2. Pagesを開く
3. SourceにDeploy from a branchを選ぶ
4. Branchを`main`、Folderを`/docs`にする
5. 保存して公開を待つ

## 注意

`docs/`は生成物なので、通常の編集は`src/content/docs/`に対して行います。
