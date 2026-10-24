# India

_調査日: 2026-10-25_

Hofstede (The Culture Factor 現行値): PDI 77 / IDV 24 / MAS 56 / UAI 40 / LTO 51 / IVR 26。旧版では IDV=48 ([source](https://www.theculturefactor.com/country-comparison-tool?countries=india))

- この調査は、途中で WebSearch の上限に達したため、そこで打ち切った。下の URL はすべて、検索結果か WebFetch で実際に取れたもの。
- 本文まで精読した一次資料は 3 つ。Erin Meyer の HBR 論文 "Being the Boss in Brussels, Boston, and Beijing" (2017)、The Culture Factor の国別比較ツール、GitHub Octoverse 2025 のブログ。それ以外の主張は、報道・企業発表・二次要約を検索の段階で拾ったもの。
- 裏付けを確認できなかった主張は落とした。「Indian yes (yes が同意を意味しない)」、オフショアで開発者が表に出てこないというベンダーの体験談、EF EPI 2025 の順位、CMMI L5 の世界シェアがそれに当たる。

## 設計と品質

- 大手 IT サービス企業は、プロセス成熟度の認証で品質を担保してきた。たとえば TCS は 2011 年に CMMI-DEV と CMMI-SVC の両方で全社 Level 5 の評価を受け、SVC の Level 5 では世界初とされる [中] ([source](https://www.tcs.com/who-we-are/newsroom/press-release/tcs-level-5-cmmi-svc))
- 求人系メディアの比較では、サービス企業は「specs are king、process-heavy、ticket-driven」、プロダクト企業は「design docs、code review、CI/CD」と対比されている。どちらもベンダー記事で、研究による裏付けはない [弱] ([source](https://www.uplers.com/article/product-vs-service-background-engineers-startup-hiring/), [source](https://www.productbased.in/guides/product-vs-service))
- jugaad (制約下での即興解決) をソフトウェア開発の美徳とみなす見方は、インド人エンジニア自身の間ではむしろ否定的。HN では「jugaad を良いことだと思うインド人エンジニアに会ったことがない」というコメントが出ている。擁護論 (2G 回線でも動く設計のような frugal engineering) もあるが、どちらも意見記事や掲示板のレベル [弱] ([source](https://news.ycombinator.com/item?id=34025360), [source](https://sujaypan.substack.com/p/the-cult-of-jugaad), [source](https://medium.com/@devlinktips/why-indias-jugaad-coding-culture-might-save-bloated-software-71806b738aa2))
- 反例として Zerodha がある。インド最大の証券会社だが、tech チームは 33〜35 人で全スタックを self-host している。CTO の Kailash Nadh は「人数がユーザー数に比例して増えるというのは誤解」と述べている [中] ([source](https://softwaremisadventures.com/p/kailash-nadh-on-being-an-absurdist), [source](https://indianstartupnews.com/news/zerodha-hired-only-5-employees-for-its-tech-team-in-4-years-says-cto-kailash-nadh-7238408))

## 失敗とリスク

- Hofstede の UAI は 40 で、曖昧さへの耐性は中〜高め ("medium-low preference for avoiding uncertainty") とされる [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=india))
- Meyer によると、India を含む top-down 型の文化では決定が速く下されるが、新しい情報が入ると変わりうる。決定は確約ではなく仮置き (small d) になる [強] ([source](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf))
- Meyer の Scheduling 尺度では、India は flexible-time 側。時間を流動的に扱い、複数のことを並行し、割り込みも受け入れる [中] ([source](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams))
- 「オフショアチームは悪い知らせを上げない」という話は HN の体験談にとどまる。同じ HN には「米国側のマネージャーが反論を想定していない構造のせいでもある」という反論もある。postmortem 文化についての体系的なデータは見つからなかった [弱] ([source](https://news.ycombinator.com/item?id=36119709), [source](https://news.ycombinator.com/item?id=38952256))

## フィードバックとコードレビュー

- Meyer の要約では、India は「対立を避ける」側かつ high-context 側に置かれている。原典ではなく二次要約から [中] ([source](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams))
- GitHub の PR 7 万件を分析した Rastogi et al. (ESEM 2018) では、17 カ国中 16 カ国で「レビュアーと投稿者が同じ国だと PR が通りやすい」傾向が出た。India だけが例外で、同国のメンテナが相手だと受理率がむしろ下がった (-7.4%)。数字は日本語の要約スライドから [中] ([source](https://se.cite.ehime-u.ac.jp/wws2019/pdf/p10.pdf))

## 階層と意思決定

- Meyer の HBR 2017 のマップで、India は「top-down かつ hierarchical」の象限にいる。同じ象限に China、Indonesia、Saudi Arabia、Russia [強] ([source](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf))
- Hofstede の PDI は 77 で 6 指標の中で最も高く、"appreciation of hierarchy and top-down structure" と説明されている [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=india))
- 企業の種類による差が大きい。サービス企業は承認チェーンと階層、プロダクトスタートアップは創業者に直接話せて判断が速い、と対比されている。研究ではなく業界記事ベース [弱] ([source](https://www.uplers.com/article/product-vs-service-background-engineers-startup-hiring/))

## コミュニケーションとドキュメント

- 英語は業務言語として普及しているが、EF EPI 2024 では 116 カ国中 69 位。「英語ネイティブ並み」という前提は危うい [中] ([source](https://www.nippon.com/en/japan-data/h02199/))
- Meyer の Trusting 尺度では relationship-based 側。仕事の前に、人間関係による信頼 (affective trust) が要る [中] ([source](https://numinoscoaching.com/erin-meyer-culture-map-explained))

## 働き方とキャリア

- NASSCOM の FY2025 推計では、業界の売上は約 $282.6B、従業員は 5.8M、純増は 126K。2026 年の改訂で $297B / 5.82M に上方修正された [強] ([source](https://www.businesstoday.in/technology/news/story/indian-tech-industry-to-reach-300-billion-revenue-milestone-in-fy26-nasscom-465747-2025-02-24), [source](https://www.dqindia.com/news/nasscom-outlook-indias-tech-industry-to-grow-61-to-315-bn-in-fy26-11151228))
- GCC (外資のグローバル拠点) は FY2024 時点で 1,700 拠点超、1.9M 人超 (NASSCOM-Zinnov)。tier-2 都市への分散も進んでいる [強] ([source](https://community.nasscom.in/communities/nasscom-insights/india-gcc-landscape-report-5-year-journey), [source](https://community.nasscom.in/communities/gcc/beyond-metros-indias-next-gcc-frontier))
- 離職 (job-hopping) は景気で大きく振れる。FY23 Q2 は Infosys 27.1%、Wipro 23%、TCS 21.5%。FY24 Q4 には TCS 12.5%、Infosys 12.6% まで下がった [強] ([source](https://www.businesstoday.in/interactive/longread/tcs-infosys-wipro-how-hr-issues-plague-it-sector-227-29-12-2022), [source](https://www.business-standard.com/companies/news/tcs-infosys-wipro-see-exit-of-64-000-employees-in-fy24-amid-low-demand-124041901226_1.html))
- 米国への移住ルートが太い。FY2023 に承認された H-1B のうち 72% がインド生まれ (中国生まれは 12%) [強] ([source](https://www.uscis.gov/sites/default/files/document/reports/OLA_Signed_H-1B_Characteristics_Congressional_Report_FY2023.pdf), [source](https://www.pewresearch.org/short-reads/2025/03/04/what-we-know-about-the-us-h-1b-visa-program/))
- 長時間労働をめぐって世論が割れている。Narayana Murthy (Infosys 創業者) が 2023 年に「若者は週 70 時間働け」と発言し、SNS では「slave culture」と反発された。一方で経営者層には支持もあった [中] ([source](https://www.cnbc.com/2023/11/07/india-debate-on-70-hour-workweek-illegal-or-road-to-greatness.html), [source](https://www.businesstoday.in/latest/in-focus/story/indias-youth-should-work-70-hours-a-week-narayana-murthys-remark-on-productivity-leaves-internet-divided-403427-2023-10-26))

## OSS とコミュニティ

- Octoverse 2025 によると、India の開発者は 21.9M で世界 2 位 (2020 年の 4.5M から約 4.9 倍)。2025 年の新規は 5.2M 超で、世界の新規の 14% 超を占める。OSS コントリビュータ数ではすでに世界 1 位で、2030 年には 57.5M となり米国を抜くと予測されている。総コントリビューション量はまだ米国が上 [強] ([source](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/))
- Stack Overflow Developer Survey 2024 の回答者のうち、India は 7.2% で国別 3 位 [強] ([source](https://survey.stackoverflow.co/2024/developer-profile))
- Zerodha は 2024 年 10 月に FLOSS/fund を立ち上げ、年 $1M を世界の OSS に拠出している。2025 年には Blender、FFmpeg、OpenSSL などへ合計 $1M を支払った [強] ([source](https://www.entrepreneur.com/en-in/news-and-trends/zerodha-launches-usd-1-mn-annual-fund-to-support-open/481437), [source](https://www.opensourceforu.com/2025/10/zerodha-announces-final-675000-tranche-for-global-open-source-projects-advocates-sovereign-foss-fund/))
- 反対側の証拠として、Nadh 本人が「インドは FOSS を大量に使っているが、貢献はほぼ無視できる程度」と述べ、sovereign FOSS fund の設立を求めている。人数の多さと貢献の深さは別物 [中] ([source](https://analyticsindiamag.com/global-tech/indias-foss-contributions-remain-negligible-despite-heavy-adoption-says-zerodha-cto))

## 一言で

階層的でトップダウンだが決定は仮置きで柔軟。世界最大級の開発者人口を持ち、その文化はサービス企業・GCC・プロダクト企業で分かれる。

## Sources

- [The Culture Factor: Country comparison (India)](https://www.theculturefactor.com/country-comparison-tool?countries=india)
- [Erin Meyer, Being the Boss in Brussels, Boston, and Beijing (HBR 2017)](https://erinmeyer.com/wp-content/uploads/2019/11/Being-the-Boss-HBR.pdf)
- [Welcome to the Jungle: Erin Meyer 8 keys](https://www.welcometothejungle.com/en/articles/keys-managing-multicultural-teams)
- [Numinos Coaching: Culture Map explained](https://numinoscoaching.com/erin-meyer-culture-map-explained)
- [GitHub Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
- [Stack Overflow Survey 2024 Developer Profile](https://survey.stackoverflow.co/2024/developer-profile)
- [Business Today: NASSCOM FY25](https://www.businesstoday.in/technology/news/story/indian-tech-industry-to-reach-300-billion-revenue-milestone-in-fy26-nasscom-465747-2025-02-24)
- [DQIndia: NASSCOM FY26 outlook](https://www.dqindia.com/news/nasscom-outlook-indias-tech-industry-to-grow-61-to-315-bn-in-fy26-11151228)
- [NASSCOM: India GCC Landscape Report](https://community.nasscom.in/communities/nasscom-insights/india-gcc-landscape-report-5-year-journey)
- [NASSCOM: Beyond the Metros](https://community.nasscom.in/communities/gcc/beyond-metros-indias-next-gcc-frontier)
- [USCIS: H-1B Characteristics FY2023](https://www.uscis.gov/sites/default/files/document/reports/OLA_Signed_H-1B_Characteristics_Congressional_Report_FY2023.pdf)
- [Pew: H-1B facts 2025](https://www.pewresearch.org/short-reads/2025/03/04/what-we-know-about-the-us-h-1b-visa-program/)
- [Business Today: IT attrition](https://www.businesstoday.in/interactive/longread/tcs-infosys-wipro-how-hr-issues-plague-it-sector-227-29-12-2022)
- [Business Standard: 64,000 exits FY24](https://www.business-standard.com/companies/news/tcs-infosys-wipro-see-exit-of-64-000-employees-in-fy24-amid-low-demand-124041901226_1.html)
- [CNBC: 70-hour week debate](https://www.cnbc.com/2023/11/07/india-debate-on-70-hour-workweek-illegal-or-road-to-greatness.html)
- [Business Today: Murthy remark](https://www.businesstoday.in/latest/in-focus/story/indias-youth-should-work-70-hours-a-week-narayana-murthys-remark-on-productivity-leaves-internet-divided-403427-2023-10-26)
- [TCS: CMMI Level 5](https://www.tcs.com/who-we-are/newsroom/press-release/tcs-level-5-cmmi-svc)
- [Uplers: product vs service engineers](https://www.uplers.com/article/product-vs-service-background-engineers-startup-hiring/)
- [ProductBased.in: product vs service](https://www.productbased.in/guides/product-vs-service)
- [HN: Jugaad takes agile to the extreme](https://news.ycombinator.com/item?id=34025360)
- [HN: offshoring to India](https://news.ycombinator.com/item?id=36119709)
- [HN: pushback thread](https://news.ycombinator.com/item?id=38952256)
- [Sujay Pan: The Cult of Jugaad](https://sujaypan.substack.com/p/the-cult-of-jugaad)
- [Medium: jugaad coding culture](https://medium.com/@devlinktips/why-indias-jugaad-coding-culture-might-save-bloated-software-71806b738aa2)
- [Software Misadventures: Kailash Nadh](https://softwaremisadventures.com/p/kailash-nadh-on-being-an-absurdist)
- [Indian Startup News: Zerodha tech hiring](https://indianstartupnews.com/news/zerodha-hired-only-5-employees-for-its-tech-team-in-4-years-says-cto-kailash-nadh-7238408)
- [Entrepreneur: Zerodha FLOSS fund](https://www.entrepreneur.com/en-in/news-and-trends/zerodha-launches-usd-1-mn-annual-fund-to-support-open/481437)
- [OSFY: Zerodha final tranche](https://www.opensourceforu.com/2025/10/zerodha-announces-final-675000-tranche-for-global-open-source-projects-advocates-sovereign-foss-fund/)
- [AIM: India FOSS contributions negligible](https://analyticsindiamag.com/global-tech/indias-foss-contributions-remain-negligible-despite-heavy-adoption-says-zerodha-cto)
- [Rastogi et al. 2018 summary (WWS2019)](https://se.cite.ehime-u.ac.jp/wws2019/pdf/p10.pdf)
- [Nippon.com: EF EPI 2024](https://www.nippon.com/en/japan-data/h02199/)
