# United States

_調査日: 2026-10-25_

## Hofstede

- The Culture Factor 現行値（2023 年に IDV・LTO 改訂）：PDI 40 / IDV 60 / MAS 62 / UAI 46 / LTO 50 / IVR 68（比較ツールをブラウザで描画して確認）([The Culture Factor](https://www.theculturefactor.com/country-comparison-tool?countries=united+states))
- 参考（2010 年系の旧値、meta には使わない）：PDI 40 / IDV 91 / MAS 62 / UAI 46 / LTO 26 / IVR 68 ([clearlycultural](https://clearlycultural.com/geert-hofstede-cultural-dimensions/power-distance-index/), [cyborlink](https://www.cyborlink.com/besite/hofstede.htm))

## 設計と品質

- Google ではコードを書く前に「比較的インフォーマルな」design doc を書く文化があり、重視するのは網羅的な仕様ではなく、検討したトレードオフと代替案の記録（Malte Ubl, 2020）[中] ([source](https://www.industrialempathy.com/posts/design-docs-at-google/))
- design doc は「必要な分だけ長く、できるだけ短く」が理想とされ、重いウォーターフォール型の仕様書とは別物 [中] ([source](https://www.industrialempathy.com/posts/design-doc-a-design-doc/))
- Meyer の Persuading 軸で US は applications-first（結論と事例から入る）。「why より how」を好むので、理論的な設計の正当化よりも動くものや具体例で説得する傾向につながる（推論）[中] ([source](https://www.theinvestorspodcast.com/billionaire-book-club-executive-summary/the-culture-map/))
- 国内差：上記の「design doc を書いて iterate」は大手テック企業の例で、規制業種や大企業 IT 部門に同じことが言えるデータは見つけられなかった [弱] (データなし)

## 失敗とリスク

- Google SRE は blameless postmortem を明文化している。「個人やチームを責めずに寄与要因を特定する」「関係者は善意で動いていたと仮定する」「人は直せないがシステムとプロセスは直せる」[強] ([source](https://sre.google/sre-book/postmortem-culture/))
- 「Move fast and break things」は Facebook の 2012 年 S-1 に載ったスローガンだが、2014 年の F8 で Zuckerberg 自身が「Move fast with stable infra」に変えた。規模が大きくなると、壊れたものを直すコストが速さの利益を上回るのが理由。「US = 雑に速い」への反証になる [強] ([source](https://techcrunch.com/2014/04/30/facebook-api-guarantee))
- Hofstede の UAI は中位よりやや低く、不確実性を比較的許容する。ただし国全体の値なので、エンジニアのリスク行動に直結させるのは推論（UAI 46）[中] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=united+states))

## フィードバックとコードレビュー

- Meyer によると、アメリカ人は「否定的なメッセージを肯定的なメッセージで包む」よう訓練されている（feedback sandwich）。コミュニケーション全般は直接的だが、否定的な評価（Evaluating 軸）では中位 [中] ([source](https://erinmeyer.com/how-to-say-this-is-crap-in-different-cultures/))
- 結果として「言い方はポジティブ、要求は明確」になりやすい。オランダ人やドイツ人は褒め言葉を本気と受け取り、逆に US 側はオランダやドイツの批判を強すぎると感じる、というズレが典型例 [中] ([source](https://4squareviews.com/2016/09/15/the-evaluation-scale-on-the-cultural-map/))
- GitHub の PR 受理率を国別に分析した研究（17 か国、70k 件超の PR）では、レビュアーと提出者が同じ国だと受理率が高い傾向があった。国によるバイアスはあるが、Hofstede 的な文化次元と結びつけた実証研究は見つけられなかった [中] ([source](https://www.microsoft.com/en-us/research/publication/relationship-between-geographical-location-and-evaluation-of-developer-contributions-in-github/))

## 階層と意思決定

- Meyer の分類で US は「egalitarian だが top-down」。ファーストネームで呼び合い、会議で発言も促されるが、決めるのはボスで、決定は速い。決定は「仮置き」で、新しい論拠が出れば変わる（HBR 2017）[中] ([source](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf))
- 日本人から見ると、US のボスは表面上フラットなのに、決め方は「極めて独裁的」に映るとされる [中] ([source](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf))
- Hofstede の PDI は 40 で低め。権威との距離が小さい [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=united+states))
- design doc や RFC で書面の合意を取ってから進める方式は大手テック企業でよく知られているが、普及率を示す統計は見つからなかった [弱] ([source](https://www.industrialempathy.com/posts/design-docs-at-google/))

## コミュニケーションとドキュメント

- Meyer の Communicating 軸で、US は最も low-context な極にいる（明示的で、繰り返しや要約を好む）[中] ([source](https://lifeclub.org/books/the-culture-map-erin-meyer-review-summary))
- Amazon では「PowerPoint は使わない」。6 ページのナラティブ memo を会議の冒頭に全員で黙読し、memo に著者名は書かずチームのものとして扱う（Bezos 2017 年株主書簡）[強] ([source](https://www.aboutamazon.com/news/company-news/2017-letter-to-shareholders))
- 起源は 2004 年の Bezos のメールで、「良い 4 ページの memo は 20 ページのスライドより難しい。ナラティブ構造が思考を強制するから」と書いている [中] ([source](https://www.cnbc.com/2018/04/23/what-jeff-bezos-learned-from-requiring-6-page-memos-at-amazon.html))
- Stripe も memo 文化で、スライドはほぼ使わず、会議冒頭に黙読してドキュメントにコメントする。ただし創業者は Irish なので、US 文化というより US テック界の文化と見るべき [中] ([source](https://slab.com/blog/stripe-writing-culture/))

## 働き方とキャリア

- BLS によると、US 全体の勤続年数の中央値は 3.9 年（2024 年 1 月、2002 年以来の最低）、民間部門では 3.5 年 [強] ([source](https://www.bls.gov/news.release/archives/tenure_09262024.htm))
- Montana を除く全州で at-will employment がデフォルト。違法な理由でなければ、雇用主も従業員もいつでも雇用関係を終了できる。layoff が速い制度的な背景のひとつ [強] ([source](https://www.usa.gov/termination-for-employers))
- layoffs.fyi の集計では、テック業界の layoff は 2023 年に約 26 万人、2024 年に約 15 万人（549 社）。トラッカーによって数値が倍近く違うので注意 [中] ([source](https://techcrunch.com/2024/12/31/a-comprehensive-archive-of-2024-tech-layoffs/))
- Stack Overflow 2025 では、フルリモートの割合が US 45% で、上位回答国の中で最も高い。給与中央値は EM $200k、back-end $175k、full-stack $138k（自己選択サンプル）[強] ([source](https://survey.stackoverflow.co/2025/work))
- マネージャーにならない IC トラックの Staff+ 職が制度として確立している。Will Larson は Tech Lead / Architect / Solver / Right Hand の 4 類型を示した（2021）[中] ([source](https://staffeng.com/book/))

## OSS とコミュニティ

- Octoverse 2025 で US は開発者数 1 位（2020 年 10.2M → 2025 年 28M）。OSS へのコントリビューター数はインドに次ぐ 2 位、総コントリビューション数では 1 位 [強] ([source](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/))
- 2020→2025 年の年平均成長率は、上位 5 か国の中で US が最も遅く（20.96%）、2030 年にはインドに抜かれる予測 [中] ([source](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/))

## 一言で

フラットに見えて決定はトップダウンで速い。書面（design doc / memo）と blameless な振り返りで速さを支え、雇用の流動性は高い。ただし「break things」の看板は 2014 年に自ら下ろしている。

## Sources

- [Google SRE Book: Postmortem Culture](https://sre.google/sre-book/postmortem-culture/)
- [Design Docs at Google (Malte Ubl, 2020)](https://www.industrialempathy.com/posts/design-docs-at-google/)
- [Design docs - A design doc (2015)](https://www.industrialempathy.com/posts/design-doc-a-design-doc/)
- [Amazon 2017 Letter to Shareholders](https://www.aboutamazon.com/news/company-news/2017-letter-to-shareholders)
- [CNBC: Bezos 6-page memos (2018)](https://www.cnbc.com/2018/04/23/what-jeff-bezos-learned-from-requiring-6-page-memos-at-amazon.html)
- [Slab: How Stripe Built a Writing Culture](https://slab.com/blog/stripe-writing-culture/)
- [TechCrunch: Facebook F8 2014 stable infra](https://techcrunch.com/2014/04/30/facebook-api-guarantee)
- [Erin Meyer: How To Say "This Is Crap" In Different Cultures](https://erinmeyer.com/how-to-say-this-is-crap-in-different-cultures/)
- [Erin Meyer: Being the Boss in Brussels, Boston, and Beijing (HBR 2017 PDF)](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf)
- [4squareviews: Evaluation scale](https://4squareviews.com/2016/09/15/the-evaluation-scale-on-the-cultural-map/)
- [lifeclub: Culture Map summary](https://lifeclub.org/books/the-culture-map-erin-meyer-review-summary)
- [The Investor's Podcast: Culture Map summary](https://www.theinvestorspodcast.com/billionaire-book-club-executive-summary/the-culture-map/)
- [The Culture Factor: Country comparison tool](https://www.theculturefactor.com/country-comparison-tool?countries=united+states)
- [clearlycultural: Power Distance](https://clearlycultural.com/geert-hofstede-cultural-dimensions/power-distance-index/)
- [cyborlink: Hofstede](https://www.cyborlink.com/besite/hofstede.htm)
- [Stack Overflow Developer Survey 2025: Work](https://survey.stackoverflow.co/2025/work)
- [GitHub Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
- [BLS Employee Tenure 2024](https://www.bls.gov/news.release/archives/tenure_09262024.htm)
- [USA.gov: Termination guidance for employers](https://www.usa.gov/termination-for-employers)
- [TechCrunch: 2024 tech layoffs archive](https://techcrunch.com/2024/12/31/a-comprehensive-archive-of-2024-tech-layoffs/)
- [StaffEng book (Will Larson)](https://staffeng.com/book/)
- [Rastogi et al.: Geographical location and PR evaluation (MSR)](https://www.microsoft.com/en-us/research/publication/relationship-between-geographical-location-and-evaluation-of-developer-contributions-in-github/)
