# Ukraine

_調査日: 2026-10-25_

_このノートは調査時点の記録。各記述の信頼度（[強]/[中]/[弱]）と数値の最終版は `src/data/content/{ja,en}/countries/` の JSON が正で、校正で変えた数値は `_訂正_` 行で示している。_

Hofstede (Culture Factor 現行値): PDI 92 / IDV 55 / MAS 27 / UAI 95 / LTO 51 / IVR 14 ([source](https://www.theculturefactor.com/country-comparison-tool?countries=ukraine))。旧版は IDV 25 / LTO 86 で改訂幅が大きく、旧版の数字と混ぜて引用しないこと。Culture Map は Meyer の一次資料にウクライナの位置がない。

## Design & quality

- ICPC 世界大会でリヴィウ国立大が 2008 年に 4 位、キーウ国立大 (Taras Shevchenko) が 2010 年に 4 位 (いずれも金メダル) [強] ([source](https://cphof.org/contest/icpc))
- UAI 95 は極めて高い。N-iX (2019、自社の受託を売る立場の記事) は、詳細な計画と背景説明を求める傾向に結びつけている [弱] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=ukraine), [source](https://www.n-ix.com/ukrainian-software-developers-culture-communication-outsourcing/))

## Failure & risk

- 戦時下の事業継続が常態化している。Deloitte/AmCham (2024 年 7〜8 月、経営層 139 人) の調査では、76% が停電の影響を受けつつ 88% が備えがあると回答し、94% が BCP を持つか策定中。発電機・Starlink 付きのコワーキングや、社員の電源確保の補助も広く行われた [中] ([source](https://www.deloitte.com/ua/en/about/press-room/deloitte-acc-winter-resilience-strategy.html), [source](https://it-dimension.com/blog/ukraine-it-blackouts/))
  _訂正 2026-10-25: 調査時期「2024/9」→「2024 年 7〜8 月」。出典では 9 月は公表時期で、実施は 7〜8 月 (n=139)_
  _訂正 2026-10-27: ua-failure-2 の出典に DOU (2023-08-25)「Як айтівці та компанії готуються до можливих блекаутів」を追加 (発電機・Starlink・機器購入の補助)。[弱]→[中]_
- IT サービス輸出は中央銀行の統計 (AIN.UA の報道) で 2022 年の $7.3B をピークに、2024 年は $6.4B (-4.2%) まで減った。崩壊ではなく緩やかな減少で、2025 年は約 $6.66B と小幅に回復 (dev.ua) [強] ([source](https://en.ain.ua/2025/01/31/ukraines-it-services-exports-decreased-42-to-64b-in-2024/), [source](https://dev.ua/en/news/yaki-10-krain-zabezpechyly-80-it-eksportu-ukrainy-u-2025-rotsi-1771584442))
  _訂正 2026-10-25: 「-4.3%」→「-4.2%」(出典 AIN.UA の見出しどおり)。2025 年の数字の出所を「Lviv IT Cluster、要検証」→「dev.ua」に修正 (引用元は dev.ua の記事)_
- 代償もある。DOU 調査 (Alcor 経由) では燃え尽きが 38%。従軍中の IT 人材の 30% に雇用主から給与が支払われている [中] ([source](https://alcor.com/outsourcing-to-ukraine/))
  _訂正 2026-10-27: DOU「Портрет айтівця 2026」を直接確認。燃え尽き 38% は正しい。「従軍中の 30% に雇用主から給与」→「IT 企業から全額支給は 7%、無給で職を確保が 28%」。出典を Alcor から DOU に変え [強] に上げた (<https://dou.ua/lenta/articles/portrait-2026/>)_

## Feedback & code review

- 重要な技術判断では開発者がはっきり意見を言う、と受託企業 N-iX は書いている (2019)。売り手側の主張で、独立した研究は見つからなかった [弱] ([source](https://www.n-ix.com/ukrainian-software-developers-culture-communication-outsourcing/))
- 採用ガイド同士でも見方が割れている。unicrew (2026) は「期待を明示しないと悪い技術判断に声高に反論しない」とし、employsome (2026) は「技術的な反対に抵抗がなく、オーナーシップ志向が強い」とする [弱] ([source](https://unicrew.com/blog/hire-developers-in-ukraine/), [source](https://employsome.com/hire/ukraine/hire-developers-in-ukraine/))

## Hierarchy & decision-making

- PDI 92 は調査対象国の中でも非常に高い [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=ukraine))
- 一方、IT 企業は厳格な階層と形式的なコミュニケーションをいち早く捨てた、という受託企業側の主張もある (Jappware)。nCube は「お役所的手続きを嫌うが、形式的な階層は守る」とし、見方が一致しない [弱] ([source](https://www.jappware.com/insights/12-reasons-to-hire-ukrainian-software-developers-for-it-outsourcing/), [source](https://ncube.com/top-8-things-that-influence-the-ukrainian-work-ethic))
- UAI 95 は、何層にも重なる組織階層や多いルールと結びつけて説明される [弱] ([source](https://edge-executive-services.medium.com/hofstedes-six-dimensions-a-guide-to-ukrainian-nordic-business-relations-4ccd0cd127d1))

## Communication & documentation

- 完全リモートが 66% (DOU 調査、Alcor 経由)。海外クライアント・分散チームが前提なので、文書と非同期のやり取りが重くなる (後半は構造からの推論) [中] ([source](https://alcor.com/outsourcing-to-ukraine/))
  _訂正 2026-10-27: DOU 2026 本文で「66% айтівців працюють повністю віддалено」を確認。出典を DOU に変え [強] に上げた_
- N-iX (2019) は、初対面での形式張った態度は敬意の表れであり、欧州とは 1-2 時間の時差で重なりやすいとする。売り手側の記述 [弱] ([source](https://www.n-ix.com/ukrainian-software-developers-culture-communication-outsourcing/))

## Work style & careers

- FOP(個人事業主)比率は DOU 調べで 87% (2022)、70% (2024)、57% (2025)、49% (2026) と推移した。Diia.City の gig 契約や雇用契約 (КЗпП) への移行が進んでいる [強] ([source](https://dou.ua/lenta/articles/portrait-2026/), [source](https://dou.ua/lenta/articles/portrait-2025/))
- Diia.City (2022 年〜) の gig 契約は PIT 5%、軍事税 5%、社会保険 (USC) は最低賃金の 22%。居住企業は 4,600 社超、約 21.7 万人 (2026/10) [強] ([source](https://dev.ua/en/news/kilkist-rezydentiv-diiacity-1790954165), [source](https://chambers.com/articles/changes-to-diia-city-taxation-and-legislation-for-it-and-digital-economy-from-2025))
- 開発者の手取り中央値は $3,450 (DOU、2025/12)。移住を考える人は 2 年で 51% から 40% に減ったが、国外から働く IT 人材は約 20% いる [中] ([source](https://dev.ua/en/news/medianna-zarplata-rozrobnykiv-v-ukraini-vtrymalas-na-3450-ale-dzhuny-i-seniory-prosily-doslidzhennia-dou-1768210252), [source](https://dev.ua/en/news/blyzko-20-ukrainskykh-it-fakhivtsiv-uzhe-pratsiuiut-z-za-kordonu-yaki-shche-nespodivani-tsyfry-opublikovani-u-novomu-doslidzhenni-1780479183))

## OSS & community

- GitLab は Dmitriy Zaporozhets が 2011 年にウクライナの自宅で開発を始めた OSS で、2014 年に Sytse Sijbrandij と事業化した [強] ([source](https://www.cnbc.com/amp/2022/11/07/ukraine-looks-to-tech-to-rebuild-economy-after-russia-invasion-.html))
  _訂正 2026-10-26: CNBC の記事は Zaporozhets がウクライナ出身の創業者だと書くだけで、2011 年・自宅・2014 年の事業化は載っていない。GitLab Handbook の沿革 (<https://handbook.gitlab.com/handbook/company/history/>) を出典に足し、「2014 年に Sijbrandij と事業化」を「2013 年にオランダの Sijbrandij と組み、2014 年に法人化」に直した_
- Grammarly (OSS ではなくプロダクト) は Lytvyn・Shevchenko・Lider が 2009 年にキーウで創業し、最大の開発拠点は現在もキーウにある [強] ([source](https://en.wikipedia.org/wiki/Max_Lytvyn), [source](https://www.cnbc.com/amp/2022/11/07/ukraine-looks-to-tech-to-rebuild-economy-after-russia-invasion-.html))
  _訂正 2026-10-26: 「キーウで創業」「最大の開発拠点は現在もキーウ」を引用元で確認できなかった (Wikipedia の Max Lytvyn と CNBC にはない)。本文を「2009 年に創業。ウクライナで開発が始まり、現在もキーウにオフィスがある」に弱め、Wikipedia の Grammarly 項目を出典に足した_
- 開発者コミュニティ DOU.ua の年次調査「Портрет айтівця 2026」には 14,631 人が回答しており、給与・契約形態などをコミュニティ自身が継続的に可視化している [中] ([source](https://dou.ua/lenta/articles/portrait-2026/))

## 一言で

PDI・UAI がともに極めて高い数値の一方で、IT は欧米クライアント向けの受託・リモートが前提。戦時下でも BCP と契約制度の工夫で輸出を維持してきた。

## 注意点

- フィードバック・階層についての資料はほぼ受託企業・採用業者の記事で、互いに矛盾している。一次研究は見つからなかった。
- Hofstede の IDV は旧版 25 から 55 へ改訂されており、古い資料 (N-iX 2019 など) は旧値を使っている。
- 約 20% が国外から働いており、「ウクライナの開発者」には国内在住者と国外移住者の両方が含まれる。
- 受託・アウトスタッフ型と製品企業 (Grammarly など) では契約形態も文化も違う。DOU によればアウトスタッフ企業・中小企業では FOP が 65% 超 (2025)。

## Sources

- [The Culture Factor — Country comparison tool (Ukraine)](https://www.theculturefactor.com/country-comparison-tool?countries=ukraine)
- [cphof ICPC standings](https://cphof.org/contest/icpc)
- [N-iX: Ukrainian developers culture (2019)](https://www.n-ix.com/ukrainian-software-developers-culture-communication-outsourcing/)
- [Deloitte UA winter resilience](https://www.deloitte.com/ua/en/about/press-room/deloitte-acc-winter-resilience-strategy.html)
- [IT-Dimension: blackouts](https://it-dimension.com/blog/ukraine-it-blackouts/)
- [AIN: UA IT exports 2024](https://en.ain.ua/2025/01/31/ukraines-it-services-exports-decreased-42-to-64b-in-2024/)
- [dev.ua: 2025 IT exports top 10](https://dev.ua/en/news/yaki-10-krain-zabezpechyly-80-it-eksportu-ukrainy-u-2025-rotsi-1771584442)
- [Alcor: outsourcing to Ukraine (DOU data)](https://alcor.com/outsourcing-to-ukraine/)
- [unicrew: hire developers in Ukraine](https://unicrew.com/blog/hire-developers-in-ukraine/)
- [employsome: hire developers in Ukraine](https://employsome.com/hire/ukraine/hire-developers-in-ukraine/)
- [Jappware: 12 reasons](https://www.jappware.com/insights/12-reasons-to-hire-ukrainian-software-developers-for-it-outsourcing/)
- [nCube: Ukrainian work ethic](https://ncube.com/top-8-things-that-influence-the-ukrainian-work-ethic)
- [Edge Executive: Hofstede Ukraine-Nordic](https://edge-executive-services.medium.com/hofstedes-six-dimensions-a-guide-to-ukrainian-nordic-business-relations-4ccd0cd127d1)
- [DOU portrait 2026](https://dou.ua/lenta/articles/portrait-2026/)
- [DOU portrait 2025](https://dou.ua/lenta/articles/portrait-2025/)
- [dev.ua: Diia.City residents](https://dev.ua/en/news/kilkist-rezydentiv-diiacity-1790954165)
- [Chambers: Diia.City taxation 2025](https://chambers.com/articles/changes-to-diia-city-taxation-and-legislation-for-it-and-digital-economy-from-2025)
- [dev.ua: median salary $3,450](https://dev.ua/en/news/medianna-zarplata-rozrobnykiv-v-ukraini-vtrymalas-na-3450-ale-dzhuny-i-seniory-prosily-doslidzhennia-dou-1768210252)
- [dev.ua: 20% work from abroad](https://dev.ua/en/news/blyzko-20-ukrainskykh-it-fakhivtsiv-uzhe-pratsiuiut-z-za-kordonu-yaki-shche-nespodivani-tsyfry-opublikovani-u-novomu-doslidzhenni-1780479183)
- [CNBC: Ukraine tech founders](https://www.cnbc.com/amp/2022/11/07/ukraine-looks-to-tech-to-rebuild-economy-after-russia-invasion-.html)
- [Max Lytvyn (Wikipedia)](https://en.wikipedia.org/wiki/Max_Lytvyn)
