# wtfe — Ways They Frame Engineering

[English](README.md)

世界各国のソフトウェアエンジニアが、どう考え、どう働く傾向にあるかをまとめたサイトです。扱うテーマは、設計と品質、失敗とリスク、フィードバックとコードレビュー、階層と意思決定、コミュニケーションとドキュメント、働き方とキャリア、OSS の 7 つ。すべての記述に出典と信頼度を付けています。

サイト: <https://0-draft.github.io/wtfe/ja/>（日本語） · <https://0-draft.github.io/wtfe/>（English）

## 最初に読んでほしいこと

- ここに書いてあるのは傾向であって、その国の人の性質ではありません。文化的価値のばらつきの約 8 割は国と国の間ではなく、国の内部にあります（[Taras, Steel & Kirkman 2016](https://link.springer.com/article/10.1007/s11575-016-0283-x)）。国の文化より、会社やチームの文化の影響のほうが大きいこともよくあります。
- 位置づけは相対的なものです。東京から見ると米国は率直ですが、アムステルダムから見ると遠回しに見えます。
- 各記述には信頼度を付けています。**強** は調査・統計データ、**中** は複数の定性的な資料、**弱** は逸話です。弱い記述は、それしか根拠がない場合に限り、そう明記したうえで残しています。

## 対象

日本、韓国、中国、インド、米国、英国、ドイツ、フランス、北欧、オランダ、イスラエル、ブラジル、ポーランド、ウクライナ。加えて、Hofstede の 6 次元（Culture Factor の現行値）と、Erin Meyer の Culture Map の 8 尺度も載せています。Culture Map は細かい数値にせず、あえて粗い 7 段階で示しています。

## リポジトリ構成

| パス | 内容 |
| --- | --- |
| `research/` | 国別の調査ノートと方法論のレビュー（出典すべて） |
| `src/data/schema.ts` | 全コンテンツの zod スキーマ |
| `src/data/content/{ja,en}/countries/` | 国別コンテンツ（日本語が原文、英語は翻訳） |
| `src/data/content/meta/` | 言語に依存しないデータ（ISO コード、Hofstede スコア、Culture Map の位置） |
| `scripts/validate-data.ts` | スキーマ・記述 ID・日英の対応・英語版への日本語混入をチェック |
| `src/` | Astro のサイト本体 |

## 開発

Node 24 と pnpm 12 が必要です。

```sh
pnpm install
pnpm dev            # http://localhost:4321/wtfe/
pnpm validate:data  # CI では REQUIRE_EN=1
pnpm lint && pnpm check && pnpm test
pnpm build && pnpm test:e2e
```

## 貢献

訂正を歓迎します。対象国に住んで働いているエンジニアからの指摘は特にありがたいです。issue か pull request で、記述 ID（例: `de-hierarchy-2`）と出典を添えて送ってください。公開された出典のない記述は受け付けていません。

## ライセンス

コードは [MIT](LICENSE)、コンテンツ（文章とデータ）は [CC BY 4.0](LICENSE-CONTENT) です。
