# wtfe — Ways They Frame Engineering

[English](README.md)

世界各国のソフトウェアエンジニアが、どう考え、どう働く傾向にあるかをまとめたサイトです。扱うテーマは、設計と品質、失敗とリスク、フィードバックとコードレビュー、階層と意思決定、コミュニケーションとドキュメント、働き方とキャリア、OSS の 7 つです。すべての記述に出典と信頼度を付けています。

サイト: <https://0-draft.github.io/wtfe/ja/>（日本語） · <https://0-draft.github.io/wtfe/>（English）

## 最初に読んでほしいこと

- ここに書いてあるのは傾向であって、その国の人の性質ではありません。文化的価値のばらつきの約 8 割は国と国の間ではなく、国の内部にあります（[Taras, Steel & Kirkman 2016](https://link.springer.com/article/10.1007/s11575-016-0283-x)）。会社やチームの文化のほうが、国の文化より強く影響することもよくあります。
- 位置づけは相対的なものです。東京から見ると米国は率直ですが、アムステルダムから見ると遠回しに見えます。
- 各記述には信頼度のラベルを付けています。**裏付け十分** は公的統計、一次資料、発行元で確認した大規模調査、査読付きの定量研究、組織が自らの運用について書いた資料。**裏付けあり** は Hofstede や Meyer などの枠組み、単独の報道、Wikipedia、業界団体、定性研究。**裏付け薄** はブログ、掲示板、ベンダー資料、要約サイト、単独の逸話で、ほかに根拠がないときだけ残しています。2016 年より前の出典には「古い資料」と付けます。基準の全文は[読み方のページ](https://0-draft.github.io/wtfe/ja/method/)にあります。

## 対象

日本、韓国、中国、インド、米国、英国、ドイツ、フランス、北欧、オランダ、イスラエル、ブラジル、ポーランド、ウクライナの 14 の国と地域を扱います。あわせて、Hofstede の 6 次元（Culture Factor の現行値）と、Erin Meyer の Culture Map の 8 尺度も載せています。Culture Map は細かい数値にせず、あえて粗い 7 段階で示しています。

## ページ

| ページ | 内容 |
| --- | --- |
| [トップ](https://0-draft.github.io/wtfe/ja/) | 根拠の地図。国とテーマごとに、記述の数と裏付けの強さを示す |
| [国](https://0-draft.github.io/wtfe/ja/countries/) | 国ごとのページ。テーマ別の記述、国内のばらつき、尺度上の位置 |
| [テーマ](https://0-draft.github.io/wtfe/ja/themes/) | 1 つのテーマを全部の国で並べる |
| [尺度](https://0-draft.github.io/wtfe/ja/scales/) | Meyer の 8 尺度と Hofstede の 6 次元。国を選ぶと、その国から見た位置関係に切り替わる（`?from=jp`） |
| [比較](https://0-draft.github.io/wtfe/ja/compare/) | 2 か国の組み合わせ。`jp-vs-de` は日本から見たドイツで、差の大きい尺度から並ぶ |
| [出典](https://0-draft.github.io/wtfe/ja/sources/) | 引用した出典の一覧と、それを使っている記述 |
| [読み方](https://0-draft.github.io/wtfe/ja/method/) | 記述の集め方と信頼度の付け方、このサイトを読むときの注意 |

検索は `/` か Ctrl/⌘-K で開きます。

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
