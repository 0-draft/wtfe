# United Kingdom

_調査日: 2026-10-25_

_このノートは調査時点の記録。各記述の信頼度（[強]/[中]/[弱]）と数値の最終版は `src/data/content/{ja,en}/countries/` の JSON が正で、校正で変えた数値は `_訂正_` 行で示している。_

## Hofstede

- The Culture Factor 現行値：PDI 35 / IDV 76 / MAS 66 / UAI 35 / LTO 60 / IVR 69（比較ツールをブラウザで描画して確認）([The Culture Factor](https://www.theculturefactor.com/country-comparison-tool?countries=united+kingdom))
- 参考（2010 年系の旧値、meta には使わない）：PDI 35 / IDV 89 / MAS 66 / UAI 35 / LTO 51 / IVR 69 ([cyborlink UK](https://www.cyborlink.com/besite/united_kingdom.htm), [ultimate-leadership-training](https://www.ultimate-leadership-training.co.uk/hofstedes-cultural-dimensions.html))

## 設計と品質

- GDS の Government Design Principles（2012 年公開、2025 年更新）は「Start with user needs」「Do less」「Iterate. Then iterate again」などを掲げている。公共部門が iterative な開発を公式の原則にしている [強] ([source](https://www.gov.uk/guidance/government-design-principles))
- GOV.UK Service Standard の point 8 は「Iterate and improve frequently」。サービスに「完成はない」とし、バグ修正などの保守だけでは足りないとしている [強] ([source](https://apply-the-service-standard.education.gov.uk/service-standard/8-iterate-and-improve-frequently))
- 反証と国内差：NAO（2023）によると、過去 25 年で省庁横断のデジタル戦略が 11 回出され、1974 年導入の Police National Computer がいまも現役。デジタル関連の意思決定の多くは、技術を専門としないジェネラリストのリーダーが行っている。GDS の理想とレガシーを抱えた公共 IT の現実には大きな差がある [強] ([source](https://www.nao.org.uk/wp-content/uploads/2023/03/digital-transformation-in-government.pdf))
- Hofstede の UAI は低く、曖昧さや「まず試す」ことへの許容度が高い（UAI 35。国全体の値からの推論）[中] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=united+kingdom))

## 失敗とリスク

- GDS Way のインシデント標準は「blameless post mortem culture に従って incident review を行う」と明記している [強] ([source](https://gds-way.digital.cabinet-office.gov.uk/standards/incident-management.html))
- GOV.UK はインシデントレポートを公開している（例：2022 年 1 月 5 日のエラー率上昇）。元 GDS の職員は、公開することで「信頼と安全な学習の雰囲気が生まれる」と書いている [中] ([source](https://insidegovuk.blog.gov.uk/2022/02/25/incident-report-increased-error-rate-on-gov-uk-on-5-january-2022/), [source](https://24ways.org/2018/what-i-learned-in-six-years-at-gds/))
- London の fintech である Monzo は on-call を 2 名体制にし、全インシデントを記録している（2019 年）。元社員は「blameless buck-passing」（blameless を装った責任の押し付け合い）にも警鐘を鳴らしている [中] ([source](https://monzo.com/blog/2019/07/08/how-we-respond-to-incidents), [source](https://blog.pragmaticengineer.com/postmortem-best-practices/))
- 強い反例は Post Office Horizon 事件。Fujitsu 製システムにバグがあったのに「Horizon は堅牢」とする証言が使われ、900 件超の冤罪有罪判決が出た。Court of Appeal は Post Office が「事実上、立証責任を逆転させた」と認定している。ソフトウェアの欠陥を個人の責任にすり替えた、blame 文化の極端な失敗例 [強] ([source](https://en.wikipedia.org/wiki/British_Post_Office_scandal), [source](https://www.computerweekly.com/feature/Fujitsus-role-in-the-Post-Office-scandal-Everything-you-need-to-know))

## フィードバックとコードレビュー

- Meyer によると、英国人は「アメリカ人より直接的でなく、オランダ人よりはるかに直接的でない」。understatement や downgrader（a bit, slightly など）の名手 [中] ([source](https://erinmeyer.com/how-to-say-this-is-crap-in-different-cultures/))
- Anglo-Dutch translation guide では、「With all due respect」は「あなたは間違っている」、「I would suggest」は「これは命令」、「Very interesting」は「気に入らない」の意味になる。半分ジョークの資料で、作者も匿名とされたり Ripmeester が名乗ったりと揺れているので、ステレオタイプとして扱いすぎないこと [弱] ([source](https://erinmeyer.com/how-to-say-this-is-crap-in-different-cultures/), [source](https://www.linkedin.com/pulse/we-all-speak-english-dont-nannette-ripmeester))
- 推論：コードレビューで「Might be worth considering…」と書かれていたら、実質的には blocking な指摘の可能性がある。英国のレビュー文化についての実証研究は見つからなかった [弱] (データなし)
- 参考データ：HDI と PR 受理率を見た研究（20 プロジェクト、44k 件の PR）では、UK の開発者は受理率が最も高いグループに入っていた [中] ([source](https://arxiv.org/pdf/2012.03716))

## 階層と意思決定

- Meyer の HBR 2017 の図で、UK は US・Canada・Australia と同じ「egalitarian かつ top-down」の象限に置かれている [中] ([source](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf))
- Hofstede の PDI は低い（PDI 35）[強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=united+kingdom))
- 公共部門では、GDS の Service Standard に基づく service assessment が実質的なゲートになっている。正当な理由なくコードを公開していないと assessment に落ちうる。一方で NAO は、意思決定者の技術的な専門性が足りないことを問題視している [中] ([source](https://apply-the-service-standard.education.gov.uk/service-standard/12-make-new-source-code-open.html), [source](https://www.nao.org.uk/wp-content/uploads/2023/03/digital-transformation-in-government.pdf))

## コミュニケーションとドキュメント

- Meyer の Communicating 軸で、UK は low-context 側だが US ほど極端ではない（US、Canada、Australia、Netherlands、Germany の後に UK が来る）。表面上は明示的でも、評価の場面では婉曲になる [中] ([source](https://lifeclub.org/books/the-culture-map-erin-meyer-review-summary))
- 公共部門には「Make things open: it makes things better」という design principle がある。新規コードの公開は Service Standard の point 12 で、GDS は 2017 年に coding in the open の利点（秘密情報をコードから分離する習慣が付くなど）をブログで説明している [強] ([source](https://gds.blog.gov.uk/2017/09/04/the-benefits-of-coding-in-the-open))
- GDS や Inside GOV.UK などの公開ブログで、設計や障害の経緯を説明する文化が公共部門にある。民間について同様のデータはない [中] ([source](https://insidegovuk.blog.gov.uk/2015/11/18/what-happens-when-things-go-wrong-on-gov-uk/))

## 働き方とキャリア

- ONS によると、フルタイム労働者の実労働時間は週平均 36.6 時間（2024 年）。全職種の数値でエンジニアに限らない [強] ([source](https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/timeseries/ybuy/lms))
- Stack Overflow 2025 では、UK はフルリモート 31.9%、ハイブリッド（柔軟寄り）25.8% で、US よりハイブリッドが多い。給与中央値は EM $136k、back-end $109k、full-stack $85k で、US の 6〜7 割 [強] ([source](https://survey.stackoverflow.co/2025/work))
- 解雇規制は US より重い。20 人以上を整理解雇するには集団協議が必要で、100 人以上なら解雇の 45 日前までに協議を始めなければならない [強] ([source](https://www.gov.uk/redundancy-your-rights/consultation))
- 2022 年の週 4 日勤務の試行（61 社、約 2,900 人）では 56 社が継続し、71% が燃え尽きの減少を報告した。小規模企業が中心で、テック業界に限った試行ではない [中] ([source](https://autonomy.work/portfolio/uk4dwpilotresults/))

## OSS とコミュニティ

- Octoverse で UK は開発者数の上位 5 か国に入る（2024 年時点で 4M 超、前年比 +19%）。2030 年の予測は 11M [中] ([source](https://github.blog/news-insights/octoverse/octoverse-2024/), [source](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/))
- OpenUK（2023）の推計では、2022 年に OSS が UK テック部門の GVA の 27% を支えた。業界団体による推計なので割り引いて読む [中] ([source](https://openuk.uk/report/state-of-open-the-uk-in-2023-phase-2-part-1/))
  _訂正 2026-10-25: 「£13.59bn」を削除。引用ページで金額を確認できず、確認できたのは 27% のみ_
- 公共部門が「デフォルトでコード公開」を制度として持っているのは UK の特徴。GOV.UK の Smart Answers を別の機関が再利用し、2 か月かかる見込みだった開発を 1 週間未満で終えた例がある [強] ([source](https://gds.blog.gov.uk/2017/09/04/the-benefits-of-coding-in-the-open))

## 一言で

公共部門（GDS）は iterate・open・blameless を明文化しているが、Horizon 事件やレガシー IT という重い反例も抱える。言い方は控えめでも中身は低文脈寄りなので、「a bit」に込められた本気度を読み取る必要がある。

## Sources

- [GOV.UK Government Design Principles](https://www.gov.uk/guidance/government-design-principles)
- [DfE: Service Standard 8 iterate and improve frequently](https://apply-the-service-standard.education.gov.uk/service-standard/8-iterate-and-improve-frequently)
- [DfE: Service Standard 12 make new source code open](https://apply-the-service-standard.education.gov.uk/service-standard/12-make-new-source-code-open.html)
- [GDS Way: incident management](https://gds-way.digital.cabinet-office.gov.uk/standards/incident-management.html)
- [Inside GOV.UK: incident report Jan 2022](https://insidegovuk.blog.gov.uk/2022/02/25/incident-report-increased-error-rate-on-gov-uk-on-5-january-2022/)
- [Inside GOV.UK: What happens when things go wrong (2015)](https://insidegovuk.blog.gov.uk/2015/11/18/what-happens-when-things-go-wrong-on-gov-uk/)
- [24 ways: What I Learned in Six Years at GDS (2018)](https://24ways.org/2018/what-i-learned-in-six-years-at-gds/)
- [GDS blog: The benefits of coding in the open (2017)](https://gds.blog.gov.uk/2017/09/04/the-benefits-of-coding-in-the-open)
- [NAO: Digital transformation in government (2023)](https://www.nao.org.uk/wp-content/uploads/2023/03/digital-transformation-in-government.pdf)
- [Monzo: How we respond to incidents (2019)](https://monzo.com/blog/2019/07/08/how-we-respond-to-incidents)
- [Pragmatic Engineer: Postmortem best practices](https://blog.pragmaticengineer.com/postmortem-best-practices/)
- [Wikipedia: British Post Office scandal](https://en.wikipedia.org/wiki/British_Post_Office_scandal)
- [Computer Weekly: Fujitsu's role in the Post Office scandal](https://www.computerweekly.com/feature/Fujitsus-role-in-the-Post-Office-scandal-Everything-you-need-to-know)
- [Erin Meyer: How To Say "This Is Crap" In Different Cultures](https://erinmeyer.com/how-to-say-this-is-crap-in-different-cultures/)
- [Ripmeester: We all speak English, don't we?](https://www.linkedin.com/pulse/we-all-speak-english-dont-nannette-ripmeester)
- [Erin Meyer: Being the Boss in Brussels, Boston, and Beijing (HBR 2017 PDF)](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf)
- [lifeclub: Culture Map summary](https://lifeclub.org/books/the-culture-map-erin-meyer-review-summary)
- [Furtado et al.: OSS contributions and HDI (arXiv)](https://arxiv.org/pdf/2012.03716)
- [The Culture Factor: Country comparison tool](https://www.theculturefactor.com/country-comparison-tool?countries=united+kingdom)
- [cyborlink: United Kingdom](https://www.cyborlink.com/besite/united_kingdom.htm)
- [ultimate-leadership-training: Hofstede UK](https://www.ultimate-leadership-training.co.uk/hofstedes-cultural-dimensions.html)
- [ONS: Average actual weekly hours (YBUY)](https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/timeseries/ybuy/lms)
- [Stack Overflow Developer Survey 2025: Work](https://survey.stackoverflow.co/2025/work)
- [GOV.UK: Redundancy consultation](https://www.gov.uk/redundancy-your-rights/consultation)
- [Autonomy: UK four-day week pilot results](https://autonomy.work/portfolio/uk4dwpilotresults/)
- [GitHub Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/)
- [GitHub Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
- [OpenUK: State of Open 2023 Phase 2](https://openuk.uk/report/state-of-open-the-uk-in-2023-phase-2-part-1/)
