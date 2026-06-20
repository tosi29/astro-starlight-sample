import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://tosi29.github.io',
  base: '/astro-starlight-sample',
  outDir: './docs',
  integrations: [
    starlight({
      title: 'Starlight Knowledge Prototype',
      description: 'AI会話ログ・技術メモ・調査メモ・判断メモを体系化するためのStarlightサンプルサイト',
      defaultLocale: 'ja',
      locales: { root: { label: '日本語', lang: 'ja' } },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tosi29/astro-starlight-sample' }],
      sidebar: [
        { label: 'はじめに', items: [
          { label: 'トップ', slug: 'index' },
          { label: '機能確認ガイド', slug: 'feature-tour' },
          { label: '評価の前提', slug: 'evaluation-scope' },
          { label: 'サイト構造', slug: 'site-map' }
        ]},
        { label: 'AI会話ログの再編集', items: [{ autogenerate: { directory: 'ai-logs' } }] },
        { label: '技術メモ', items: [{ autogenerate: { directory: 'technical-notes' } }] },
        { label: '調査メモ', items: [{ autogenerate: { directory: 'research-notes' } }] },
        { label: '判断メモ・ADR', items: [{ autogenerate: { directory: 'decisions' } }] },
        { label: '運用パターン', items: [{ autogenerate: { directory: 'operations' } }] },
        { label: 'リファレンス', items: [{ autogenerate: { directory: 'reference' } }] }
      ],
      editLink: { baseUrl: 'https://github.com/tosi29/astro-starlight-sample/edit/main/src/content/docs/' },
      lastUpdated: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 }
    })
  ]
});
