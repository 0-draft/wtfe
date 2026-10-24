# 北欧（スウェーデン・フィンランド・デンマーク・ノルウェー）

_調査日: 2026-10-25_

## 調査メモ

- Hofstede のスコアは Culture Factor の比較ツールから 2026-10 に取得した。IDV と LTO は 2010 年版書籍の広く引用される値と食い違う。Culture Factor 側で改訂された可能性が高いが、改訂の告知文そのものは見つけていない（推論）
- Erin Meyer の 8 スケールで、フィンランドとノルウェーの具体的な位置は要約サイトや記事からは確認できなかった。国別の位置は `research/frameworks.md` の Culture Map 表（Meyer の講演スライドから読み取ったもの）を正とする
- 途中で WebSearch の上限に達したので、それ以降の補強はしていない

## Hofstede 6D

Culture Factor 比較ツール（2026-10 取得）。PDI / IDV / MAS / UAI / LTO / IVR の順 ([source](https://www.theculturefactor.com/country-comparison-tool?countries=denmark%2Cfinland%2Cnetherlands%2Cnorway%2Csweden))。

- スウェーデン: 31 / 87 / 5 / 29 / 52 / 78
- フィンランド: 33 / 75 / 26 / 59 / 63 / 57
- デンマーク: 18 / 89 / 16 / 23 / 59 / 70
- ノルウェー: 31 / 81 / 8 / 50 / 55 / 55
- 参考・日本: 54 / 62 / 95 / 92 / 100 / 42

## 設計と品質

- フィンランドは agile の学術研究で早くから存在感があった。VTT（フィンランド国立技術研究センター）の Abrahamsson らによる 2002 年のレビュー（VTT Publications 478）は、agile 手法を体系的に比較した初期の代表的な文献で、Scopus での被引用は 200 件超。ただしこれは「研究拠点としての存在感」であって、国全体の開発文化を示すものではない [中] ([source](https://cris.vtt.fi/en/publications/agile-software-development-methods-review-and-analysis))
- Spotify の 2014 年の文化動画は「小さく頻繁なリリース」「緩く結合し、強く整合する（loosely coupled, tightly aligned）」を掲げ、Scrum の作法は任意にしていた。つまり事前に重く設計するより反復を重んじる姿勢。ただし本人たちも「完成形ではなく道の途中」と断っている [中] ([source](https://engineering.atspotify.com/2014/03/spotify-engineering-culture-part-1))
- Supercell（フィンランド）は 5〜15 人程度の「cell」と呼ぶ小チームが、ゲームのライフサイクル全体と開発中止の判断まで持つ。経営陣の承認会議（greenlight）はない。品質のゲートは上層部のレビューではなくチームの自律に置いている [中] ([source](https://www.pocketgamer.biz/full-slush-2024-transcript-supercell-ceo-ilkka-paananen-on-the-clash-of-clans-developers-evolving-culture/))
- 「北欧のエンジニアは品質志向」といった国レベルの比較データは見つからなかった。この観点は事例ベースにとどまる [弱]

## 失敗とリスク

- Spotify は自社を「fail-friendly」と称していた。失敗を避けることより素早く回復することを重視し、postmortem は「誰のせいか」ではなく「何が起き、何を学び、何を変えるか」を扱う。そのうえで、失敗の影響範囲を小さく抑える「limited blast radius」を前提にしている（Kniberg, 2014）[中] ([source](https://www.youtube.com/watch?v=4GK1NDTWbkY))
- Supercell は開発中止したゲームの「学び」をシャンパンで祝う。CEO は 2016 年の BAFTA 講演でこの慣行を語り、Slush 2024 でも継続していると述べた [中] ([source](https://www.danielscrivner.com/supercell-founder-ilkka-paananen-game-design-lecture-at-bafta/))
- 反証として Nokia の例がある。Vuori & Huy（ASQ, 2016）は Nokia がスマートフォン競争に敗れた一因を組織内の恐怖に見ている。中間管理職が上層部や同僚を恐れて悪いニュースを上げず、経営陣は自社の技術力を過大評価した。フィンランドの大企業でも心理的安全性が崩れうることを示す。ただし後続研究からは「著者が恐怖を見つけるよう前提づけられていた」との批判もある [中] ([source](https://www.researchgate.net/publication/281965483_Distributed_Attention_and_Shared_Emotions_in_the_Innovation_Process_How_Nokia_Lost_the_Smartphone_Battle))
- UAI（不確実性の回避）は国によって差が大きい。デンマーク 23、スウェーデン 29 は低く、フィンランド 59、ノルウェー 50 は中程度。「北欧はリスクに寛容」と一括りにはできない [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=denmark%2Cfinland%2Cnetherlands%2Cnorway%2Csweden))

## フィードバックとコードレビュー

- Erin Meyer の Evaluating スケールでは、デンマークはオランダやドイツと並んで「率直なネガティブフィードバック」側に置かれている [中] ([source](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams))
- フィンランドの沈黙は研究で裏づけがある。Carbaugh ら（2006, Journal of Language and Social Psychology）は、沈黙や静けさ（hiljaisuus）を肯定的で自然なあり方として扱う文化コードを記述した。レビューの場で発言が少なくても、反論がないとは限らない [中] ([source](https://works.bepress.com/donal_carbaugh/7/))
- その一方で、「寡黙なフィンランド人」は一部が神話だとする研究者側の注意もある（Berry 2011, CercleS）[中] ([source](https://www.utu.fi/sites/default/files/media/KieVi/Berry-cercles-2011-0025-1.pdf))
- スウェーデンは対立を避け、合意を優先する傾向が研究で指摘されている（Lämsä 2010 が Ekwall & Karlsson 1999 を引用）。率直さではデンマークより穏当という見方もあるが、これを示す Meyer の一次資料は確認できなかった [弱] ([source](https://www.rmci.ase.ro/no11vol1/Vol11_No1_Article13.pdf))

## 階層と意思決定

- 権力格差（PDI）は全般に低い（DK 18、SE・NO 31、FI 33）。Meyer の Leading スケールでもデンマークとスウェーデンは egalitarian の典型として挙げられている [強] ([source](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams))
- 域内の差もはっきりしている。Lämsä（2010, Review of International Comparative Management）は、フィンランドの管理スタイルを「Management by perkele」（速く権威的）、スウェーデンを「Management by ack herreguuden」（合意志向で遅め）と対比した。GLOBE データを使った研究でも「スウェーデン人の合意形成は遅い」という見方が出ている [中] ([source](https://www.rmci.ase.ro/no11vol1/Vol11_No1_Article13.pdf))
- スウェーデンには「förankring」（事前の根回しで合意を固めること）という慣行がある。決定までは遅いが、実行段階での抵抗が減るという説明が一般的。ただしどれだけ遅いかを定量化した研究は見つからなかった [弱] ([source](https://johnalexandersweden.com/pdf/CONSENSUS.pdf))
- 「Spotify モデル」への批判: Jeremiah Lee（元 Spotify PM、2020-04）は、このモデルが Spotify 社内でも完全には実装されなかった理想像だと書いた。チームごとに働き方を作り直すことになり、エンジニアリングの遂行に責任を持つ人がいなかった。共著者側の Joakim Sundén も「当時から part ambition, part approximation だった」と述べている [中] ([source](https://www.jeremiahlee.com/posts/failed-squad-goals/))
- Jante の掟（Sandemose, 1933）は平等主義の象徴とされる一方、起業を阻むとも言われる。ただしスタートアップへの影響を実証した研究は見つからず、論評とインタビューが中心 [弱] ([source](https://thenextweb.com/news/1110732))

## コミュニケーションとドキュメント

- Meyer の要約では、フィンランドは low-context だが米国ほどではないとされる。北欧各国の Communicating スケール上の正確な位置は一次資料で確認できていない [弱] ([source](https://mind.li/explore/37057-the-culture-map-by-erin-meyer-study-analysis-guide))
- フィンランドのコミュニケーションには、沈黙、事実本位で用件だけを話す asiallinen スタイル、そして「フィンランド人らしさ」をめぐる語りの 3 つのモードがあるとされる（Poutiainen, Wiley 百科事典 2017）[中] ([source](https://onlinelibrary.wiley.com/doi/abs/10.1002/9781118783665.ieicc0132))
- スウェーデンの合意形成は会議と非公式な事前調整に頼る。海外の管理職は、決定に至るまでの会議ややり取りの多さに戸惑うと言われる（Meyer の要約）[弱] ([source](https://www.linkedin.com/pulse/culture-map-erin-meyer-8-minute-read-lars-christensen?trk=public_profile_article_view))

## 働き方とキャリア

- 2024 年の主たる仕事の週実労働時間は、デンマークが 33.9 時間で EU 平均 36.0 時間より短い（Eurostat）。2025 年版では、フルタイム男性の労働時間が最も短いのはフィンランドとオランダ（いずれも 38.4 時間）[強] ([source](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250514-1)), ([source](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Actual_and_usual_hours_of_work))
- 育休: スウェーデンは 480 日で、うち各親に 90 日を割り当て。ノルウェーは 100% 支給なら 49 週で、父親枠 15 週。フィンランドは 2022 年改革で各親 160 日。デンマークも 2022 年に父親枠を導入したが、週数は資料によって 8・9・11 週と食い違う [中] ([source](https://pub.norden.org/temanord2025-547/parental-leave-in-finland.html)), ([source](https://www.nordiclabourjournal.org/work-and-wage-levels-are-obstacles-to-fathers-leave/))
- リモート: フィンランドは「普段から在宅勤務」の割合が約 20% で EU 最高水準（EU 平均約 9%）。この数字は Eurostat の lfsa_ehomp を集計した二次サイト経由 [中] ([source](https://apiardata.com/statistics/fi-usually-works-from-home-rate/))
- デンマークのフレキシキュリティ: 解雇しやすい代わりに手厚い失業給付と積極的な労働市場政策がある。「仕事（job）の保障」はないが「雇用（employment）の保障」はある、という考え方。IMF（2006）は、手厚い給付が構造的失業を押し上げるという副作用も指摘している [中] ([source](https://denmark.dk/society-and-business/the-danish-labour-market/)), ([source](https://www.elibrary.imf.org/view/journals/023/0035/020/article-A009-en.xml?rskey=aDCGFc&result=5))

## OSS とコミュニティ

- Linux: 1991-08-25、ヘルシンキ大学の学生だった Linus Torvalds が comp.os.minix に「just a hobby, won't be big and professional like gnu」と投稿したのが始まり [強] ([source](https://en.wikipedia.org/wiki/Linux_kernel))
- MySQL: 1995 年、スウェーデンの MySQL AB（ウプサラ）が設立された。創業者はフィンランド人の Monty Widenius とスウェーデン人の Axmark・Larsson。2008 年に Sun が約 10 億ドルで買収し、後に MariaDB が派生した [強] ([source](https://en.wikipedia.org/wiki/MySQL_AB))
- Erlang: 1986 年に Ericsson で誕生。1998 年に Ericsson Radio が新規製品での使用を禁止し、これが逆に 1998-12-02 のオープンソース化につながった（Armstrong, HOPL III 2007 本人の記述）[強] ([source](https://lfe.io/papers/[2007]%20Armstrong%20-%20HOPL%20III%20A%20History%20of%20Erlang.pdf))
- ノルウェー: Dahl と Nygaard が Simula でオブジェクト指向の基本概念を生み、2001 年に Turing 賞を受賞。Qt は Trolltech（1994 年創業、ノルウェー）から出て、現在の Qt Group の本社はフィンランドのエスポー [強] ([source](https://awards.acm.org/award_winners/nygaard_5916220)), ([source](https://en.wikipedia.org/wiki/Qt_(software)))
- Rails の DHH はデンマーク人で、Rails は 2004 年公開。ただし Basecamp/37signals は米国企業なので、「デンマークの開発文化の産物」とは言いにくい [強]（国籍と年）/ [弱]（文化との結びつけ）([source](https://en.wikipedia.org/wiki/David_Heinemeier_Hansson))

## 一言で

平等で合意志向、ワークライフバランスは制度で担保されている。ただし率直さ（DK）、沈黙（FI）、根回し型の合意（SE）と国ごとの差は大きく、「北欧」で一括りにすると外れる。

## Sources

- [Culture Factor country comparison tool (Hofstede)](https://www.theculturefactor.com/country-comparison-tool?countries=denmark%2Cfinland%2Cnetherlands%2Cnorway%2Csweden)
- [Welcome to the Jungle – Erin Meyer 8 keys](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams)
- [Mindli – The Culture Map study guide](https://mind.li/explore/37057-the-culture-map-by-erin-meyer-study-analysis-guide)
- [LinkedIn – The Culture Map summary (Christensen)](https://www.linkedin.com/pulse/culture-map-erin-meyer-8-minute-read-lars-christensen?trk=public_profile_article_view)
- [Spotify engineering culture part 1 (2014)](https://engineering.atspotify.com/2014/03/spotify-engineering-culture-part-1)
- [Spotify Engineering Culture video (Kniberg)](https://www.youtube.com/watch?v=4GK1NDTWbkY)
- [Jeremiah Lee – Spotify's Failed #SquadGoals (2020)](https://www.jeremiahlee.com/posts/failed-squad-goals/)
- [Lämsä 2010 – Leadership Styles and Decision-making in Finnish and Swedish Organizations](https://www.rmci.ase.ro/no11vol1/Vol11_No1_Article13.pdf)
- [John Alexander – Consensus: Hidden Codes of Swedish Leadership](https://johnalexandersweden.com/pdf/CONSENSUS.pdf)
- [Carbaugh et al. 2006 – Finnish silence](https://works.bepress.com/donal_carbaugh/7/)
- [Berry 2011 CercleS](https://www.utu.fi/sites/default/files/media/KieVi/Berry-cercles-2011-0025-1.pdf)
- [Poutiainen – Communication Modes, Finnish](https://onlinelibrary.wiley.com/doi/abs/10.1002/9781118783665.ieicc0132)
- [Vuori & Huy 2016 – How Nokia Lost the Smartphone Battle](https://www.researchgate.net/publication/281965483_Distributed_Attention_and_Shared_Emotions_in_the_Innovation_Process_How_Nokia_Lost_the_Smartphone_Battle)
- [Supercell – Paananen BAFTA lecture](https://www.danielscrivner.com/supercell-founder-ilkka-paananen-game-design-lecture-at-bafta/)
- [Supercell – Slush 2024 transcript](https://www.pocketgamer.biz/full-slush-2024-transcript-supercell-ceo-ilkka-paananen-on-the-clash-of-clans-developers-evolving-culture/)
- [VTT – Agile software development methods (2002)](https://cris.vtt.fi/en/publications/agile-software-development-methods-review-and-analysis)
- [The Next Web – Jante law and startups](https://thenextweb.com/news/1110732)
- [Eurostat news 2025-05-14 – weekly hours](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250514-1)
- [Eurostat – Actual and usual hours of work](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Actual_and_usual_hours_of_work)
- [Nordic Council – Parental leave in Finland (TemaNord 2025:547)](https://pub.norden.org/temanord2025-547/parental-leave-in-finland.html)
- [Nordic Labour Journal – fathers' leave](https://www.nordiclabourjournal.org/work-and-wage-levels-are-obstacles-to-fathers-leave/)
- [Apiar Data – Finland WFH rate](https://apiardata.com/statistics/fi-usually-works-from-home-rate/)
- [denmark.dk – Danish labour market](https://denmark.dk/society-and-business/the-danish-labour-market/)
- [IMF 2006 – Danish flexicurity](https://www.elibrary.imf.org/view/journals/023/0035/020/article-A009-en.xml?rskey=aDCGFc&result=5)
- [Wikipedia – Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel)
- [Wikipedia – MySQL AB](https://en.wikipedia.org/wiki/MySQL_AB)
- [Armstrong 2007 – A History of Erlang (HOPL III)](https://lfe.io/papers/[2007]%20Armstrong%20-%20HOPL%20III%20A%20History%20of%20Erlang.pdf)
- [ACM – Kristen Nygaard Turing Award](https://awards.acm.org/award_winners/nygaard_5916220)
- [Wikipedia – Qt (software)](https://en.wikipedia.org/wiki/Qt_(software))
- [Wikipedia – David Heinemeier Hansson](https://en.wikipedia.org/wiki/David_Heinemeier_Hansson)
