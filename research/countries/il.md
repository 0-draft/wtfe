# Israel

_調査日: 2026-10-25_

_このノートは調査時点の記録。各記述の信頼度（[強]/[中]/[弱]）と数値の最終版は `src/data/content/{ja,en}/countries/` の JSON が正で、校正で変えた数値は `_訂正_` 行で示している。_

Hofstede (Culture Factor 現行値): PDI 13 / IDV 56 / MAS 47 / UAI 81 / LTO 47 / IVR データなし ([source](https://www.theculturefactor.com/country-comparison-tool?countries=israel))。

## Design & quality

- 「まず出して直す」志向の主な根拠は書籍。Arieli『Chutzpah』(2019) は章名に "Failure Is an Option" "Certain Uncertainty" "Resourcefulness" を並べ、混沌 (balagan) の中で育つことが即興力と resourcefulness を生むと論じる。ただし定量データではない [中] ([source](https://www.publishersweekly.com/9780062883032))
- 反証として、Hofstede の UAI は 81 と高い。ルール・時間厳守・精度を求める一方、プレッシャー下では即興に強いと説明されている。「雑に作る文化」というステレオタイプとは一致しない [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=israel))
- 要件の外まで自分で考えて責任を持つ人を軍隊用語で "rosh gadol"(大きな頭)と呼んで褒め、指示を狭く解釈する "rosh katan" は蔑称になる。仕様の外を自主的に埋める行動規範といえる (2012) [中] ([source](https://www.haaretz.com/2012-09-07/ty-article/word-of-the-day-rosh-gadol/0000017f-e66d-dc7e-adff-f6ed883b0000))

## Failure & risk

- 失敗を学習の一部として受け入れ、リスクを避けない社会だというのが Arieli の主張。Publishers Weekly の書評は、主題が子育てなのか文化分析なのか定まっていないと批判している [中] ([source](https://www.publishersweekly.com/9780062883032))
- 10/7 以降は従業員の推定 15〜20% が予備役に召集された (SNC)。開戦 3 週目には約 70% の tech 企業が業務障害を報告している。それでも開戦から約半年で $3.1B を調達した [強] ([source](https://www.timesofisrael.com/about-70-of-tech-firms-face-operating-difficulties-amid-reservists-call-up/), [source](https://www.ynetnews.com/business/article/sk7ityv1r))
  _訂正 2026-10-25: 「約 15%」→「推定 15〜20%」。出典では 15〜20% の幅で示されている_
- 予備役による開発遅延は具体例がある。Wix は AI デザイン製品の出荷が 1 四半期遅れ、Intel は一部作業をインドへ移した (Calcalist) [中] ([source](https://www.calcalistech.com/ctechnews/article/cmaxfpvrq))
- リスクを取る文化は exit の規模にも表れる。2025 年は Wiz $32B (Google)、CyberArk $25B (Palo Alto)、Armis $7.75B で過去最高だった。総額は Calcalist の推計で約 $80B [強] ([source](https://www.calcalistech.com/ctechnews/article/hkzohvfnbx))
  _訂正 2026-10-25: 「$59B (PwC) から $80B まで開き」を削除。PwC の $59B は引用した出典 (Calcalist) に記載がなく、出典も付いていなかった_

## Feedback & code review

- "dugri"(まっすぐな話し方)は、率直さ・ぶっきらぼうさを勇気と誠実さの証とみなす言語イデオロギーで、Katriel (1986, Cambridge UP) が研究した。Katriel 本人は、これは相互の信頼が前提だと述べている [強] ([source](https://campanthropology.org/2021/12/27/tamar-katriel-defiant-discourse/))
- 一方で Katriel (1999) は dugri が衰退しつつあると指摘している。また dugri は 1940-50 年代の欧州系 Sabra 世代の様式で、アラブ系の間接的なスタイル musayara とは対照的。国内でも一様ではない [強] ([source](https://www.researchgate.net/publication/316364500_Dugri))
- Meyer の Culture Map では、否定的フィードバックが直接的な国に入り、対立 (Disagreeing) にも寛容とされる (書評による要約) [中] ([source](https://kathrynread.com/the-culture-map-by-erin-meyer-a-summary-and-review/))

## Hierarchy & decision-making

- PDI 13 は世界でも最低水準。上司に近づきやすく、マネージャーはチームの専門性に頼るものとされる [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=israel))
- Culture Map の Leading 尺度でも、北欧・オランダと並んで最も平等主義的な端に位置する [中] ([source](https://kathrynread.com/the-culture-map-by-erin-meyer-a-summary-and-review/))
- Unit 8200 の影響は具体的に確認できる。全徴集兵を数学やプログラミングでスクリーニングし、若い兵士に監督の薄い高難度タスクを任せる。Check Point、Palo Alto、CyberArk、Wix、Wiz の創業者が出身者 [中] ([source](https://www.securityweek.com/idf-inc-israeli-cybersecurity-startup-conveyor-belt/), [source](https://www.calcalistech.com/ctechnews/article/sjltwsk2kg))
- 批判的な見方もある。8200 出身者のネットワークが閉じたクラブを作っていること、監視技術の輸出 (NSO など) が問題視されている [中] ([source](https://www.dropsitenews.com/p/israel-technology-palo-alto-networks-microsoft-unit-8200))

## Communication & documentation

- 文書文化についての定量研究は見つからなかった。Culture Map 系の書評はイスラエルを「高コンテクストなのに批判は直接的」という珍しい組み合わせに分類しているが、Meyer 本人の図では Communicating の位置は確認できていない [弱] ([source](https://kathrynread.com/the-culture-map-by-erin-meyer-a-summary-and-review/))
- 海外分散が進み、非同期・文書でのやり取りが必要になる構造的な圧力がある。民間 tech 企業の国内従業員比率は 69% (2019) から 62% (2026/3) に下がった [強] ([source](https://www.ynetnews.com/business/article/bkjjywylge))

## Work style & careers

- High-tech は国内雇用の約 11.4% (約 40 万人、2025) を占め、輸出の 58% (約 $85B) を担う。雇用の伸びは年 2.5% で、過去 10 年平均の約 6% から鈍化している [強] ([source](https://www.ynetnews.com/business/article/bkjjywylge), [source](https://innovationisrael.org.il/en/press_release/innovation-report-2025/))
  _訂正 2026-10-26: 数字は Ynetnews と一致する。2 本目の出典 IIA 2025 年版のプレスリリースは前年の報告で、値が違う (2025 年上半期 40.3 万人・11.5%、2024 年輸出 780 億ドル)。2026 年版のプレスリリース (<https://innovationisrael.org.il/en/press_release/israeli-high-tech-report-2026/>) に差し替え、約 40 万人・11.4%・850 億ドル・58%・伸び 2.5% (過去 10 年平均約 6%) を確認した_
- R&D 人員は 2025 年に約 3,500 人減り、10 年以上ぶりの減少となった。R&D は東欧と米国へ移っており、国外の雇用 (約 44 万人) は国内 (約 40 万人) を上回る [強] ([source](https://www.ynetnews.com/business/article/bkjjywylge), [source](https://innovationisrael.org.il/en/wp-content/uploads/sites/3/2025/04/Innovation-Authority-High-Tech-Employment-Report-English-Final.pdf))
  _訂正 2026-10-26: 確認のみ。約 3,500 人減は IIA 2026 年版と Ynetnews、国外約 44 万人と「民間企業の R&D の約半数が国外」は IIA の 2025 年 4 月の雇用報告 PDF で確かめた_
- 「Start-up Nation」への批判として「二つの経済」論がある。Bank of Israel (2016) によれば労働生産性は先進国平均を 14% 下回る。tech は男性・名門校・エリート部隊出身者に偏り、アラブ系や超正統派の参加は少ない [強] ([source](https://adva.org/en/not-exactly-a-start-up-nation/), [source](https://mei.nus.edu.sg/publication/book-review-dark-sides-of-the-startup-nation/))
  _訂正 2026-10-25: 「アラブ系約 2%、超正統派約 2.2% (IIA 2023)」を削除。引用した出典 (Adva・NUS MEI) に記載がなく、IIA 2023 の原典も確認できていない_
  _訂正 2026-10-26: Adva Center の記事は 2015 年 9 月 21 日付 (Shlomo Swirski)。8% 以下・男性 65%・名門高校/エリート部隊/有力大学は本文どおり。JSON の記述の「当時」を「2015 年」と明記し、出典に year を入れた_

## OSS & community

- 企業発の OSS がある。Wix は React Native の E2E テストツール Detox (GitHub スター約 1.2 万)、monday.com はデザインシステム Vibe を公開している。ただし国単位の OSS 貢献統計は Octoverse で確認できなかった [中] ([source](https://github.com/wix/Detox), [source](https://github.com/mondaycom/vibe))
- 主な強みは OSS 文化よりも cyber・exit エコシステムにある。8200 出身者の VC (Team8、Cyberstarts) が再投資の循環を作っている [中] ([source](https://www.securityweek.com/idf-inc-israeli-cybersecurity-startup-conveyor-belt/))

## 一言で

フラット (PDI 13) で dugri、失敗に寛容で即興に強い。ただし不確実性回避は意外に高い (81)。軍の人脈と exit で回るエリート層の文化であって、国全体の姿ではない。

## 注意点

- Culture Map の Israel の位置は、Communicating・Persuading・Deciding が一次資料 (Meyer スライド) に載っていない。research/frameworks.md の表でも `?` になっている。
- Arieli と Senor & Singer は推進側の書籍で、定量的な裏付けは弱い。
- 予備役・戦争による R&D の国外移転が進んでおり、2023 年以前の「国内で全部やる」像は古くなりつつある。

## Sources

- [The Culture Factor — Country comparison tool (Israel)](https://www.theculturefactor.com/country-comparison-tool?countries=israel)
- [Publishers Weekly: Chutzpah](https://www.publishersweekly.com/9780062883032)
- [Haaretz: rosh gadol](https://www.haaretz.com/2012-09-07/ty-article/word-of-the-day-rosh-gadol/0000017f-e66d-dc7e-adff-f6ed883b0000)
- [Times of Israel: 70% firms disrupted](https://www.timesofisrael.com/about-70-of-tech-firms-face-operating-difficulties-amid-reservists-call-up/)
- [Ynet: $3.1B raised since war](https://www.ynetnews.com/business/article/sk7ityv1r)
- [Calcalist: quiet shift](https://www.calcalistech.com/ctechnews/article/cmaxfpvrq)
- [Calcalist: $80B exits 2025](https://www.calcalistech.com/ctechnews/article/hkzohvfnbx)
- [Katriel interview 2021](https://campanthropology.org/2021/12/27/tamar-katriel-defiant-discourse/)
- [Katriel "Dugri" (ResearchGate)](https://www.researchgate.net/publication/316364500_Dugri)
- [Kathryn Read: Culture Map summary](https://kathrynread.com/the-culture-map-by-erin-meyer-a-summary-and-review/)
- [SecurityWeek: IDF to Inc](https://www.securityweek.com/idf-inc-israeli-cybersecurity-startup-conveyor-belt/)
- [Calcalist: Unit 8200 to Wiz](https://www.calcalistech.com/ctechnews/article/sjltwsk2kg)
- [Drop Site News: 8200 in Big Tech](https://www.dropsitenews.com/p/israel-technology-palo-alto-networks-microsoft-unit-8200)
- [Ynet: brain drain / 2026 IIA report](https://www.ynetnews.com/business/article/bkjjywylge)
- [IIA 2025 report press release](https://innovationisrael.org.il/en/press_release/innovation-report-2025/)
- [IIA 2026 report press release](https://innovationisrael.org.il/en/press_release/israeli-high-tech-report-2026/)
- [IIA Employment Report Apr 2025](https://innovationisrael.org.il/en/wp-content/uploads/sites/3/2025/04/Innovation-Authority-High-Tech-Employment-Report-English-Final.pdf)
- [Adva Center: Not Exactly a Start-Up Nation](https://adva.org/en/not-exactly-a-start-up-nation/)
- [NUS MEI: Dark Sides of the Startup Nation review](https://mei.nus.edu.sg/publication/book-review-dark-sides-of-the-startup-nation/)
- [Wix Detox](https://github.com/wix/Detox)
- [monday.com Vibe](https://github.com/mondaycom/vibe)
