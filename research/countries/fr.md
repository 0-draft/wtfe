# France

_調査日: 2026-10-25_

Hofstede (Culture Factor 現行値): PDI 68 / IDV 74 / MAS 43 / UAI 86 / LTO 60 / IVR 48 ([source](https://www.theculturefactor.com/country-comparison-tool?countries=france%2Cgermany))。PDI が高いのに個人主義も強いという組み合わせは、Belgium などごく一部の国にしかない。

## Design & quality

- Meyer のチャートでフランスはドイツと並んで principles-first (演繹) 寄り。ラテン/ゲルマン圏は理論から入る議論を好み、英米は事例から入る、と Meyer は述べている [中] ([source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- エンジニアは CTI (技術者資格委員会) 認定の diplôme d'ingénieur (グランゼコール等の技術者学位) を軸に育成される。200 校超が年 4.4〜4.9 万人を輩出 (CDEFI Panorama)。情報系だけの内訳は今回確認できなかった [強] ([source](https://www.cti-commission.fr/wp-content/uploads/2023/07/2023_CDEFI_Panorama_ecoles_ingenieurs.pdf), [source](https://en.wikipedia.org/wiki/Commission_des_Titres_d%27Ing%C3%A9nieur))
- 市場構造の特徴: デジタル市場 694 億ユーロの 50% (345 億ユーロ) を ESN (旧 SSII、IT サービス企業) が占める (2024)。多くの開発者は客先常駐の régie (準委任型) 方式で働き、「成果物ではなく工数に責任を負う」構造。品質の当事者意識が分散しやすいのは推論 [中] ([source](https://numeum.fr/wp-content/uploads/2025/03/CP20Numeum_ConfC3A9rence20semestrielle20S2-2024.pdf.pdf), [source](https://philix.fr/regie-ou-forfait-quel-mode-de-facturation-choisir-pour-une-esn/))
- ばらつき: Inria 発の scikit-learn (2010 年に Inria の研究者が主導) のように、研究機関から世界水準の OSS が出ている。「理論偏重で実装が弱い」というステレオタイプへの反例 [強] ([source](https://scikit-learn.org/stable/about.html))

## Failure & risk

- UAI 86 は西欧で高い部類 (ドイツ 65 より明確に高い)。ルールや手続きで不確実性を減らす志向 [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=france%2Cgermany))
- GEM 2024: 機会があると見ている人のうち 42.7% が「失敗が怖くて起業しない」と回答。GEM がドイツについて示す約 5 人に 2 人 (2025) と大差ない。「フランスは失敗に不寛容」という通説はデータ上弱い [強] ([source](https://www.gemconsortium.org/news/a-year-of-contrast-for-entrepreneurship-in-france), [source](https://www.gemconsortium.org/country-profile/64))
  _訂正 2026-10-25: 「世界平均 (47%) よりむしろ低く」を削除。引用した GEM の 2 ページに世界平均 47% の記載なし。ドイツは出典の表現 (約 5 人に 2 人) に合わせた_
- CNIL (データ保護当局) は 2024 年に 87 件の制裁、計約 5,521 万ユーロの罰金を科した (2022 年 21 件→2023 年 42 件→2024 年 87 件)。簡易手続による 69 件のうち 11 件がデータセキュリティ義務違反で、小規模事業者向けの簡易手続による制裁が増えている [強] ([source](https://www.cnil.fr/fr/sanctions-et-mesures-correctrices-bilan-2024-de-laction-de-la-cnil))
  _訂正 2026-10-25: 「約 1/3 はセキュリティ義務違反」→「簡易手続 69 件のうち 11 件」。出典の内訳は簡易手続分についての数字で、全体の 1/3 とは書いていない_
- 社内の postmortem や blameless 文化について、フランス固有の定量データは見つからなかった [弱] (該当ソースなし)

## Feedback & code review

- Meyer 本人の記述: フランス人は米国人より high-context (暗黙的) に話すのに、批判は米国人より直接的。「文脈依存」と「指摘の率直さ」は別の軸 [中] ([source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- Disagreeing でフランスは最も confrontational 側。Meyer のサイトも、米・仏・蘭は「白熱した対立的な会議」に慣れていると書いている。議論で反論すること自体が関係を壊さない前提 [中] ([source](https://erinmeyer.com/team-culture-mapping-report/))
- 反論の仕方は expressive (感情を出す) で、ドイツの「客観的・抑制的」とは違うとされる。二次的な書評の記述 [弱] ([source](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/))
- 注意: 「フランスは否定的フィードバックを間接的に伝える」とする要約サイトもあるが、Meyer の原文と矛盾するので採用しない [中] ([source](https://entiresummary.com/the-culture-map-summary/))

## Hierarchy & decision-making

- PDI 68 (ドイツ 35)。Meyer のチャートでも Leading は hierarchical 寄り、Deciding は top-down 寄りで、決定権が上に集まりやすい [中] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=france%2Cgermany), [source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- 同時に Disagreeing では最も confrontational。「上司が決めるが、決まるまでは部下も激しく議論する」という組み合わせがフランスの特徴 (2 つの軸を組み合わせた推論) [中] ([source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- 制度面: 「つながらない権利」の運用は企業内の団体交渉事項 (Code du travail L2242-17、2017 年施行)。合意できなければ使用者が CSE (社会経済委員会、従業員代表機関) の意見を聞いたうえで憲章を作る。ドイツの Betriebsrat のような「ツール導入への拒否権」ではなく、交渉・協議型 [中] ([source](https://www.naxis.fr/blog/droit-deconnexion-ce-que-dit-la-loi-2026-03-08))

## Communication & documentation

- Meyer のチャートで、フランスはドイツより明確に high-context 寄り (ただし中国より low-context)。行間や前提の共有に頼る度合いが大きい [中] ([source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- Trusting はドイツより relationship-based 寄りで、Scheduling も flexible-time 寄り。信頼は仕事だけでなく関係から作り、予定は調整されうるもの [中] ([source](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf))
- 開発現場の文書化習慣 (設計書や ADR 文化など) について、フランス固有の定量データは見つからなかった [弱] (該当ソースなし)

## Work style & careers

- 法定の週 35 時間が基準。IT 業界の Syntec 協約には、35h 型 (modalité 1)、38.5h の時間包括型 (modalité 2、年 219 日上限)、年間日数制の forfait jours (modalité 3、年 218 日、cadre=管理職・専門職向け、原則残業代なし) がある [強] ([source](https://www.legalplace.fr/guides/forfait-jours-convention-syntec/), [source](https://payfit.com/fr/fiches-pratiques/syntec-forfait-jour/))
- Eurostat 系の報道では、フランスの平均実労働時間は約 36h で EU 平均並み、2014〜2024 年で横ばい。「35h だから短い」とは限らない [中] ([source](https://www.euronews.com/2025/06/13/why-and-where-are-weekly-working-hours-dropping-in-europe), [source](https://fortune.com/2025/09/07/germany-workweek-hours-labor-productivity-gdp-friedrich-merz/))
- デジタル部門の雇用は約 66.6 万人 (2024 年に約 7,000 人減)。2024 年の採用は 5.18 万人 (2023 年 8.38 万人)、離職率は 16%。大手 ESN の採用減が目立ち、ソフトウェア企業は比較的堅調 [強] ([source](https://numeum.fr/le-syndicat/), [source](https://numeum.fr/social/emploi-et-remunerations-dans-le-numerique-les-grandes-tendances-2024/))
- ESN 特有の intercontrat (案件の合間の待機期間) は構造的に発生し、待機中の consultant の疎外感が業界内でも問題視されている。出典は業界・弁護士ブログで、当事者調査ではない [弱] ([source](https://www.lecercletech.com/intercontrat-definition/), [source](https://www.village-justice.com/articles/consultants-des-cabinets-conseil-ssii-les-points-sensibles-relation-travail,41346.html))
- 在宅勤務: 「通常在宅」は 2025 年で約 11.3%。「時々」を含めると 36% 程度とする二次情報もあるが、年が不明 [中] ([source](https://apiardata.com/statistics/eu-usually-works-from-home-rate/), [source](https://germanpedia.com/eu-working-from-home-share/))

## OSS & community

- 法制度で後押ししている: République numérique 法 (2016 年) で、行政のソースコードが開示請求の対象となる行政文書になり、職員 50 人以上の行政機関には公開義務がある。第 16 条は自由ソフトウェアとオープンフォーマットの利用を奨励 [強] ([source](https://en.wikipedia.org/wiki/Loi_pour_une_R%C3%A9publique_num%C3%A9rique), [source](https://scinfolex.com/2017/12/08/les-logiciels-produits-par-les-administrations-sont-passes-en-open-source-par-defaut-et-voici-pourquoi/))
- DINUM (省庁横断デジタル局) が運営する SILL (省庁横断の推奨自由ソフトウェア一覧) は 2012 年に始まり、2024 年 11 月に 500 本、2026 年の告知ではこれまでの掲載が 600 本超 [強] ([source](https://code.gouv.fr/fr/blog/500-logiciels-libres-au-sill/), [source](https://www.ouvert.numerique.gouv.fr/actualites/socle-interministeriel-logiciels-libres-sill-evolutions-2026/))
  _訂正 2026-10-25: 「2013 年の 32 本から」を削除し開始年を 2012 年に、500 本到達を「2024 年末」→「2024 年 11 月」に修正。引用した 2 ページに 2013 年 32 本の記載なし_
- 独仏の共同開発: DINUM の La Suite numérique と ドイツ ZenDiS の openDesk が 2024 年から協業している。共同エディタ Docs は独仏の共同イニシアチブで、オランダも参加しつつある [強] ([source](https://github.com/suitenumerique/docs), [source](https://program.foss-backstage.de/fossback25/talk/XPGWX8/))
  _訂正 2026-10-25: 「ドイツが共同出資」→「独仏の共同イニシアチブ」。出典 (suitenumerique/docs) の表現に合わせ、出資の有無は断定しない_
- 代表的プロジェクト: VLC は 1996 年に École Centrale Paris の学生プロジェクトとして始まり、2001 年に GPL 化、2009 年以降は独立 NPO が運営。scikit-learn は Inria が 2010 年から資金と人を出し、2023 年に spin-off の Probabl へ移行 [強] ([source](https://www.videolan.org/videolan/), [source](https://jbkempf.com/blog/15-years-of-VLC/), [source](https://scikit-learn.org/stable/about.html))
- GitHub の開発者アカウント数: Octoverse 2024 で 280 万超 (前年比 +20%)。Stack Overflow 2025 の回答数は 5 位 (1,408 人、4%) [強] ([source](https://github.blog/news-insights/octoverse/octoverse-2024/), [source](https://survey.stackoverflow.co/2025/developers))

## 一言で

上下関係ははっきりしているのに議論では遠慮なく反論し、言葉は文脈依存なのに批判は率直。国家主導の OSS・データ保護と、ESN の常駐 (régie) 構造が開発者の働き方を大きく左右している。

## 注意点

- Meyer の位置は 2014 年の Culture Map チャート (SCMP 転載) を目で読んだもの。書籍には数値スコアがない。
- フランスに特有の code review / postmortem / 文書化文化については、国民文化と直接結びつけた SE 研究がなく、エビデンスは薄い。
- フランスの 2024 年の「通常在宅」比率は Eurostat の一次表で確認できていない。

## Sources

- [Culture Factor (Hofstede) country comparison](https://www.theculturefactor.com/country-comparison-tool?countries=france%2Cgermany)
- [Erin Meyer Eight-scale Tool PDF (チャートは Culture Map 2014 / SCMP)](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf)
- [Erin Meyer Team Mapping](https://erinmeyer.com/team-culture-mapping-report/)
- [Deploy Yourself Culture Map review](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/)
- [entiresummary (矛盾例)](https://entiresummary.com/the-culture-map-summary/)
- [CDEFI Panorama 2023 (cti-commission.fr)](https://www.cti-commission.fr/wp-content/uploads/2023/07/2023_CDEFI_Panorama_ecoles_ingenieurs.pdf)
- [Wikipedia CTI](https://en.wikipedia.org/wiki/Commission_des_Titres_d%27Ing%C3%A9nieur)
- [Numeum S2 2024 press release](https://numeum.fr/wp-content/uploads/2025/03/CP20Numeum_ConfC3A9rence20semestrielle20S2-2024.pdf.pdf)
- [Numeum le syndicat](https://numeum.fr/le-syndicat/)
- [Numeum emploi 2024](https://numeum.fr/social/emploi-et-remunerations-dans-le-numerique-les-grandes-tendances-2024/)
- [philix régie vs forfait](https://philix.fr/regie-ou-forfait-quel-mode-de-facturation-choisir-pour-une-esn/)
- [lecercletech intercontrat](https://www.lecercletech.com/intercontrat-definition/)
- [Village Justice ESN consultants](https://www.village-justice.com/articles/consultants-des-cabinets-conseil-ssii-les-points-sensibles-relation-travail,41346.html)
- [scikit-learn About](https://scikit-learn.org/stable/about.html)
- [GEM France 2024](https://www.gemconsortium.org/news/a-year-of-contrast-for-entrepreneurship-in-france)
- [GEM Germany profile](https://www.gemconsortium.org/country-profile/64)
- [CNIL bilan sanctions 2024](https://www.cnil.fr/fr/sanctions-et-mesures-correctrices-bilan-2024-de-laction-de-la-cnil)
- [naxis droit à la déconnexion](https://www.naxis.fr/blog/droit-deconnexion-ce-que-dit-la-loi-2026-03-08)
- [LegalPlace forfait jours Syntec](https://www.legalplace.fr/guides/forfait-jours-convention-syntec/)
- [PayFit Syntec forfait jours](https://payfit.com/fr/fiches-pratiques/syntec-forfait-jour/)
- [Euronews working hours 2025](https://www.euronews.com/2025/06/13/why-and-where-are-weekly-working-hours-dropping-in-europe)
- [Fortune Germany workweek 2025](https://fortune.com/2025/09/07/germany-workweek-hours-labor-productivity-gdp-friedrich-merz/)
- [Apiar Data lfsa_ehomp](https://apiardata.com/statistics/eu-usually-works-from-home-rate/)
- [Germanpedia WFH](https://germanpedia.com/eu-working-from-home-share/)
- [Wikipedia Loi pour une République numérique](https://en.wikipedia.org/wiki/Loi_pour_une_R%C3%A9publique_num%C3%A9rique)
- [S.I.Lex open source par défaut (2017)](https://scinfolex.com/2017/12/08/les-logiciels-produits-par-les-administrations-sont-passes-en-open-source-par-defaut-et-voici-pourquoi/)
- [code.gouv.fr 500 logiciels au SILL](https://code.gouv.fr/fr/blog/500-logiciels-libres-au-sill/)
- [ouvert.numerique.gouv.fr SILL 2026](https://www.ouvert.numerique.gouv.fr/actualites/socle-interministeriel-logiciels-libres-sill-evolutions-2026/)
- [suitenumerique/docs](https://github.com/suitenumerique/docs)
- [FOSS Backstage 2025 FR/DE talk](https://program.foss-backstage.de/fossback25/talk/XPGWX8/)
- [VideoLAN about](https://www.videolan.org/videolan/)
- [J-B Kempf 15 years of VLC](https://jbkempf.com/blog/15-years-of-VLC/)
- [GitHub Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/)
- [Stack Overflow Survey 2025 Developers](https://survey.stackoverflow.co/2025/developers)
