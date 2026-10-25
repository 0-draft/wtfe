# Germany

_調査日: 2026-10-25_

Hofstede (Culture Factor 現行値): PDI 35 / IDV 79 / MAS 66 / UAI 65 / LTO 57 / IVR 40 ([source](https://www.theculturefactor.com/country-comparison-tool?countries=germany))。IDV と LTO は旧版の値 (IDV 67 / LTO 83) から改訂されている。旧版の数字と混ぜて引用しないこと ([source](https://www.simplypsychology.org/hofstedes-cultural-dimensions-theory.html))。

## Design & quality

- Erin Meyer の Culture Map チャートでは、ドイツは Persuading で最も「principles-first (演繹: 原理→結論)」寄り、Scheduling で最も「linear-time (予定厳守)」寄りに置かれている。理屈を先に固め、計画通りに進めるスタイルと読める (2014) [中] ([source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- 自動車業界では、ドイツ自動車工業会の品質部門 VDA QMC が保守する Automotive SPICE (ASPICE、開発プロセスの成熟度評価モデル) が事実上の取引条件。OEM はサプライヤーに Level 2〜3 を要求し、V 字モデルと要求↔設計↔テストの双方向トレーサビリティを求める。これは法規制ではなく顧客要求 [強] ([source](https://www.itemis.com/en/glossary/automotive-spice/), [source](https://vda-qmc.de/wp-content/uploads/2023/12/Automotive-SPICE-PAM-v40.pdf))
- 上流で設計を固める文化は、規制産業 (自動車・機能安全 ISO 26262) では制度として裏付けがある。一方、Berlin の VC 系スタートアップは英語で国際チームが多く、別文化と見るべき。「ドイツ = 全員ウォーターフォール」は言い過ぎ [弱] ([source](https://migaku.com/blog/language-fun/how-to-find-english-speaking-jobs-in-berlins-tech-scene))
- UAI 65 は「やや不確実性回避」の水準で、フランス (86) より低い。「ドイツ人は極端にリスク回避」という通説は Hofstede の数字では支持されない [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=germany))

## Failure & risk

- Randstad-ifo HR 調査 (2026 Q3、n=469): 従業員 500 人以上の大企業で「ミスが率直に話される」は 28%、従業員 49 人以下の小企業では 62%。大企業の 34% が自社の Fehlerkultur (失敗文化) をイノベーションの阻害要因と認識している。一方、全体の 56% は「イノベーションへの影響なし」と回答 [強] ([source](https://www.presseportal.de/pm/13588/6367865))
- AXA/YouGov (2024 年 5 月、n=2,132): 職場のミスを認められない人は全体で 25%、25 歳未満では 44%。ミスを開示すると悪い結果になると予想する人は 23% [強] ([source](https://www.axa.de/presse/axa-studie-fehlerkultur-im-job))
- EY 調査 (約 2023): 管理職の 64% が過去 2 年の自分のミスを認めなかった、または一部しか認めなかった。対象は機械・自動車・金融などの伝統産業 [中] ([source](https://www.dashoefer.de/newsletter/artikel/ey-studie-zur-fehlerkultur-zwei-drittel-der-fuehrungskraefte-sprechen-nicht-ueber-eigene-fehler.html))
- Bitkom (2024 年 10 月): 企業の 70% が「データ保護 (Datenschutz) がデジタル化を阻害している」と回答し、63% はデータ保護規定のせいで革新プロジェクトが頓挫または未着手。後続調査では 77% に上昇。業界団体の調査なので、規制緩和を求める立場のバイアスに注意 [強] ([source](https://www.bitkom.org/Presse/Presseinformation/Datenschutz-Aufwand-Unternehmen-nimmt-zu), [source](https://www.bitkom.org/Presse/Presseinformation/Datenschutz-Innovations-Bremse))
- GDPR 関連のメディア報道を比較した研究では、独仏とも「プライバシー = 基本権」という枠組みが強く、英米は法令遵守・商業の枠組み。ドイツの報道量が最多 (3,274 本中 1,542 本)。2021 年の論文で、記事本数の数字は二次要約からの引用 [中] ([source](https://arxiv.org/abs/2104.04074))

## Feedback & code review

- Meyer のチャートで、ドイツは Evaluating (否定的フィードバック) で最も「direct」側、Communicating でも low-context 側。ネガティブな指摘を和らげずに言う傾向 [中] ([source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- Disagreeing は confrontational 側。ただしドイツは「感情を抑えて客観的に反論する」スタイルで、フランスの expressive な対立とは違うと解説されている (書評ベースの二次情報) [弱] ([source](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/))
- 国別の文化 (Hofstede など) と code review の行動を直接結びつけた SE 研究は見つからなかった。近い研究として、提出者とレビュアーが同じ国だと PR が受理されやすい、というもの (Rastogi et al., ESEM 2018) がある。ここはエビデンスが薄い [弱] ([source](https://arxiv.org/pdf/2105.13970))

## Hierarchy & decision-making

- Meyer は、ドイツは米国より階層的なのに、決定前に合意形成する傾向が強い (Deciding scale で consensual 寄り) と明記している [中] ([source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- 事業所組織法 (BetrVG) §87 Abs.1 Nr.6 により、従業員の行動や成績を監視「できる」技術的設備の導入には事業所委員会 (Betriebsrat、事業所単位の従業員代表) の共同決定が必要。連邦労働裁判所 (BAG) は 2022 年 3 月 8 日 (1 ABR 20/21) に MS Office 365 も対象と判断した。実際に監視するかどうかは関係なく、監視に客観的に使えるかどうかで決まる。開発ツールの導入まで労使交渉の対象になりうる [強] ([source](https://www.hensche.de/bag-beschluss-vom-08.03.2022-1-abr-20-21-zustaendigkeit-des-gesamtbetriebsrats-bei-unternehmenseinheitlicher-nutzung-von-microsoft-office-365.html), [source](https://www.lulius.ai/blog/mitbestimmung-87-betrvg))
- 反例・ばらつき: N26 (Berlin) では 2020 年に経営陣が Betriebsrat 選挙に反対し、裁判所の差止めまで争ったが、同年 11〜12 月に選出された (投票率約 30%)。スタートアップでは共同決定が当然ではなく、争点になる [強] ([source](https://www.cnbc.com/2020/08/13/german-digital-bank-n26-faces-outcry-from-staff-over-management.html), [source](https://en.wikipedia.org/wiki/N26))
  _訂正 2026-10-25: 「創業者が反対」→「経営陣が反対」。出典 (CNBC) は management として報じている。選出時期 (2020 年 11〜12 月) を追記_

## Communication & documentation

- Meyer のチャートでドイツは low-context 寄り (明示的、繰り返しは確認のため、書面化を好む)。仏・中・日と比べて最も low-context 側 [中] ([source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- ASPICE の SUP.10 は、変更要求を関連成果物に紐づけて事前に分析することを求める。規制産業では文書化が「文化」というより契約要件になっている [強] ([source](https://vda-qmc.de/wp-content/uploads/2023/12/Automotive-SPICE-PAM-v40.pdf))
- Berlin のスタートアップは英語が主な業務言語。外国籍社員の比率は 30〜49% と出典によってばらつき、二次情報も自己矛盾しているので要検証 [弱] ([source](https://www.startuprad.io/post/the-rise-of-berlin-startups-germany-s-startup-powerhouse))

## Work style & careers

- Eurostat 2024: 実労働時間の週平均 (フルタイム+パートタイム、20〜64 歳) はドイツ 33.9h で、EU 平均 36.0h を下回る。パートタイム比率の高さが効いている [強] ([source](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250514-1))
- BAG は 2022 年 9 月 13 日 (1 ABR 22/21) に使用者の労働時間記録義務を認めた。Vertrauensarbeitszeit (時間管理を本人に任せる信頼労働時間制) 自体は合法のまま。労働時間法 (ArbZG) の改正はなお未成立とされる [強] ([source](https://www.kav-nw.de/de/Aktuelles/Rechtsprechung-Rechtsfragen/Rechtsprechung-Rechtsfragen1/BAG-Beschluss-vom-13.09.2022-1-ABR-22-21-Arbeitszeiterfassungspflicht-des-Arbeitgebers-.html), [source](https://kpmg-law.de/das-ende-der-vertrauensarbeitszeit-das-stechuhr-urteil-des-eugh-und-die-gesetzliche-verpflichtung-zur-einfuehrung-eines-zeiterfassungssystems-nach-dem-bag/))
- 中小企業 (KMU) は EU 定義で全企業の 99.3%、雇用の 54% (Destatis 2024)。「Mittelstand」は規模ではなく所有と経営の一致で定義される別概念 (IfM Bonn)。KfW の 71.5% は売上上限が 5 億ユーロと広い定義によるもので、数字を混ぜないこと [強] ([source](https://www.destatis.de/EN/Themes/Economic-Sectors-Enterprises/Enterprises/Small-Sized-Enterprises-Medium-Sized-Enterprises/_node.html), [source](https://www.ifm-bonn.org/en/statistics/overview-mittelstand/key-indicators-based-on-sme-definition-by-ifm-bonn/germany))
- 在宅勤務: 「通常在宅」の比率は 2025 年で約 13.2% (EU 平均より上)。「時々在宅」を含めると、Destatis は 2024 年に約 24% としている [中] ([source](https://apiardata.com/statistics/eu-usually-works-from-home-rate/), [source](https://www.euronews.com/2026/06/12/working-from-home-in-europe-why-your-chances-vary-so-much-depending-on-where-you-live))
- 解雇規制: OECD の 2019 年データでは、従業員 10 人以下の事業所は通常の解雇規制の適用外で、解雇の前に Betriebsrat への通知が必要 [強] ([source](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/10/employment-protection-information-2019-country-notes_c421e786/germany_f22c31fc/68e58f6d-en.pdf))

## OSS & community

- GitHub の開発者アカウント数: Octoverse 2024 で 350 万超 (前年比 +21%)。Octoverse 2025 は、2020〜2025 年で日独とも 3 倍超に増え、欧州の主要市場の一つと記述 [強] ([source](https://github.blog/news-insights/octoverse/octoverse-2024/), [source](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/))
- Stack Overflow Developer Survey 2025 の回答者数はドイツが米国に次ぐ 2 位 (3,022 人、8.6%)。回答者の偏りの指標で、人口あたりの開発者数ではない [強] ([source](https://survey.stackoverflow.co/2025/developers))
- 国として OSS のインフラに資金を出している: Sovereign Tech Fund (現 Sovereign Tech Agency) は設立から 2 年の 2024 年 10 月までに 60 の OSS 技術へ 2,490 万ドル超を投資 (curl、OpenSSH、systemd、PHP、FFmpeg など) [強] ([source](https://en.wikipedia.org/wiki/Sovereign_Tech_Agency), [source](https://news.slashdot.org/story/24/10/18/2326255/germanys-sovereign-tech-fund-has-invested-over-249m-in-open-source-in-two-years))
  _訂正 2026-10-25: 「60 超・約 2,350 万ユーロ」→「60・2,490 万ドル超」（出典 Slashdot の表記）。年間予算「350 万→1,150 万→1,700 万ユーロ」は引用元で確認できないため削除_
- コミュニティ: CCC の Chaos Communication Congress は 38C3 (2024 年 12 月、Hamburg) で約 1.5 万人が参加し、ボランティア約 3,500 人。KDE e.V. は 1997 年に Tübingen で登録され、現在の本部は Berlin。SUSE は 1992 年創業で Nuremberg 拠点 [強] ([source](https://www.scip.ch/en/?labs.20250123=), [source](https://ev.kde.org/corporate/statutes/), [source](https://en.wikipedia.org/wiki/SUSE_S.A.))
- 公共部門: Schleswig-Holstein 州は行政の 3 万台の PC を LibreOffice/Linux へ移行すると 2024 年に表明し、LibreOffice は 2025 年末に約 80% 完了。連邦は ZenDiS (デジタル主権センター) を通じて openDesk を開発し、1.0 を 2024 年 10 月にリリース [強] ([source](https://blog.documentfoundation.org/blog/2024/04/04/german-state-moving-30000-pcs-to-libreoffice/), [source](https://cybernews.com/news/schleswig-holstein-germany-microsoft-open-source/), [source](https://en.wikipedia.org/wiki/ZenDiS))

## 一言で

階層は中程度だが合意をとってから決め、指摘は率直。品質は「人の気質」より ASPICE・共同決定・データ保護といった制度で担保される国。ただし規制産業と Berlin スタートアップは別世界。

## 注意点

- Meyer の位置は 2014 年の Culture Map チャート (SCMP 転載) を目で読んだもの。書籍には数値スコアがない。
- ドイツに特有の code review / postmortem 文化については、国民文化と直接結びつけた SE 研究がなく、エビデンスは薄い。
- GEM の 2024 年ドイツの正確な値は一次の表で確認できていない。

## Sources

- [Culture Factor Germany](https://www.theculturefactor.com/country-comparison-tool?countries=germany)
- [Simply Psychology Hofstede (旧値)](https://www.simplypsychology.org/hofstedes-cultural-dimensions-theory.html)
- [Erin Meyer Eight-scale Tool PDF (チャートは Culture Map 2014 / SCMP)](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf)
- [Deploy Yourself Culture Map review](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/)
- [itemis ASPICE](https://www.itemis.com/en/glossary/automotive-spice/)
- [VDA QMC ASPICE PAM v4.0](https://vda-qmc.de/wp-content/uploads/2023/12/Automotive-SPICE-PAM-v40.pdf)
- [Randstad-ifo Fehlerkultur 2026](https://www.presseportal.de/pm/13588/6367865)
- [AXA Fehlerkultur 2024](https://www.axa.de/presse/axa-studie-fehlerkultur-im-job)
- [EY Fehlerkultur (dashoefer)](https://www.dashoefer.de/newsletter/artikel/ey-studie-zur-fehlerkultur-zwei-drittel-der-fuehrungskraefte-sprechen-nicht-ueber-eigene-fehler.html)
- [Bitkom Datenschutz 2024](https://www.bitkom.org/Presse/Presseinformation/Datenschutz-Aufwand-Unternehmen-nimmt-zu)
- [Bitkom Datenschutz Innovations-Bremse](https://www.bitkom.org/Presse/Presseinformation/Datenschutz-Innovations-Bremse)
- [Sanford & Yasseri 2021, arXiv 2104.04074](https://arxiv.org/abs/2104.04074)
- [Pull Request Decision Explained (arXiv 2105.13970)](https://arxiv.org/pdf/2105.13970)
- [hensche.de BAG 1 ABR 20/21](https://www.hensche.de/bag-beschluss-vom-08.03.2022-1-abr-20-21-zustaendigkeit-des-gesamtbetriebsrats-bei-unternehmenseinheitlicher-nutzung-von-microsoft-office-365.html)
- [lulius.ai §87 BetrVG overview](https://www.lulius.ai/blog/mitbestimmung-87-betrvg)
- [CNBC N26 2020](https://www.cnbc.com/2020/08/13/german-digital-bank-n26-faces-outcry-from-staff-over-management.html)
- [Wikipedia N26](https://en.wikipedia.org/wiki/N26)
- [Migaku Berlin English jobs](https://migaku.com/blog/language-fun/how-to-find-english-speaking-jobs-in-berlins-tech-scene)
- [startuprad Berlin](https://www.startuprad.io/post/the-rise-of-berlin-startups-germany-s-startup-powerhouse)
- [Eurostat 36 hours/week 2024](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250514-1)
- [KAV-NW BAG 1 ABR 22/21](https://www.kav-nw.de/de/Aktuelles/Rechtsprechung-Rechtsfragen/Rechtsprechung-Rechtsfragen1/BAG-Beschluss-vom-13.09.2022-1-ABR-22-21-Arbeitszeiterfassungspflicht-des-Arbeitgebers-.html)
- [KPMG Law Vertrauensarbeitszeit](https://kpmg-law.de/das-ende-der-vertrauensarbeitszeit-das-stechuhr-urteil-des-eugh-und-die-gesetzliche-verpflichtung-zur-einfuehrung-eines-zeiterfassungssystems-nach-dem-bag/)
- [Destatis SMEs](https://www.destatis.de/EN/Themes/Economic-Sectors-Enterprises/Enterprises/Small-Sized-Enterprises-Medium-Sized-Enterprises/_node.html)
- [IfM Bonn Germany](https://www.ifm-bonn.org/en/statistics/overview-mittelstand/key-indicators-based-on-sme-definition-by-ifm-bonn/germany)
- [Apiar Data lfsa_ehomp](https://apiardata.com/statistics/eu-usually-works-from-home-rate/)
- [Euronews WFH 2026](https://www.euronews.com/2026/06/12/working-from-home-in-europe-why-your-chances-vary-so-much-depending-on-where-you-live)
- [OECD EPL 2019 Germany note](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/10/employment-protection-information-2019-country-notes_c421e786/germany_f22c31fc/68e58f6d-en.pdf)
- [GitHub Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/)
- [GitHub Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
- [Stack Overflow Survey 2025 Developers](https://survey.stackoverflow.co/2025/developers)
- [Wikipedia Sovereign Tech Agency](https://en.wikipedia.org/wiki/Sovereign_Tech_Agency)
- [Slashdot STF 2024](https://news.slashdot.org/story/24/10/18/2326255/germanys-sovereign-tech-fund-has-invested-over-249m-in-open-source-in-two-years)
- [scip.ch 38C3](https://www.scip.ch/en/?labs.20250123=)
- [KDE e.V. statutes](https://ev.kde.org/corporate/statutes/)
- [Wikipedia SUSE S.A.](https://en.wikipedia.org/wiki/SUSE_S.A.)
- [TDF blog Schleswig-Holstein 2024](https://blog.documentfoundation.org/blog/2024/04/04/german-state-moving-30000-pcs-to-libreoffice/)
- [Cybernews Schleswig-Holstein](https://cybernews.com/news/schleswig-holstein-germany-microsoft-open-source/)
- [Wikipedia ZenDiS](https://en.wikipedia.org/wiki/ZenDiS)
