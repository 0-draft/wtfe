# South Korea

_調査日: 2026-10-25_

_このノートは調査時点の記録。各記述の信頼度（[強]/[中]/[弱]）と数値の最終版は `src/data/content/{ja,en}/countries/` の JSON が正で、校正で変えた数値は `_訂正_` 行で示している。_

Hofstede（The Culture Factor 現行値）: PDI 60 / IDV 58 / MAS 39 / UAI 85 / LTO 86 / IVR 29。旧版の値は IDV 18 / LTO 100 で、古典的な「強い集団主義」像は旧版の値に基づいている ([source](https://www.theculturefactor.com/country-comparison-tool?countries=japan%2Csouth+korea)) ([source](https://www.cyborlink.com/besite/korea_south.htm))

## Design & quality

- 「빨리빨리（早く早く）」文化が SW 開発を逆に遅くしているという批判がある。指摘されているのは、知識共有の欠如、拡張性に乏しいアーキテクチャ、特定の開発者への依存。ZDNet の 2013 年のコラムで古く、意見記事 [弱] ([source](https://zdnet.co.kr/view/?no=20131031141615))
- 韓国のチームは開発者が 8 割を占めテスターが少ない、という外部パートナーの観察がある。ただし筆者は、アジャイルの文脈ではこれが必ずしも欠点ではないとしている [弱] ([source](https://www.cio.com/article/3522776/%EC%A0%95%EC%B2%A0%ED%99%98-%EC%B9%BC%EB%9F%BC-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%99%80-%ED%85%8C%EC%8A%A4%ED%84%B0.html))
- 公共 SW の SI では多段階下請け（甲乙丙丁）が続いている。中小企業が低付加価値のコーディングに固定され、企画や設計の能力が育たないという分析がある（SPRi 2014 年、ZDNet 2023 年）[中] ([source](https://spri.kr/download/5378)) ([source](https://zdnet.co.kr/view/?no=20231117094637))

## Failure & risk

- Hofstede の UAI 85 は世界でも上位の不確実性回避 [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=japan%2Csouth+korea))
- 反証として、Toss は「失敗への恐れより速い実行」を公式に掲げている。速さを重視するプロダクト企業は UAI のイメージに当てはまらない [中] ([source](https://toss.im/tossfeed/article/toss-dev-conference-2021))
- 2022 年 10 月の板橋（Pangyo）データセンター火災による Kakao の大規模障害について、Kakao は同年 12 月の if(kakao) dev 2022 で原因分析と再発防止策を公開した。対策にはデータセンターの二重化や運用管理ツールの三重化が含まれる。大規模な公開 postmortem の事例 [強] ([source](https://www.kakaocorp.com/page/detail/9843?lang=ENG)) ([source](https://byline.network/2022/12/1208/))
  _訂正 2026-10-25: 再発防止策の中身を出典 (Kakao 発表) の記載どおり「DC の二重化・運用管理ツールの三重化」と明記した_
- 社内の blame 文化に関する一次データはほぼ見つからなかった。手がかりは、ウアハン兄弟（配達の民族）の KPT 振り返りの原則「人のせいにしない」と、SK Devocean の資料「責任者を問責しない段階が最も難しい」程度 [弱] ([source](https://techblog.woowahan.com/2677/)) ([source](https://devocean.sk.com/vlog/seminar/Postmortem.pdf))

## Feedback & code review

- 「Pn ルール」が業界で広く使われている。レビューコメントに P1（必ず反映）〜P5（些細な意見）の強さを明示するもので、Banksalad 発祥。ウアハン兄弟や 당근（Daangn）も採用した。言外の意図を読む負担を制度で減らす仕組み [中] ([source](https://techblog.woowahan.com/7152/)) ([source](https://wormwlrm.github.io/2024/02/04/Code-Review-with-Emoji.html))
- ウアハン兄弟の規則には、指摘がない場合でも作成者を称賛するコメントを残す、というものがある [中] ([source](https://techblog.woowahan.com/7152/))
- Meyer の Evaluating や Disagreeing の尺度で韓国がどこにあるかは、今回確認できなかった。高コンテクスト側に入ることだけは確認できた [弱] ([source](https://readingraphics.com/book-summary-the-culture-map-erin-meyer/))

## Hierarchy & decision-making

- Meyer の Leading 尺度で、韓国は最も階層的な端に置かれている（書籍抜粋の二次資料）。Deciding 尺度での位置は未確認 [中] ([source](https://www.studocu.com/row/document/international-university-of-monaco/managing-across-cultures/the-culture-map-navigating-global-business-boundaries-erin-meyer/138447169))
- 財閥（Samsung、Hyundai、LG）では決定権が東アジアの基準で見ても異例なほどトップに集中している、という論考がある。Chang 2003 を引用した Substack 記事 [弱] ([source](https://carolineklokmose.substack.com/p/whos-actually-in-charge))
- 対極の例が Toss の DRI。議論は職位に関係なく開かれているが、最終決定は担当者 1 人が下し、CEO を含め全員がそれに従う。情報は「社内 100、社外 0」の原則で共有される [中] ([source](https://toss.im/tossfeed/article/toss-team-culture)) ([source](https://evan-moon.github.io/2022/05/07/toss-retrospective/))
- フラット化の試みには揺り戻しもある。Kakao は 2006 年の創業以来、英語名で呼び合ってきた。しかし 2024 年に Kakao Games が「〜님」の呼称に戻し、本体も「水平への執着」を見直している。「呼び方は水平でも組織文化はそうではない企業が多い」という業界の声もある [中] ([source](https://www.newsis.com/view/NISX20240421_0002707370)) ([source](https://www.inews24.com/view/1323268))

## Communication & documentation

- Meyer の Communicating 尺度で、韓国は日本、Indonesia と並ぶ最も高コンテクストな国 [中] ([source](https://readingraphics.com/book-summary-the-culture-map-erin-meyer/))
- 意思決定層と中間管理職の考え方が変わらず、上意下達のまま「アジャイル」を導入すると現場の負担だけが増える、という実務者の指摘がある [弱] ([source](https://seoulalien.substack.com/p/87))
- 書面か口頭か、報告文化（보고）の実態についての信頼できるデータは今回取れなかった（WebSearch 上限により追加調査できず）。ここは今後調べる必要がある [弱]

## Work style & careers

- 2023 年の年間労働時間は 1,872 時間で、OECD 平均より約 200 時間長い。2018 年の勤労基準法改正（週 52 時間制）以降、IT やゲーム業界の労働環境は大きく改善したと報じられている [強] ([source](https://www.visualcapitalist.com/annual-working-hours-in-countries-2023/)) ([source](https://www.seoulfn.com/news/articleView.html?idxno=481404))
  _訂正 2026-10-26: 「OECD 平均より約 200 時間長い」→「OECD 平均 (1,745 時間) より約 130 時間長い」。出典も Visual Capitalist (2021 年の値しか載っていない) から OECD の指標ページ (<https://www.oecd.org/en/data/indicators/hours-worked.html>) に差し替えた。週 52 時間制以降の改善はソウル経済の記事で確認した (KOCCA 2021 年調査で週平均 41.3 時間、クランチ経験者 60.6%→15.4%)_
  _訂正 2026-10-27: 雇用労働部の 2025-12-30 の労使政共同宣言を追加 (2030 年までに実労働時間を OECD 平均の 1,700 時間台へ)。週 52 時間の上限は不変。半導体特別法 (2026-01) は 52 時間の例外条項を削って成立した_
- ゲーム業界の 2024 年の実態調査（KOCCA、n=1,510）では、クランチ経験は 34.3%、包括賃金制の適用は 69.9%（50 人未満の企業では 90% 超）だった。週 52 時間制の裏で無給残業が「影の労働」になっているという報道もある [強] ([source](https://www.thisisgame.com/articles/203826)) ([source](https://www.hankyung.com/article/202509105494i))
- リモートは企業ごとに分かれている。Naver は Connected Work を続け、6 か月ごとに完全リモート（Type R）か週 3 日出社（Type O）かを選べる。Kakao は 2024 年から事実上の全面出社に切り替え、労組がリモートの復活を要求している [中] ([source](https://v.daum.net/v/20240307181837999)) ([source](https://www.ddaily.co.kr/page/view/2024103014225505515))
- 2021 年の「開発者の年俸戦争」から一転し、2024 年には企業の 34% が開発者採用を減らすと答えた（Grepp 調査）。開発者の 63.1% は開発者 50 人以下の企業に勤めている（2021 年のプログラマーズ調査）[中] ([source](https://www.hankyung.com/article/202411293961g)) ([source](https://programmers.co.kr/pages/2021-dev-survey))
- SI の多段階下請けでは、末端のフリーランスが報酬未払いの被害を受けやすい。日本の SIer と同型の問題 [中] ([source](https://www.mediatoday.co.kr/news/articleView.html?idxno=110753)) ([source](https://spri.kr/post/22652))

## OSS & community

- Octoverse 2023 で韓国の開発者は 190 万人超、前年比 22% 増 [強] ([source](https://github.blog/news-insights/research/the-state-of-open-source-and-ai/))
  _訂正 2026-10-27: GitHub Innovation Graph の値を追加。KR の開発者数は 2025Q4 で 2,900,539 (2026Q1 3,145,730)。Octoverse とは数え方が違うので別の文にした。Octoverse 2025 の韓国 266 万人は韓国メディアの二次報道にしかなく使わなかった_
- 政府主導で貢献者を育てている。NIPA は「オープンソース・コントリビューション・アカデミー」を運営している。2024 年は 931 人の応募から 282 人が選ばれ、2026 年も発足式が開かれた [強] ([source](https://zdnet.co.kr/view/?no=20260713162757)) ([source](https://www.nipa.kr/home/2-1/16130))
  _訂正 2026-10-25: 「2020 年開始、2026 年は 11 チーム・約 260 人・13 週間」を、出典で確認できる「2024 年は応募 931 人・選抜 282 人、2026 年も発足式」に差し替えた。前者の数字は引用した 2 ページで確認できなかった_
- 企業発の OSS には Naver の Pinpoint（APM、約 13.9k stars）や LINE の Armeria（約 5.1k stars）がある。LINE は日韓にまたがる企業 [中] ([source](https://github.com/pinpoint-apm/pinpoint)) ([source](https://github.com/line/armeria))
- 英語力は EF EPI 2024 で 50 位（Moderate）。日本（92 位）よりはかなり上 [強] ([source](https://www.nippon.com/en/japan-data/h02199/))
  _訂正 2026-10-27: EF EPI 2025 に差し替え。「50 位、日本 92 位」→「123 か国中 48 位 (522)、日本 96 位 (446)」。出典を EF の国別ページに変えた_
- 調査データの限界として、Stack Overflow Survey 2024 の韓国の回答は 144 件（表記揺れの別項目を足しても約 199 件）しかなく、代表性がない [強] ([source](https://survey.stackoverflow.co/2024/developer-profile))

## 一言で

階層的で高コンテクストな文化の上に「빨리빨리」の実行速度が乗っている。Toss の DRI や Pn ルールのように、明示化と権限委譲を制度で作る企業がある一方で、財閥や SI の上意下達、包括賃金制が残る二層構造。

## Sources

- [The Culture Factor country comparison](https://www.theculturefactor.com/country-comparison-tool?countries=japan%2Csouth+korea)
- [Cyborlink Korea (classic Hofstede)](https://www.cyborlink.com/besite/korea_south.htm)
- [Readingraphics: Culture Map summary](https://readingraphics.com/book-summary-the-culture-map-erin-meyer/)
- [Studocu: Culture Map excerpt](https://www.studocu.com/row/document/international-university-of-monaco/managing-across-cultures/the-culture-map-navigating-global-business-boundaries-erin-meyer/138447169)
- [Substack: Who's Actually in Charge](https://carolineklokmose.substack.com/p/whos-actually-in-charge)
- [ZDNet Korea: 빨리빨리 문화의 저주 (2013)](https://zdnet.co.kr/view/?no=20131031141615)
- [CIO: 개발자와 테스터](https://www.cio.com/article/3522776/%EC%A0%95%EC%B2%A0%ED%99%98-%EC%B9%BC%EB%9F%BC-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%99%80-%ED%85%8C%EC%8A%A4%ED%84%B0.html)
- [SPRi 2014 보고서](https://spri.kr/download/5378)
- [SPRi: 공공기관 SI](https://spri.kr/post/22652)
- [ZDNet Korea 2023 기고](https://zdnet.co.kr/view/?no=20231117094637)
- [미디어오늘: 갑을병정](https://www.mediatoday.co.kr/news/articleView.html?idxno=110753)
- [Toss SLASH21](https://toss.im/tossfeed/article/toss-dev-conference-2021)
- [Toss 문화 문서](https://toss.im/tossfeed/article/toss-team-culture)
- [evan-moon: 토스 회고](https://evan-moon.github.io/2022/05/07/toss-retrospective/)
- [Kakao: if(kakao) dev 2022 재발방지](https://www.kakaocorp.com/page/detail/9843?lang=ENG)
- [Byline Network: 카카오 장애 회고](https://byline.network/2022/12/1208/)
- [우아한형제들: 팀 문화의 탄생](https://techblog.woowahan.com/2677/)
- [우아한형제들: 코드 리뷰 문화 개선](https://techblog.woowahan.com/7152/)
- [재그지그: 이모지 코드리뷰](https://wormwlrm.github.io/2024/02/04/Code-Review-with-Emoji.html)
- [SK Devocean: Postmortem PDF](https://devocean.sk.com/vlog/seminar/Postmortem.pdf)
- [뉴시스: 카카오게임즈 호칭](https://www.newsis.com/view/NISX20240421_0002707370)
- [아이뉴스24: 레벨제](https://www.inews24.com/view/1323268)
- [서울 에일리언 #87](https://seoulalien.substack.com/p/87)
- [OECD: Hours worked](https://www.oecd.org/en/data/indicators/hours-worked.html)
- [서울파이낸스: 69시간제](https://www.seoulfn.com/news/articleView.html?idxno=481404)
- [디스이즈게임: 포괄임금제 2024](https://www.thisisgame.com/articles/203826)
- [한국경제: 그림자 노동](https://www.hankyung.com/article/202509105494i)
- [다음: 네이버 재택 유지](https://v.daum.net/v/20240307181837999)
- [디지털데일리: 카카오 근무제](https://www.ddaily.co.kr/page/view/2024103014225505515)
- [한국경제: 개발자 채용 감소](https://www.hankyung.com/article/202411293961g)
- [프로그래머스 2021 개발자 설문](https://programmers.co.kr/pages/2021-dev-survey)
- [GitHub Octoverse 2023](https://github.blog/news-insights/research/the-state-of-open-source-and-ai/)
- [ZDNet Korea: NIPA 2026 오픈소스 아카데미](https://zdnet.co.kr/view/?no=20260713162757)
- [NIPA 2025 OSSCA 공고](https://www.nipa.kr/home/2-1/16130)
- [GitHub: Pinpoint](https://github.com/pinpoint-apm/pinpoint)
- [GitHub: Armeria](https://github.com/line/armeria)
- [Nippon.com: EF EPI](https://www.nippon.com/en/japan-data/h02199/)
- [Stack Overflow Survey 2024 Developer Profile](https://survey.stackoverflow.co/2024/developer-profile)
