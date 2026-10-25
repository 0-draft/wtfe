# オランダ

_調査日: 2026-10-25_

## 調査メモ

- Hofstede のスコアは Culture Factor の比較ツールから 2026-10 に取得した。IDV は 100 で、2010 年版書籍で広く引用される値とは食い違う。Culture Factor 側の改訂と考えられるが、改訂の告知文そのものは見つけていない（推論）
- 育休制度は一次資料（government.nl・business.gov.nl）の取得に失敗したため載せていない（要追加調査）
- 途中で WebSearch の上限に達したので、それ以降の補強はしていない

## Hofstede 6D

Culture Factor 比較ツール（2026-10 取得）: PDI 38 / IDV 100 / MAS 14 / UAI 53 / LTO 67 / IVR 68 ([source](https://www.theculturefactor.com/country-comparison-tool?countries=denmark%2Cfinland%2Cnetherlands%2Cnorway%2Csweden))

## 設計と品質

- Python は Guido van Rossum が CWI（アムステルダムの国立数学・情報科学研究所）で作った。本人の説明によれば、ABC グループで言語を実装した経験と ABC の拡張性のなさへの不満、さらに Amoeba 分散 OS グループでのシステム管理の必要が動機になり、1989 年のクリスマス休暇に実装を始めた。1990 年に CWI 内でリリースし、1991-02-20 に 0.9.0 を alt.sources で公開、1994-01-26 に 1.0.0 を出した [強] ([source](https://docs.python.org/3/faq/general.html)), ([source](https://python-history.blogspot.com/2009/01/brief-timeline-of-python.html))
- Booking.com は「実験で決める」文化の代表例。同時に 1,000 件超、年間 2.5 万件以上の A/B テストを回し、陽性結果が出るのは約 10% にとどまる。社内ルールは「誰でも、経営の許可なく何でもテストできる」（Thomke, HBR 2020-03）。事前に設計を固めるより、データで反復するスタイル [中] ([source](https://hbr.org/2020/03/building-a-culture-of-experimentation))
- オランダ全体の「品質観」を示す国レベルのデータは見つからなかった [弱]

## 失敗とリスク

- UAI は 53 で中程度。リスクに寛容とも慎重とも言い切れない [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=denmark%2Cfinland%2Cnetherlands%2Cnorway%2Csweden))
- ING（オランダの銀行）は 2015 年に Spotify 型の squad / tribe 体制へ移行した。各 tribe は四半期ごとに成果と「最大の学び」を書き出し、成功も失敗も祝う運用にした（McKinsey インタビュー、2017-01）[中] ([source](https://www.mckinsey.com/industries/financial-services/our-insights/ings-agile-transformation))
- Booking.com の HBR 記事でも、実験の約 9 割は仮説を支持しない結果に終わることが前提として組み込まれている [中] ([source](https://hbr.org/2020/03/building-a-culture-of-experimentation))
  _訂正 2026-10-25: 「約 9 割は失敗」→「約 9 割は仮説を支持しない」。出典は陽性約 1 割・残りは仮説不支持と述べており、「失敗」とは書いていない_

## フィードバックとコードレビュー

- Meyer は Evaluating で「直接的」、Disagreeing で「対立を厭わない」側の代表としてオランダを挙げる。本からの引用は「the Dutch manager learns always to be honest and to give the message straight」[中] ([source](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams))
- 注意点として、オランダの「率直さ」を職場で直接測った査読研究は見つからなかった。オランダ人の率直さと合意志向の干拓地モデル（polder model）を結びつけて語っているのは主に駐在員向けガイドで、根拠は弱め [弱] ([source](https://www.expatrepublic.com/poldermodel/))

## 階層と意思決定

- PDI は 38 で低い。Meyer の Leading スケールでは egalitarian、Deciding スケールでは consensual（スウェーデン・日本と同じ側）[中] ([source](https://mind.li/explore/37057-the-culture-map-by-erin-meyer-study-analysis-guide))
- 協議と議論を重ねて実利的な合意に至る「polderen」の影響を、管理職 808 人を構造方程式モデリングで分析した研究がある（Contemporary Management Research, 2018）[中] ([source](https://www.cmr-journal.org/article/download/18279/pdf))
- 反証として、polder model は過大評価されているという議論もある。Woldendorp & Keman（2007）は 1965〜2000 年を検証し、労使の交渉は厳しく、中央協約が結ばれた割合は低かったとしている [中] ([source](https://research.vu.nl/en/publications/the-polder-model-reviewed-dutch-corporatism-1965-2000/))
  _訂正 2026-10-25: 「1980 年代に合意があった証拠は乏しい」→ 1965〜2000 年の検証で中央協約の割合が低かった、に修正。サイト本文（出典の要旨）に合わせた_

## コミュニケーションとドキュメント

- Meyer の Communicating スケールでは、オランダは米・加・豪と並ぶ low-context（明示的）文化の例 [中] ([source](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams))
  _訂正 2026-10-25: 「米・加・豪に次ぐ」→「並ぶ」。出典は同列の例として挙げており、順位は付けていない_
- 「議題（agenda）は神聖」で事前の予定化を重んじる、という言説は実務ガイドにしか見当たらない [弱] ([source](https://www.nlcompass.com/guides/dutch-working-culture))

## 働き方とキャリア

- 主たる仕事の週実労働時間は 2024 年に 32.1 時間で EU 最短（EU 平均 36.0）。主因はパートタイム比率の高さで、フルタイムに限れば EU 平均との差は縮む [強] ([source](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250514-1)), ([source](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Actual_and_usual_hours_of_work))
- 在宅勤務: 「時々在宅」まで含めると 2023 年に就業者の 52%（CBS〔オランダ中央統計局〕、2024 年公表）。一方「主に在宅」は 2022 年の EU 比較で 12.7% で、フィンランド（23.1%）やアイルランド（25.3%）より低い [中] ([source](https://www.cbs.nl/en-gb/news/2024/11/over-half-of-dutch-people-work-from-home-sometimes))
  _訂正 2026-10-25: 「2024 年」はデータ年ではなく公表年。出典ではデータは 2023 年で 52%、主に在宅は 2022 年の 12.7%_
- Stack Overflow の 2024 年調査の分析では、オランダの開発者の職務満足度は給与水準にあまり左右されなかった（ブラジルやフランスとは対照的）。国別の数値の詳細は未確認 [中] ([source](https://thenewstack.io/salary-pressures-not-ai-vex-developers-says-stack-overflow/))
- 育休制度は一次資料を取得できなかったため載せていない（要追加調査）

## OSS とコミュニティ

- Python（CWI、1991 年公開）。Guido は 2018-07-12 に python-committers への投稿「Transfer of power」で BDFL を退いた [強] ([source](https://mail.python.org/pipermail/python-committers/2018-July/005664.html))
- Booking.com は実験基盤の文化で業界に影響を与えた。Thomke（2020）が事例として取り上げている [中] ([source](https://hbr.org/2020/03/building-a-culture-of-experimentation))
- ING の squad / tribe は「Spotify モデル」を金融大企業に移植した代表例。ただし Jeremiah Lee の批判（Spotify 自身も完全には実装しなかった理想像）はこうした移植にもそのまま当てはまる [中] ([source](https://www.mckinsey.com/industries/financial-services/our-insights/ings-agile-transformation)), ([source](https://www.jeremiahlee.com/posts/failed-squad-goals/))

## 一言で

個人主義が極めて強く（IDV 100）、率直で明示的に話す。それでいて意思決定は協議を重ねて合意する（polder）。率直さと合意形成が同居している。

## Sources

- [Culture Factor country comparison tool (Hofstede)](https://www.theculturefactor.com/country-comparison-tool?countries=denmark%2Cfinland%2Cnetherlands%2Cnorway%2Csweden)
- [Python FAQ – Why was Python created in the first place?](https://docs.python.org/3/faq/general.html)
- [Guido van Rossum – A Brief Timeline of Python (2009)](https://python-history.blogspot.com/2009/01/brief-timeline-of-python.html)
- [Guido van Rossum – Transfer of power (2018)](https://mail.python.org/pipermail/python-committers/2018-July/005664.html)
- [HBR – Building a Culture of Experimentation (Thomke 2020)](https://hbr.org/2020/03/building-a-culture-of-experimentation)
- [McKinsey – ING's agile transformation (2017)](https://www.mckinsey.com/industries/financial-services/our-insights/ings-agile-transformation)
- [Jeremiah Lee – Spotify's Failed #SquadGoals (2020)](https://www.jeremiahlee.com/posts/failed-squad-goals/)
- [Welcome to the Jungle – Erin Meyer 8 keys](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams)
- [Mindli – The Culture Map study guide](https://mind.li/explore/37057-the-culture-map-by-erin-meyer-study-analysis-guide)
- [Contemporary Management Research 2018 – Dutch managerial leadership / polder](https://www.cmr-journal.org/article/download/18279/pdf)
- [Woldendorp & Keman 2007 – Polder model reviewed](https://research.vu.nl/en/publications/the-polder-model-reviewed-dutch-corporatism-1965-2000/)
- [ExpatRepublic – Poldermodel](https://www.expatrepublic.com/poldermodel/)
- [NL Compass – Dutch working culture](https://www.nlcompass.com/guides/dutch-working-culture)
- [Eurostat news 2025-05-14 – weekly hours](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250514-1)
- [Eurostat – Actual and usual hours of work](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Actual_and_usual_hours_of_work)
- [CBS – Over half of Dutch people work from home sometimes](https://www.cbs.nl/en-gb/news/2024/11/over-half-of-dutch-people-work-from-home-sometimes)
- [The New Stack – Stack Overflow 2024 salaries](https://thenewstack.io/salary-pressures-not-ai-vex-developers-says-stack-overflow/)
