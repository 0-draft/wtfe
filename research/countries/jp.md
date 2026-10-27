# Japan

_調査日: 2026-10-25_

_このノートは調査時点の記録。各記述の信頼度（[強]/[中]/[弱]）と数値の最終版は `src/data/content/{ja,en}/countries/` の JSON が正で、校正で変えた数値は `_訂正_` 行で示している。_

Hofstede（The Culture Factor 現行値）: PDI 54 / IDV 62 / MAS 95 / UAI 92 / LTO 100 / IVR 42。旧版の値は IDV 46 / LTO 88 で、多くの文献はこちらを引用している ([source](https://www.theculturefactor.com/country-comparison-tool?countries=japan%2Csouth+korea))

## Design & quality

- 2021 年時点のアジャイル開発の活用率は日本企業 19.3%、米国 55.0%。DevOps は 10.9% と 52.6%、デザイン思考は 14.7% と 53.2%。iterate 型の開発手法の普及は米国よりかなり遅い [強] ([source](https://atmarkit.itmedia.co.jp/ait/articles/2110/13/news036.html))
- 2023 年の DX 白書でも、アジャイルの原則を組織ガバナンスに取り入れている日本企業はどの部門でも半数以下だった [中] ([source](https://www.sbbit.jp/article/cont1/73359))
- 品質要求の高さは OSS の扱いにも出ている。LF Research の 2025 年の調査では、日本企業の約 9 割が無償の OSS にもトラブル時の「12 時間以内の応答」を期待していた。Hofstede の UAI 92（不確実性回避が非常に強い）とも整合する。ただし両者の因果関係は推論 [中] ([source](https://atmarkit.itmedia.co.jp/ait/articles/2601/06/news047.html)) ([source](https://techtarget.itmedia.co.jp/tt/article/2512/19/225121904/))
- 社内の差は大きい。受託や SIer の世界では、公取委の 2022 年の調査が「仕様変更への無償対応要求」を問題として挙げている。仕様は契約上の争点になりやすく、upfront に固めたがる構造的な動機がある（推論）[中] ([source](https://www.jftc.go.jp/houdou/pressrelease/2022/jun/220629_software.html))

## Failure & risk

- DX 白書 2023 で「リスクを取り、チャレンジすることが尊敬される」と答えた企業は日本 15%、米国 42.5% [中]（IPA 図 6 を引用した二次資料） ([source](https://dx.genetec.co.jp/column/0025-dx/))
- Hofstede の UAI 92 は世界でも最上位級の不確実性回避で、MAS 95 も非常に高い [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=japan%2Csouth+korea))
- 反証として、Web 系では blameless な postmortem が定着している。メルカリは 2018 年の時点で「批判をせず原因究明に集中するためにコードを主語として話す」方針を公開し、振り返りには職種を問わず全員で参加する運用だった（2018 年の記事なので古い）[中] ([source](https://engineering.mercari.com/blog/entry/2018-04-10-090453/))
- メルカリでは postmortem を書けることがエンジニアラダー（評価基準）に入っている、とイベントの LT で報告された [弱] ([source](https://togetter.com/li/2073603?page=4))
  _訂正 2026-10-27: メルカリ公開のエンジニアリングラダー (jp/MG3.md) を確認。ポストモーテムは評価項目そのものではなく、Professionalism の情報共有の「例」として挙がっている。記述を直し、出典をラダー本体に変えて [強] に上げた_

## Feedback & code review

- Erin Meyer の尺度では、日本は Evaluating が「間接的なネガティブフィードバック」、Disagreeing が「対立回避」寄り。人前での批判は避けるのが基本とされる [中] ([source](https://accent-language.com/en/blog/erin-meyers-culture-map-japan)) ([source](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/))
- 日本人開発者の体験談では、「なんか違和感がある」がそれだけでレビューコメントとして成立し、規約は明文化されないままレビューで暗黙に強制されるという。個人の経験談 [弱] ([source](https://dev.to/yun_bow/why-high-context-culture-makes-ai-coding-harder-a-japanese-developers-perspective-123a))
- 反証として、ネット上には「マサカリを投げる」（鋭く強い技術的指摘）というスラングと文化がある。オンラインでは直接的で辛辣な指摘も珍しくない。ただしこれを日本特有と見るかについては異論もある [弱] ([source](https://bootcamp.fjord.jp/articles/70)) ([source](https://anond.hatelabo.jp/20200623222321))
- must / imo / nits といったコメントタグで指摘の強さを明示し、心理的安全性を保つ実践も広がっている [弱] ([source](https://build.yoku.co.jp/articles/lbh02jlffz))
  _訂正 2026-10-27: 組織自身の公開資料に差し替え: ハコベル (Zenn, 2023) と フューチャーのコードレビューガイドライン (MUST/IMO/NITS)。[弱]→[強]_

## Hierarchy & decision-making

- Meyer は日本を「階層的」かつ「合意型」の例外として扱っている。下位の層で合意を作ってから上に上げる稟議・根回しは、特に大企業で一般的とされる [中] ([source](https://accent-language.com/en/blog/erin-meyers-culture-map-japan)) ([source](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/))
- Hofstede の PDI 54 は中間的な値。The Culture Factor は日本を「意思決定が各階層で確認される、境界的な階層社会」と説明している [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=japan%2Csouth+korea))
- Meyer は HBR で、日本人から見ると米国の上司は「外見は平等的だが、意思決定は極めて独裁的」に映ると書いている。トップダウンの速い決定と合意形成の違いが摩擦になりやすい（2017 年）[中] ([source](https://hbr.org/2017/07/being-the-boss-in-brussels-boston-and-beijing))

## Communication & documentation

- Meyer の Communicating 尺度で、日本は最も高コンテクストな国の一つ（Korea、Indonesia と並ぶ）。「空気を読む」がキーワード [中] ([source](https://readingraphics.com/book-summary-the-culture-map-erin-meyer/)) ([source](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/))
  _訂正 2026-10-27: Meyer 本人の資料では高文脈の例は「Japan, India, and France」。Korea・Indonesia と並ぶという点は確認できず削った。「空気を読む」は erinmeyer.com/book/ で確認_
- DX 白書 2023 で「社内の風通しがよく、情報共有がうまくいっている」と答えた企業は日本 17.3%、米国 66.8% [中]（二次引用） ([source](https://dx.genetec.co.jp/column/0025-dx/))
- 反証として、Meyer は日本を時間感覚が linear（時間厳守、アジェンダに従う）側に置いている。その点では「ドイツ型」と言える [中] ([source](https://accent-language.com/en/blog/erin-meyers-culture-map-japan))
- 外向きの文書発信は活発。Qiita は 2025 年 3 月に会員 150 万人を超え、月間 UU は 800 万。2024 年には良質記事の数で Zenn が Qiita を逆転したという個人分析もある [中] ([source](https://corp.qiita.com/releases/2025/04/one-million-five-hundred-thousand/)) ([source](https://zenn.dev/mima_ita/articles/f78dcbef2a81d3))

## Work style & careers

- 日本の IT 人材の 73.6% が IT 企業（ベンダー）に所属している（2020 年国勢調査）。米国は 35.1% で、65% 前後がユーザー企業側にいる。これが SIer 中心の構造を示す最重要データ [強] ([source](https://www.ipa.go.jp/archive/press/2022/press20230316-2.html)) ([source](https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h30/html/nd114140.html))
  _訂正 2026-10-27: IPA「DX動向2024」(2024-07) を追加。米国側を 2023 年 OES で更新し、日本 74:26、米国 35:65。DX動向2025 の「73.6%」は別の指標なので混ぜない_
- 多重下請けについて、公取委の 2022 年の調査（法人 4,739 社と SE 2,316 人が回答）では、「中抜き」事業者の存在を感じたことがある事業者は 25.9%、最終下請けに限ると 33.5% だった [強] ([source](https://it.impress.co.jp/articles/-/23838)) ([source](https://www.jftc.go.jp/houdou/pressrelease/2022/jun/220629_software.html))
  _訂正 2026-10-25: 「下請けの 25%」→「事業者の 25.9%（最終下請けは 33.5%）」。出典では 25.9% で、母数は下請けに限らない回答事業者全体_
  _訂正 2026-10-27: 公取委にこれより新しいソフトウェア業の下請調査は無い (2026-10 時点)。2026-01-01 に下請法が取適法に変わり、従業員数基準 (製造委託等 300 人、役務提供委託等 100 人) が加わったことを追記_
- 2023 年の年間労働時間は日本 1,611 時間、韓国 1,872 時間（OECD）。「日本 = 長時間労働」というステレオタイプは、統計上はもう当てはまらない（全業種の値）[強] ([source](https://www.visualcapitalist.com/annual-working-hours-in-countries-2023/))
  _訂正 2026-10-26: 出典を Visual Capitalist から OECD の指標ページ (<https://www.oecd.org/en/data/indicators/hours-worked.html>) に差し替えた。Visual Capitalist の記事は 2021 年の値 (韓国 1,910、日本 1,607) で、2023 年の値は載っていない。OECD のページで 2023 年は日本 1,611、韓国 1,872、OECD 平均 1,745 と確認した。OECD はこの指標を国どうしの水準比較には向かないと注記しているので、その一文を本文に足した_
- リモートについて、国交省の令和 5 年度調査では雇用型テレワーカーの割合が最も高い業種は情報通信業で 72.8% だった。ファインディの 2024 年の調査では、リモートが減ったら 71.5% が転職やフリーランス転向を検討すると答えた。ただし転職サービスの登録者が母集団なので偏りがある [中] ([source](https://www.mlit.go.jp/toshi/kankyo/content/001735166.pdf)) ([source](https://note.lapras.com/it-news/remote-work_2024/))
  _訂正 2026-10-26: 71.5% はファインディの「IT/Web エンジニア調査レポート 2024 年 9 月版」(2024 年 7〜8 月、n=681) の値で、リンク先の LAPRAS の記事 (2024 年 10 月、n=387) は別の調査だ。LAPRAS 側の結果は「約 6 割がフルリモート、週 5 日出社になったら約半数が転職」。ファインディの PDF は 2026-10 時点で 404 になっており、本文で再確認できない。JSON にはこの数字を載せていない_
- 流動性は上がりつつある。LAPRAS の 2024 年の調査では「転職を考えているが動いていない」潜在層が拡大している。総務省は「雇用慣習の違いから人材流動性が低い」と注記している [中] ([source](https://news.mynavi.jp/techplus/article/20240529-2954780/)) ([source](https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h30/html/nd114140.html))

## OSS & community

- 開発者人口は急増している。GitHub Octoverse によると、2023 年は 280 万人超で前年比 31%、2024 年は 350 万人超で前年比 23%。2020〜2025 年で 3 倍以上に増えた [強] ([source](https://github.blog/news-insights/research/the-state-of-open-source-and-ai/)) ([source](https://github.blog/jp/2024-12-17-octoverse-2024/))
- 企業の OSS 貢献は弱い。LF Research の 2025 年の調査では、貢献の障壁として IP の懸念 52%、社内ポリシーの欠如 51%（世界平均 28%）が挙がり、OSPO の設置は 41%。IPA の 2024 年度調査では 8 割以上がガバナンス体制を持っていない。両者の数字は大きく食い違っている [強] ([source](https://thinkit.co.jp/article/38820)) ([source](https://blog.vonxai.co.jp/post/ipa-oss-report-2024-strategy/))
- 言語の壁について、EF EPI 2024 で日本は 116 か国中 92 位（Low）で、過去最低だった。IPA も OSS 貢献の障壁に「英語への心理的バイアス」を挙げている [強] ([source](https://www.japantimes.co.jp/business/2024/11/15/economy/japan-digital-competitiveness-english-ranking/)) ([source](https://blog.vonxai.co.jp/post/ipa-oss-report-2024-strategy/))
  _訂正 2026-10-27: EF EPI 2025 に差し替え。「116 か国中 92 位 (Low)」→「123 か国中 96 位、446、Very low」。出典を Japan Times から EF の国別ページに変えた (<https://www.ef.com/wwen/epi/regions/asia/japan/>)_
- 代表的なプロジェクトは Ruby（まつもとゆきひろ、1995 年公開）。日本語圏でコミュニティが自己完結しやすいことは利点でもあり、孤立の要因でもある（後半は推論）[中] ([source](https://www.ruby-lang.org/en/about/))
- 調査データの限界として、Stack Overflow Survey 2024 の日本の回答は 286 件（0.5%）しかなく、日本の開発者像をこの調査から語るのは無理 [強] ([source](https://survey.stackoverflow.co/2024/developer-profile))

## 一言で

不確実性回避が非常に強く、根回しで合意を作る高コンテクストな文化で、エンジニアの 7 割がベンダー側に偏った SIer 構造の上にある。ただし Web 系では blameless な運用やリモートが標準になっており、国内の二極化が大きい。

## Sources

- [The Culture Factor country comparison](https://www.theculturefactor.com/country-comparison-tool?countries=japan%2Csouth+korea)
- [Accent Language: Culture Map Japan](https://accent-language.com/en/blog/erin-meyers-culture-map-japan)
- [Deployyourself: Culture Map review](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/)
- [Readingraphics: Culture Map summary](https://readingraphics.com/book-summary-the-culture-map-erin-meyer/)
- [HBR: Being the Boss in Brussels, Boston, and Beijing](https://hbr.org/2017/07/being-the-boss-in-brussels-boston-and-beijing)
- [@IT: DX白書2021](https://atmarkit.itmedia.co.jp/ait/articles/2110/13/news036.html)
- [ビジネス+IT: DX白書2023](https://www.sbbit.jp/article/cont1/73359)
- [Genetec: DX白書2023 企業文化](https://dx.genetec.co.jp/column/0025-dx/)
- [IPA プレス 2023-03-16](https://www.ipa.go.jp/archive/press/2022/press20230316-2.html)
- [総務省 平成30年版情報通信白書](https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h30/html/nd114140.html)
- [公取委 ソフトウェア業実態調査](https://www.jftc.go.jp/houdou/pressrelease/2022/jun/220629_software.html)
- [インプレス: 公取委調査](https://it.impress.co.jp/articles/-/23838)
- [メルカリ: インシデント対応](https://engineering.mercari.com/blog/entry/2018-04-10-090453/)
- [Togetter: ポストモーテム LT](https://togetter.com/li/2073603?page=4)
- [DEV: High-Context Culture (JP dev)](https://dev.to/yun_bow/why-high-context-culture-makes-ai-coding-harder-a-japanese-developers-perspective-123a)
- [FJORD: マサカリ](https://bootcamp.fjord.jp/articles/70)
- [はてな匿名ダイアリー: マサカリ](https://anond.hatelabo.jp/20200623222321)
- [YOKU: レビューのフィードバック分類](https://build.yoku.co.jp/articles/lbh02jlffz)
- [Qiita 150万人](https://corp.qiita.com/releases/2025/04/one-million-five-hundred-thousand/)
- [Zenn: Qiita/Zenn比較](https://zenn.dev/mima_ita/articles/f78dcbef2a81d3)
- [OECD: Hours worked](https://www.oecd.org/en/data/indicators/hours-worked.html)
- [国交省 令和5年度テレワーク調査](https://www.mlit.go.jp/toshi/kankyo/content/001735166.pdf)
- [LAPRAS リモート調査2024](https://note.lapras.com/it-news/remote-work_2024/)
- [マイナビ: ITエンジニア実態調査2024](https://news.mynavi.jp/techplus/article/20240529-2954780/)
- [GitHub Octoverse 2023](https://github.blog/news-insights/research/the-state-of-open-source-and-ai/)
- [GitHub Octoverse 2024 (JP)](https://github.blog/jp/2024-12-17-octoverse-2024/)
- [Think IT: LF 日本のOSS 2025](https://thinkit.co.jp/article/38820)
- [@IT: LF調査](https://atmarkit.itmedia.co.jp/ait/articles/2601/06/news047.html)
- [TechTarget: 12時間以内応答](https://techtarget.itmedia.co.jp/tt/article/2512/19/225121904/)
- [vonxai: IPA OSSレポート2024](https://blog.vonxai.co.jp/post/ipa-oss-report-2024-strategy/)
- [Japan Times: EF EPI 2024](https://www.japantimes.co.jp/business/2024/11/15/economy/japan-digital-competitiveness-english-ranking/)
- [Ruby: About](https://www.ruby-lang.org/en/about/)
- [Stack Overflow Survey 2024 Developer Profile](https://survey.stackoverflow.co/2024/developer-profile)
