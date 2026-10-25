# China

_調査日: 2026-10-25_

_このノートは調査時点の記録。各記述の信頼度（[強]/[中]/[弱]）と数値の最終版は `src/data/content/{ja,en}/countries/` の JSON が正で、校正で変えた数値は `_訂正_` 行で示している。_

Hofstede (The Culture Factor 現行値): PDI 80 / IDV 43 / MAS 66 / UAI 30 / LTO 77 / IVR 24。旧版は IDV=20、LTO=87 ([source](https://www.theculturefactor.com/country-comparison-tool?countries=china))

- WebSearch の上限に達したところで調査を止めた。載せている URL は、検索結果か WebFetch で実際に取得できたものだけ。
- Culture Map 本体 (2014) の 8 尺度は原典を確認できていない。確認できたのは Meyer 本人の HBR 2017 論文 (leading と deciding の 2 軸) と、Meyer を引用した記事。
- Octoverse 2025 の China の開発者数 (10.7M) は二次要約でしか出てこず、本文では確認できなかったので落とした。2023 年の障害後に誰かが問責・処分されたかどうかも確認できなかった。

## 設計と品質

- 「Chinese speed」の代表的な説明は、Kai-Fu Lee の『AI Superpowers』(2018)。速度が絶対でコピーも当然という熾烈な競争 (gladiator) が高速な iteration を生んだ、という議論。模倣を美化しているという批判もある [中] ([source](https://techcrunch.com/2019/03/14/can-there-be-too-much-competition-between-startups/), [source](https://en.wikipedia.org/wiki/AI_Superpowers))
- 反例として Huawei がある。1998〜99 年ごろから IBM の IPD (Integrated Product Development) を導入し、テンプレートを「そのまま真似ろ」と求めて、重いゲート型のプロセスを徹底した [中] ([source](https://www.researchgate.net/publication/340100855_Transforming_Product_Development_at_Huawei_The_IPD_Initiative), [source](https://knowledge.wharton.upenn.edu/article/huawei-technologies-a-chinese-trail-blazer-in-africa/))
- 2023 年 11 月には、Alibaba Cloud が 1 か月に 2 回の障害を起こし、Didi も大規模な障害で謝罪した。これだけで国全体の品質傾向を一般化することはできない [弱] ([source](https://www.datacenterdynamics.com/en/news/alibaba-cloud-hit-by-outage-second-in-a-month/), [source](https://www.scmp.com/tech/article/3243246/chinas-ride-hailing-giant-didi-blames-underlying-software-failure-breakdown-plunged-service-disarray))

## 失敗とリスク

- Hofstede の UAI は 30 とかなり低く、曖昧さへの耐性が高い [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=china))
- 振り返りの土着の実践として 复盘 (fupan、碁の打ち直しが語源) がある。Lenovo の文化の柱とされ、柳传志の「自分に情けをかけずに考え抜け」が指針。blameless postmortem とは別の系譜 [中] ([source](https://www.linkedin.com/pulse/growing-from-change-30-year-career-viewed-through-fu-pan-gina-qiao), [source](https://medium.com/@jessicalu/keep-learning-and-keep-growing-with-fu-pan-e21feffa6764))
- 面子との関係では、Meyer が「中国の manager は同僚を公に批判しないことを学ぶ」と例示している [中] ([source](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams))

## フィードバックとコードレビュー

- Meyer は China を high-context 側に置いている。否定的なフィードバックは間接的で、面子を潰すおそれがあると特にそうなる [中] ([source](https://numinoscoaching.com/erin-meyer-culture-map-explained), [source](https://dmb-shanghai.com/language/culture-map-erin-meyer-cross-cultural-business-review/))
- 中国のサンプルを使った実証研究では、上司の強制力 (coercive power) を強く感じるほど、また権威主義的なリーダーシップの下にいるほど、部下の沈黙が増える。面子・关系・中庸が発言を抑える要因として論じられている [中] ([source](https://econtent.hogrefe.com/doi/10.1027/1866-5888/a000357), [source](https://www.cambridge.org/core/journals/journal-of-management-and-organization/article/abs/authoritarian-leadership-and-employee-silence-in-china/7BA708133A7360F1BA41CDE596F2E16C), [source](https://link.springer.com/chapter/10.1007/978-3-031-31127-7_5))
- GitHub の PR 受理率では、China は低い側のグループに入った (Rastogi et al. 2018)。文化だけでなく、国籍バイアスや英語の問題が混ざっている可能性がある [中] ([source](https://se.cite.ehime-u.ac.jp/wws2019/pdf/p10.pdf))

## 階層と意思決定

- Meyer の HBR 2017 のマップで、China は最も top-down かつ hierarchical な国の 1 つ。ある米企業の事例では、中国人スタッフが「上司が丁寧に詳しく指示しない」ことを「傲慢で無能」と受け取っていた [強] ([source](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf))
- Hofstede の PDI は 80 [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=china))
- 大手テック企業の間でも差がある。ByteDance は張一鳴の「Context, not Control」を掲げ、社内文書をデフォルトで公開し、OKR を 2 か月周期で回し、Feishu (Lark) で透明性を高めたとされる。ただし出典は二次情報 [弱] ([source](https://baike.baidu.com/en/item/ByteDance%20Values/3212121), [source](https://en.wikipedia.org/wiki/Lark_(software)))

## コミュニケーションとドキュメント

- 業務コミュニケーションは WeChat などのチャットが中心。勤務時間外の WeChat 対応が「隠れ残業」として争われ、北京の裁判所が 2022 年に 3 万元の支払いを命じた。2024 年には最高人民法院もモデルケースとして取り上げた [強] ([source](https://www.sixthtone.com/news/1012704), [source](https://www.sixthtone.com/news/1014551))
- Feishu は文書・会議・IM・OKR を一体化した「組織 OS」として売られた。ドキュメント文化を製品化した例と言える [中] ([source](https://daoinsights.com/works/how-does-bytedances-enterprise-collaboration-platform-create-the-future-of-work/))
- 英語は EF EPI 2024 で 116 カ国中 91 位だが、都市差が大きい (北京 518、上海 511)。BAT の OSS 調査では、国際化の取り組みとして最も多いのが「英語の README を用意する」だった [強] ([source](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2024/ef-epi-fact-sheet-china-english.pdf), [source](https://arxiv.org/pdf/2103.01590))

## 働き方とキャリア

- 2019 年 3 月に GitHub リポジトリ 996.ICU が立ち上がり、最初の 1 時間で 1,000 スターを超えた。2021 年 8 月には最高人民法院と人社部が典型事例を公表し、996 は違法だと明示した [強] ([source](https://www.sixthtone.com/news/1003771/chinese-developers-protest-overwork-on-github), [source](https://qz.com/1589309/996-icu-github-hosts-chinese-tech-worker-complaints), [source](https://www.sixthtone.com/news/1008375))
  _訂正 2026-10-25: 「数週間で 20 万スター」→「最初の 1 時間で 1,000 スター超」。引用した出典 (Sixth Tone・Quartz) で確認できるのは後者で、20 万の数字は出典に記載なし_
- 2021 年に Kuaishou と ByteDance が「大小周」(隔週の日曜出勤) を廃止した。ByteDance では残業代がなくなって平均 17% の実質減給になり、社内投票では約 30% が長時間労働の継続を望んでいた [中] ([source](https://technode.com/2021/07/09/bytedance-to-end-weekend-work-in-blow-to-996-culture/), [source](https://daoinsights.com/news/bytedance-cuts-pay-after-abandoing-six-day-working-week/))
- 「35 歳の呪い」: 35 歳を超えるとリストラや採用で狙われやすい。採用プラットフォームの調査では、プログラマーの 87% が不安を感じていた。中国の労働法は年齢差別を明示的には禁じていない [中] ([source](https://www.scmp.com/tech/article/3308921/why-turning-35-feels-career-death-sentence-some-chinese-tech-workers), [source](https://slashdot.org/story/24/04/23/154206/chinas-ageing-tech-workers-hit-by-curse-of-35), [source](https://www.rfa.org/english/news/china/china-ageism-07052023161538.html))
- 内卷 (involution) と 躺平 (lying flat): 限られた昇進枠をめぐる消耗戦への反動として、高給職を離れて 1065 勤務を選ぶ人や、润学 (国外脱出) が出ている。大手の人員削減で、新卒の公務員志向も強まっている [中] ([source](https://dissentmagazine.org/article/tech-workers-lie-flat/), [source](https://www.taipeitimes.com/News/feat/archives/2024/12/25/2003829068), [source](https://www.caixinglobal.com/2025-08-01/chinas-tech-giants-spook-a-generation-of-workers-with-job-cuts-102347727.html))

## OSS とコミュニティ

- OSS Compass の推計では、アクティブな OSS 開発者は 220 万人超で世界最大 (India は約 200 万人)。GitHub のアカウント数だけで見ると、中国は過小評価される [中] ([source](https://www.scmp.com/tech/article/3319280/china-tops-india-us-and-eu-growing-pool-open-source-developers-experts-say))
- 2020 年、MIIT は Gitee が率いる企業・大学のコンソーシアムに国産 OSS ホスティング基盤の整備を委託した。2022 年 5 月に公開コードを事前審査制にして大量のリポジトリをロックし、CUHK の研究によるとその後コミットが急減した [強] ([source](https://www.technologyreview.com/2022/05/30/1052879/censoring-china-open-source-backfire/), [source](https://www.theregister.com/2022/05/20/gitee_code_review/), [source](https://cssl.socsc.cuhk.edu.hk/2025/05/02/the-impact-of-regulation-on-open-source-development-evidence-from-gitee/))
  _訂正 2026-10-25: 「Gitee が MIIT に選ばれた」→「MIIT が Gitee 主導のコンソーシアムに委託」。出典 (MIT Technology Review) では委託先は Gitee 単独ではなくコンソーシアム_
- 企業発の OSS が国際的な財団に入っている。ASF の incubating プロジェクト 28 件のうち 10 件が中国企業発。TiDB (PingCAP、2015 年北京創業) は GitHub スター 40k、コントリビュータ 1,200 人超 [中] ([source](https://www.thestack.technology/why-china-is-forging-closer-ties-with-open-source-foundations/), [source](https://www.thestack.technology/new-top-level-asf-projects-open-source-chinese/), [source](https://github.com/pingcap/tidb))
- OpenHarmony は、Huawei が 2020〜21 年に OpenAtom 財団へ寄贈したコードがもと。2025 年 1 月時点でエコシステムパートナーは 401 社あるが、コントリビュータ上位は Huawei 系に偏っている [中] ([source](https://en.wikipedia.org/wiki/OpenAtom_Foundation), [source](https://www.harmony-developers.com/p/openharmony-community-as-of-january))

## 一言で

最も top-down で曖昧さに強い「速度の文化」。一方で 996 や 35 歳問題への反発が制度を動かし、GitHub の外にもう 1 つの OSS 圏を持つ。

## Sources

- [The Culture Factor: Country comparison (China)](https://www.theculturefactor.com/country-comparison-tool?countries=china)
- [Erin Meyer, Being the Boss in Brussels, Boston, and Beijing (HBR 2017)](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf)
- [Welcome to the Jungle: Erin Meyer 8 keys](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams)
- [Numinos Coaching: Culture Map explained](https://numinoscoaching.com/erin-meyer-culture-map-explained)
- [DMB Shanghai: Culture Map review](https://dmb-shanghai.com/language/culture-map-erin-meyer-cross-cultural-business-review/)
- [TechCrunch: Kai-Fu Lee competition](https://techcrunch.com/2019/03/14/can-there-be-too-much-competition-between-startups/)
- [Wikipedia: AI Superpowers](https://en.wikipedia.org/wiki/AI_Superpowers)
- [ResearchGate: Huawei IPD](https://www.researchgate.net/publication/340100855_Transforming_Product_Development_at_Huawei_The_IPD_Initiative)
- [Wharton: Huawei](https://knowledge.wharton.upenn.edu/article/huawei-technologies-a-chinese-trail-blazer-in-africa/)
- [DCD: Alibaba Cloud outages](https://www.datacenterdynamics.com/en/news/alibaba-cloud-hit-by-outage-second-in-a-month/)
- [SCMP: Didi outage](https://www.scmp.com/tech/article/3243246/chinas-ride-hailing-giant-didi-blames-underlying-software-failure-breakdown-plunged-service-disarray)
- [Gina Qiao: Fu Pan](https://www.linkedin.com/pulse/growing-from-change-30-year-career-viewed-through-fu-pan-gina-qiao)
- [Medium: Fu pan](https://medium.com/@jessicalu/keep-learning-and-keep-growing-with-fu-pan-e21feffa6764)
- [J. Personnel Psychology 2025: supervisor power and silence](https://econtent.hogrefe.com/doi/10.1027/1866-5888/a000357)
- [JMO: Authoritarian leadership and silence in China](https://www.cambridge.org/core/journals/journal-of-management-and-organization/article/abs/authoritarian-leadership-and-employee-silence-in-china/7BA708133A7360F1BA41CDE596F2E16C)
- [Springer: Patterns of Employee Voice in China](https://link.springer.com/chapter/10.1007/978-3-031-31127-7_5)
- [Rastogi et al. 2018 summary (WWS2019)](https://se.cite.ehime-u.ac.jp/wws2019/pdf/p10.pdf)
- [Baidu Baike: ByteDance Values](https://baike.baidu.com/en/item/ByteDance%20Values/3212121)
- [Wikipedia: Lark](https://en.wikipedia.org/wiki/Lark_(software))
- [Dao Insights: Feishu](https://daoinsights.com/works/how-does-bytedances-enterprise-collaboration-platform-create-the-future-of-work/)
- [Sixth Tone: WeChat overtime ruling](https://www.sixthtone.com/news/1012704)
- [Sixth Tone: SPC WeChat overtime](https://www.sixthtone.com/news/1014551)
- [EF EPI 2024 China fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2024/ef-epi-fact-sheet-china-english.pdf)
- [arXiv: BAT open source study](https://arxiv.org/pdf/2103.01590)
- [Sixth Tone: 996.ICU](https://www.sixthtone.com/news/1003771/chinese-developers-protest-overwork-on-github)
- [Quartz: 996.ICU](https://qz.com/1589309/996-icu-github-hosts-chinese-tech-worker-complaints)
- [Sixth Tone: 996 illegal](https://www.sixthtone.com/news/1008375)
- [TechNode: ByteDance ends weekend work](https://technode.com/2021/07/09/bytedance-to-end-weekend-work-in-blow-to-996-culture/)
- [Dao Insights: ByteDance pay cut](https://daoinsights.com/news/bytedance-cuts-pay-after-abandoing-six-day-working-week/)
- [SCMP: curse of 35](https://www.scmp.com/tech/article/3308921/why-turning-35-feels-career-death-sentence-some-chinese-tech-workers)
- [Slashdot/FT: curse of 35](https://slashdot.org/story/24/04/23/154206/chinas-ageing-tech-workers-hit-by-curse-of-35)
- [RFA: curse of 35](https://www.rfa.org/english/news/china/china-ageism-07052023161538.html)
- [Dissent: Tech Workers Lie Flat](https://dissentmagazine.org/article/tech-workers-lie-flat/)
- [Taipei Times/Guardian: neijuan](https://www.taipeitimes.com/News/feat/archives/2024/12/25/2003829068)
- [Caixin: tech job cuts 2025](https://www.caixinglobal.com/2025-08-01/chinas-tech-giants-spook-a-generation-of-workers-with-job-cuts-102347727.html)
- [SCMP: China tops open-source developers](https://www.scmp.com/tech/article/3319280/china-tops-india-us-and-eu-growing-pool-open-source-developers-experts-say)
- [MIT Tech Review: Gitee censorship](https://www.technologyreview.com/2022/05/30/1052879/censoring-china-open-source-backfire/)
- [The Register: Gitee code review](https://www.theregister.com/2022/05/20/gitee_code_review/)
- [CUHK: Gitee regulation study](https://cssl.socsc.cuhk.edu.hk/2025/05/02/the-impact-of-regulation-on-open-source-development-evidence-from-gitee/)
- [The Stack: China and OSS foundations](https://www.thestack.technology/why-china-is-forging-closer-ties-with-open-source-foundations/)
- [The Stack: new ASF TLPs](https://www.thestack.technology/new-top-level-asf-projects-open-source-chinese/)
- [GitHub: pingcap/tidb](https://github.com/pingcap/tidb)
- [Wikipedia: OpenAtom Foundation](https://en.wikipedia.org/wiki/OpenAtom_Foundation)
- [OpenHarmony partners Jan 2025](https://www.harmony-developers.com/p/openharmony-community-as-of-january)
