# Frameworks & methodology research

_調査日: 2026-10-25_

## 先に結論

- Culture Map の国別位置は、Erin Meyer 本人の INSEAD 講演スライド PDF（[tfwa.com](https://www.tfwa.com/sites/tfwa.com/files/2023-10/Erin%20Meyer.pdf)）を `pdftotext -layout` でテキスト化し、国コードの横位置から相対順位を読み取ったもの。ほとんどのセルは一次資料ベースだが、位置は目測なので「寄り」程度の粒度に留めた。
- スライドに載っていない国は `?` にした。Israel の多くのスケール、Ukraine の全スケール、Korea の Deciding / Scheduling / Persuading、India の Leading がこれに当たる。
- 方法論の章の柱になりそうなのは 3 つ。「国内のばらつき約80% は国の中にある」（Taras+ 2016）、「日独の事例で国の典型像と実際のチームが食い違った」（Neumann+ EASE 2024）、「PR 採択率に国差と同国バイアスがある」（Rastogi+ ESEM 2018）。
- 注意点。国別の統計は「GitHub のプロフィールに自分で書いた所在地」（Octoverse）と「回答者の多い上位5か国だけ」（Stack Overflow）に依存していて、日本・韓国の細かいデータは無い。

## Culture Map

- Communicating：低文脈（明示的・単純）か、高文脈（含み・行間）か。Edward Hall の概念を下敷きにしている [強] ([HBR 2014](https://hbr.org/2014/05/navigating-the-cultural-minefield), [Meyer deck](https://www.tfwa.com/sites/tfwa.com/files/2023-10/Erin%20Meyer.pdf))
- Evaluating：否定的なフィードバックを直接言うか、間接的に包むか。Communicating とは別の軸で、たとえばフランスは高文脈寄りなのに批判は米国より直接的 [強] ([HBR 2014 検索要約](https://hbr.org/2014/05/navigating-the-cultural-minefield))
- Persuading：原理から入る（演繹）か、応用・事例から入る（帰納）か。アジアはこの軸に乗らず「holistic（全体的思考）」として別扱いになる [中] ([Meyer Eight-scale PDF](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf), [Portman review](https://hennyportman.wordpress.com/2018/11/11/review-the-culture-map-decoding-how-people-think-lead-and-get-things-done-across-cultures/))
- Leading：平等主義（上司は対等な人たちのまとめ役）か、階層主義（上司は権威を示す）か [強] ([Meyer deck](https://www.tfwa.com/sites/tfwa.com/files/2023-10/Erin%20Meyer.pdf))
- Deciding：合意で決めるか、トップダウンで決めるか。Leading とは独立した軸で、日本は Leading では階層、Deciding では合意 [強] ([Meyer deck](https://www.tfwa.com/sites/tfwa.com/files/2023-10/Erin%20Meyer.pdf), [deployyourself](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/))
- Trusting：仕事の実績で信頼を作るか、食事や人間関係で信頼を作るか [強] ([Meyer deck](https://www.tfwa.com/sites/tfwa.com/files/2023-10/Erin%20Meyer.pdf))
- Disagreeing：公の場での反論を健全とみなすか、関係を壊すものとみなすか [強] ([Meyer deck](https://www.tfwa.com/sites/tfwa.com/files/2023-10/Erin%20Meyer.pdf))
- Scheduling：直線的な時間（予定は固定し順番に進める）か、柔軟な時間（状況に合わせて変える）か [強] ([Meyer deck](https://www.tfwa.com/sites/tfwa.com/files/2023-10/Erin%20Meyer.pdf))
- 表の凡例：無印は Meyer スライドで確認済み（位置は目測）。`†` は二次資料（書評・要約）のみ。`?` は資料なし。
- 表の注記：Nordic 列は DK=デンマーク、SE=スウェーデン、FI=フィンランド、NO=ノルウェー。RU/UA 列は Russia だけで、Ukraine はスライドに無い。スライドの「PO」は Poland と判断した（同じ PDF にある国名付きの Communicating 図で、Poland が UK の隣に書かれている位置と一致するため）。

| スケール | Japan | S.Korea | China | India | US | UK | Germany | France | Netherlands | Nordic | Israel | Brazil | Poland | RU/UA |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Communicating (低文脈↔高文脈) | 極高文脈 | 高文脈 | 高文脈 | 高文脈寄り | 極低文脈 | 低〜中 | 低文脈 | 高文脈寄り | 低文脈 | DK 低 / SE・FI 中低 | ? | 中 | 中 | RU 高文脈寄り |
| Evaluating (直接↔間接) | 極間接 | 間接 | 間接寄り | 間接寄り | 中 | 中（米よりやや間接） | 直接 | 直接寄り | 極直接 | DK・FI 直接寄り | 極直接 | 間接寄り | 直接寄り | RU 極直接 |
| Persuading (原理↔応用) | holistic（軸外）† | holistic（軸外）† | holistic（軸外）† | ? | 極応用 | 応用 | 原理寄り | 極原理 | 応用寄り | DK・NO 応用寄り | ? | 中 | 中（原理寄り） | RU 原理 |
| Leading (平等↔階層) | 極階層 | 階層 | 階層 | ? | 平等寄り | 平等寄り | 中 | 階層寄り | 極平等 | DK・SE 極平等 / FI 平等 | 平等 | 階層寄り | 階層寄り | RU 階層 |
| Deciding (合意↔トップダウン) | 極合意 | ? | トップダウン | トップダウン寄り | 中（トップダウン寄り） | 中 | 合意寄り | トップダウン寄り | 合意 | DK・SE 合意 | ? | 中〜トップダウン寄り | ? | RU トップダウン |
| Trusting (タスク↔関係) | 関係寄り | 関係† | 関係 | 関係 | 極タスク | タスク | タスク | 中 | タスク | DK タスク | 関係寄り† | 関係 | 中（タスク寄り） | RU 関係寄り |
| Disagreeing (対立↔回避) | 極回避 | 回避 | 回避 | 回避寄り | 中 | 中 | 対立 | 対立 | 対立 | DK 対立寄り / SE 回避寄り | 極対立 | 中（回避寄り） | 対立寄り | RU 対立 |
| Scheduling (直線↔柔軟) | 直線 | ? | ? | 柔軟 | 直線寄り | 直線寄り | 極直線 | 中 | 直線 | SE・DK・NO 直線 | 柔軟寄り† | 柔軟 | 中 | RU 柔軟寄り |

- Israel の Trusting / Scheduling は、要約サイトが書籍の記述を引いたもの（「ロシアとイスラエルはどちらも flexible scheduling・open disagreement・relationship trust」）で、本文そのものは未確認 [弱] ([mind.li](https://mind.li/explore/37057-the-culture-map-by-erin-meyer-study-analysis-guide) ほか、検索結果の要約から)
- Korea の Trusting が「関係」というのは書評の記述だけ [中] ([kimtasso](https://kimtasso.com/book-review-the-culture-map-by-erin-meyer-decoding-how-people-think-lead-and-get-things-done-across-cultures-diversity-and-cross-cultural-intelligence/))
- 位置はすべて「他国と比べてどうか」という相対的なもの。Meyer 自身も「文化的相対性」を強調していて、日本人から見ると中国人はかなり直接的に感じられる（Evaluating 上で両国の間に距離がある）[中] ([HBR 2014](https://hbr.org/2014/05/navigating-the-cultural-minefield))
- 限界（ここは私の推論）：Meyer のマップは査読付きの定量研究ではなく、研修受講者（主にマネージャー層）の観察とインタビューに基づく。誤差や標本数は公開されていない。HBR 記事は「著者と他の専門家の研究」に基づくとしか書いていない [中]

## Hofstede

- 6 次元（Hofstede 2011, Online Readings in Psychology and Culture 2(1), [DOI](https://doi.org/10.9707/2307-0919.1014), [GVSU](https://scholarworks.gvsu.edu/orpc/vol2/iss1/8/)）[強]
- Power Distance：権力の弱い側が、権力の不平等な配分をどこまで受け入れるか [強] ([Simply Psychology](https://www.simplypsychology.org/hofstedes-cultural-dimensions-theory.html))
- Individualism / Collectivism：個人の目標を優先するか、集団の目標を優先するか [強] (同上)
- Masculinity / Femininity：競争と達成を重んじるか、協調と生活の質を重んじるか [強] (同上)
- Uncertainty Avoidance：曖昧さや未知の状況をどこまで許容できるか。「リスク回避」と同じではない [強] (同上)
- Long / Short Term Orientation：将来の報酬を取るか、目先の結果を取るか。1991 年に Chinese Value Survey から追加された [強] (同上, [global-iq](https://global-iq.org/geert-hofstede/))
- Indulgence / Restraint：欲求や楽しみの追求を社会がどこまで許すか。2000 年代に Minkov が World Values Survey を使って追加した [強] ([GVSU](https://scholarworks.gvsu.edu/orpc/vol2/iss1/8/))
- 批判：生態学的誤謬。国レベルの平均の相関は、個人レベルでは成り立たない。国スコアを個人の予測に使うのは誤り（Brewer & Venaik 2014, Organization Studies）[強] ([Sage](https://journals.sagepub.com/doi/10.1177/0170840613517602))。Hofstede 本人も「次元は集計レベルに依存する」「国の値を個人の価値観と混同するな」と書いている [強] ([GVSU](https://scholarworks.gvsu.edu/orpc/vol2/iss1/8/))
- 批判：McSweeney 2002（Human Relations 55(1):89-118）。国民文化が均質だという仮定や、国民文化が行動を因果的に決めるという主張を否定した。一部の国は標本が小さく、主に IBM の営業・サービス職に偏っていたとも指摘している [強] ([Semantic Scholar](https://www.semanticscholar.org/paper/Hofstede%E2%80%99s-Model-of-National-Cultural-Differences-A-McSweeney/61a7b5b4519277e6d750f76940e051cb72a2980e), [Royal Holloway](https://pure.royalholloway.ac.uk/en/publications/hofstedes-identification-of-national-cultural-differences-and-the/))。反論として Williamson 2002 がある [強] ([Sage](https://journals.sagepub.com/doi/10.1177/00187267025511006))
- 批判：IBM の社員だけを標本にしている。1967–73 年に約 11.6 万件（資料によって 53〜72 か国、件数も約 10 万〜11.7 万件と幅がある）。IBM の社風を測っているだけかもしれず、データも古い [強] ([global-iq](https://global-iq.org/geert-hofstede/), [Simply Psychology](https://www.simplypsychology.org/hofstedes-cultural-dimensions-theory.html))
- 批判：国＝文化ではない。Hofstede 枠組みを使った 558 研究のメタ分析で、文化的価値のばらつきの約 80% は国の内部にあった。国よりも職業や社会経済階層で文化を語るほうが適切な場合がある（Taras, Steel & Kirkman 2016, MIR 56(4)）[強] ([Springer](https://link.springer.com/article/10.1007/s11575-016-0283-x))
- 時間による変化：World Values Survey のコホート分析では、1958 年以降に生まれた世代は個人主義と Indulgence が高く、権力格差が低い。ただし国同士の相対的な位置はほとんど変わっていない（Beugelsdijk+ 2015, Global Strategy Journal）[強] ([Wiley](https://sms.onlinelibrary.wiley.com/doi/abs/10.1002/gsj.1098), [RUG PDF](https://pure.rug.nl/ws/files/98242804/Are_scores_on_Hofstede_s_dimensions_of_national_culture_stable.pdf))

## GLOBE

- House ほか編 2004 年『Culture, Leadership, and Organizations: The GLOBE Study of 62 Societies』。62 社会の中間管理職 約 17,000〜17,300 人を対象にした調査で、業種は金融・食品加工・通信の 3 つ [強] ([global-iq](https://global-iq.org/the-globe-study/), [Andrews 書評](https://www.andrews.edu/services/jacl/article_archive/1_1_summer_2006/6_br_globe_(2004).pdf))
- 9 次元：Performance Orientation、Future Orientation、Gender Egalitarianism、Assertiveness、Institutional Collectivism、In-group Collectivism、Power Distance、Humane Orientation、Uncertainty Avoidance [強] (同上)
- Hofstede との最大の違いは、「実際（as is）の慣行」と「あるべき（should be）価値」を別々に測った点（9 次元 × 2 = 18 スコア）[強] ([global-iq](https://global-iq.org/the-globe-study/))
- 限界：多くの次元で慣行と価値が負に相関していて、その解釈が論争になっている。また国平均を使うので、Hofstede と同じ生態学的誤謬の批判がそのまま当てはまる（Brewer & Venaik は Hofstede と GLOBE の両方を対象にしている）[中] ([Sage](https://journals.sagepub.com/doi/10.1177/0170840613517602))

## ソフトウェア工学の実証研究

- Rastogi, Nagappan, Gousios, van der Hoek（ESEM 2018）。PR の多い上位 1% の 1,069 プロジェクトから、17 か国の PR 70,740 件をロジスティック回帰で分析した [強] ([MSR](https://www.microsoft.com/en-us/research/publication/relationship-between-geographical-location-and-evaluation-of-developer-contributions-in-github/), [TU Delft](https://web.archive.org/web/20240415135230/https://repository.tudelft.nl/islandora/object/uuid%3A3b3ad2bd-d865-4a78-b5f0-cdb849d2ee50))
  _訂正 2026-10-27: repository.tudelft.nl がサイトごと応答しなくなったため、TU Delft のリンクを 2024-04-15 の Wayback Machine スナップショットに変えた。タイトルと著者はスナップショットで確認した_
- 同論文の結果その1：採択オッズ（米国=100）はスイス 146、オランダ 130、日本 128、英国 114、カナダ 113。低いほうはスウェーデン 81、ドイツ 78、ブラジル 76、イタリア 73、中国 68。インド 102、ロシア 94 [強]（愛媛大の論文紹介スライドの数値。論文本体とも突き合わせるのが望ましい）([WWS2019 slides](https://se.cite.ehime-u.ac.jp/wws2019/pdf/p10.pdf))
- 同論文の結果その2：投稿者とマージ担当者が同じ国だと採択されやすい。17 か国中 16 か国でそうで、中国 +13.4%、米国 +2.4%、例外のインドは −7.4%。原因はまだ解明されていない [強] ([WWS2019 slides](https://se.cite.ehime-u.ac.jp/wws2019/pdf/p10.pdf))
- Nadri, Rodríguez-Pérez, Nagappan（arXiv 2021）。名前から推定した「見た目上の人種」で比べると、白人と見なされた開発者の PR の採択オッズが 6〜10% 高かった [強] ([arXiv](https://arxiv.org/abs/2104.06143))
- Herbsleb & Mockus（IEEE TSE 2003）。複数拠点にまたがる作業は、同じ拠点での同種作業より約 2.5 倍時間がかかり、主な要因は関わる人数の増加だった。2025 年に著者自身が回顧論文を出し、環境が大きく変わったと述べている [強] ([ACM](https://dl.acm.org/doi/10.1109/TSE.2003.1205177), [Retrospective](https://dl.acm.org/doi/10.1109/TSE.2025.3533977))
- Neumann, Schmid, Baumann（EASE 2024）。日本 2 件・ドイツ 2 件の事例研究で、参加者の文化特性は Hofstede の国スコアから予想される姿と大きく違った。国のラベルをそのままチームに当てはめず、事例ごとに分析すべきだと主張している [強] ([arXiv](https://arxiv.org/abs/2404.17009), [ACM](https://dl.acm.org/doi/abs/10.1145/3661167.3661229))
- Lambiase ほか（arXiv 2024, 188 人, PLS-SEM）。ソフトウェアエンジニアの LLM 採用を決めるのは習慣と期待する性能で、Hofstede の文化的価値による調整効果は有意ではなかった [強] ([arXiv](https://arxiv.org/abs/2409.05055))
- Khosravi & Payberah（arXiv 2026-07, 4 か国 48 人）。ルワンダのシニアは欧州の同僚と同等の成績だったのに、欧州側は東アフリカのエンジニアを系統的に過小評価していた [中] ([arXiv](https://arxiv.org/abs/2607.12563))。同論文のレビューコメント感情スコア（蘭 −0.361、瑞 +0.007、ルワンダ +0.541）は検索要約にあっただけで、本文では未確認 [弱]
- アジャイルと GSD の SLR：Hossain+ 2009 は分散開発では Scrum の修正が必要と結論している。この分野は Hofstede への依存が強いことも指摘されている [中] ([HICSS SLR](https://scholarspace.manoa.hawaii.edu/bitstreams/e1ed1f1e-99db-4c2f-af3e-ddbfdf167031/download), [Springer PROFES 2018](https://link.springer.com/chapter/10.1007/978-3-030-03673-7_22), [arXiv 2311.12061](https://arxiv.org/pdf/2311.12061))
- Borchers（ICSE 2003）は多文化チームについての古典として頻繁に引用される。ただし対象国（日・印・米と記憶している）は確認できていない [弱] ([DOI](https://doi.org/10.1109/ICSE.2003.1201234))
- 空白地帯：GitHub や Gerrit を大規模にマイニングして、国別にコードレビューの語調を比べた研究は見つからなかった [中]

## 統計 (Octoverse / Stack Overflow)

- Octoverse 2025（2025-10-28 公開）：GitHub の開発者は 1.8 億人超。1 年で 3,600 万人増（前年比 +23%）[強] ([GitHub Blog](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/))
- 国別の開発者数：米国 2,800 万、インド 2,190 万、ブラジル 689 万（4 位）、インドネシア 437 万 [強]（同上）。中国 1,070 万、英国 480 万、日本 450 万、ドイツ 440 万、ロシア 416 万、カナダ 346 万は二次資料が Octoverse のグラフから読んだ値 [中] ([Second Talent](https://www.secondtalent.com/resources/countries-with-most-software-developers/))
- 2020→2025 の伸び：インド・ブラジル・インドネシアは 4 倍超、日本・ドイツは 3 倍超、米国・英国・カナダは 2 倍超。インドは 2025 年に 520 万人超増え、新規の 14% 超を占めた [強] ([GitHub Blog](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/))
- 2030 年予測はインド 5,750 万、ブラジル 1,960 万、日本 1,170 万、英国 1,100 万。米国は図では 5,470 万なのに本文では「4,000 万超」と食い違っている [強]（同上）
- Octoverse の限界：国はプロフィールの自己申告所在地で決まり、学生や趣味のアカウントも含む。中国は GitHub 以外（Gitee など）を使う人が多く過小評価されている可能性がある（ここは推論）[中]
- Stack Overflow 2025：国別データは回答の多い上位 5 か国（米・独・英・印・仏）だけ。日本と韓国は個別の集計が無い [強] ([SO 2025 Work](https://survey.stackoverflow.co/2025/work))
  _訂正 2026-10-27: Stack Overflow 2026 (n=30,903) でも働き方の国別タブは米・独・印・英・仏の 5 か国。給与の国別タブは米・独・英・印・加で、フランスが外れカナダが入った ([SO 2026 Work data](https://survey.stackoverflow.co/2026/work/data))_
- フルリモートの割合：米国 45%、英国 31.9%、インド 25.6%、ドイツ 22.5%、フランス 18.1% [強]（同上）
- フル出社の割合はインド 30.5%、米国 16.2%、ドイツ 10.5%。ハイブリッドはドイツとフランスで多い [強]（同上）
- 全体のリモート比率は 2023 年 41% → 2024 年 38% → 2025 年 32.4% と下がっている [中] ([二次: techrecruiting.io](https://techrecruiting.io/en/stack-overflow-developer-survey-2025-usa/))
- Engineering Manager の給与中央値：米国 $200,000、英国 $136,141、ドイツ $118,335、フランス $92,812、インド $52,308 [強] ([SO 2025 Work](https://survey.stackoverflow.co/2025/work))
  _訂正 2026-10-27: Stack Overflow 2026 では米国 $212,500、英国 $136,322、ドイツ $131,356。フランスは給与の国別タブが無く、インドは EM の行が出ていない ([SO 2026 Work data](https://survey.stackoverflow.co/2026/work/data))_
- 労働時間の国別データは SO 2025 に無い [強]（同上）

## ステレオタイプにしないための読み方

- 国の平均より個人差のほうが大きい：文化的価値のばらつきの約 80% は国の内部にある。このリポの国別記述は「その国の誰か」の予測ではなく、比べるための出発点として読む [強] ([Taras+ 2016](https://link.springer.com/article/10.1007/s11575-016-0283-x))
- 国スコアを個人に当てはめるのは生態学的誤謬で、Hofstede 本人も警告している [強] ([Brewer & Venaik 2014](https://journals.sagepub.com/doi/10.1177/0170840613517602), [Hofstede 2011](https://scholarworks.gvsu.edu/orpc/vol2/iss1/8/))
- 会社やチームの文化が国の文化を上回ることがよくある：日独のアジャイルチームの実態は国の典型像と食い違った。コードレビューの採用も組織文化・プロダクト・チームに左右される [中] ([Neumann+ 2024](https://arxiv.org/abs/2404.17009), [MCR SLR](https://arxiv.org/pdf/2103.08777))
- 職業も文化の一種で、「エンジニア文化」が国の差を薄めうる [中] ([Taras+ 2016](https://link.springer.com/article/10.1007/s11575-016-0283-x))
- 世代による変化：若い世代ほど個人主義的で権力格差が低い。ただし国同士の順位はほぼそのままなので、「差は縮んだが、向きは残る」と読む [強] ([Beugelsdijk+ 2015](https://sms.onlinelibrary.wiley.com/doi/abs/10.1002/gsj.1098))
- リモートや非同期の書面コミュニケーションは、表情や口調といった手がかりを消してしまう。そのため「直接的か間接的か」の違いがかえって摩擦になる場合がある [弱] ([Shopify Engineering](https://shopify.engineering/code-reviews-communication))。リモートが文化差を平らにするという実証研究は見つからなかった。「平準化」という言い方は仮説として書くべき [弱]
- 位置は相対的なもの：日本から見ると米国は「直接的」だが、オランダから見ると米国は「婉曲」。誰の視点から見た比較なのかを必ず書く [中] ([HBR 2014](https://hbr.org/2014/05/navigating-the-cultural-minefield))
- 評価バイアスの自覚：PR 採択の国差や同国バイアスは、読み手（レビュアー）側の偏りでもある [強] ([Rastogi+ 2018](https://www.microsoft.com/en-us/research/publication/relationship-between-geographical-location-and-evaluation-of-developer-contributions-in-github/), [Khosravi+ 2026](https://arxiv.org/abs/2607.12563))
- 各記述には信頼度タグ（[強] / [中] / [弱]）と出典年を付け、古いデータ（Hofstede の IBM データは 1967–73 年）を明示する

## Sources

- [Erin Meyer INSEAD deck (tfwa.com PDF)](https://www.tfwa.com/sites/tfwa.com/files/2023-10/Erin%20Meyer.pdf)
- [HBR: Navigating the Cultural Minefield (2014)](https://hbr.org/2014/05/navigating-the-cultural-minefield)
- [Meyer Eight-scale Tool PDF](https://intlacac.memberclicks.net/assets/DiversityInitiative/Eight-scale%20Tool%20for%20Mapping%20Cultural%20Differences%20by%20Erin%20Meyer%20.pdf)
- [Henny Portman review](https://hennyportman.wordpress.com/2018/11/11/review-the-culture-map-decoding-how-people-think-lead-and-get-things-done-across-cultures/)
- [deployyourself review](https://www.deployyourself.com/book-review/the-culture-map-erin-meyer-eight-scales/)
- [kimtasso review](https://kimtasso.com/book-review-the-culture-map-by-erin-meyer-decoding-how-people-think-lead-and-get-things-done-across-cultures-diversity-and-cross-cultural-intelligence/)
- [mind.li study guide](https://mind.li/explore/37057-the-culture-map-by-erin-meyer-study-analysis-guide)
- [Hofstede 2011 (GVSU)](https://scholarworks.gvsu.edu/orpc/vol2/iss1/8/)
- [Simply Psychology: Hofstede](https://www.simplypsychology.org/hofstedes-cultural-dimensions-theory.html)
- [global-iq: Hofstede](https://global-iq.org/geert-hofstede/)
- [McSweeney 2002 (Semantic Scholar)](https://www.semanticscholar.org/paper/Hofstede%E2%80%99s-Model-of-National-Cultural-Differences-A-McSweeney/61a7b5b4519277e6d750f76940e051cb72a2980e)
- [McSweeney (Royal Holloway)](https://pure.royalholloway.ac.uk/en/publications/hofstedes-identification-of-national-cultural-differences-and-the/)
- [Williamson 2002](https://journals.sagepub.com/doi/10.1177/00187267025511006)
- [Brewer & Venaik 2014](https://journals.sagepub.com/doi/10.1177/0170840613517602)
- [Taras, Steel & Kirkman 2016](https://link.springer.com/article/10.1007/s11575-016-0283-x)
- [Beugelsdijk et al. 2015](https://sms.onlinelibrary.wiley.com/doi/abs/10.1002/gsj.1098)
- [Beugelsdijk et al. 2015 (RUG PDF)](https://pure.rug.nl/ws/files/98242804/Are_scores_on_Hofstede_s_dimensions_of_national_culture_stable.pdf)
- [global-iq: GLOBE](https://global-iq.org/the-globe-study/)
- [Andrews University GLOBE review](https://www.andrews.edu/services/jacl/article_archive/1_1_summer_2006/6_br_globe_(2004).pdf)
- [Rastogi et al. 2018 (MSR)](https://www.microsoft.com/en-us/research/publication/relationship-between-geographical-location-and-evaluation-of-developer-contributions-in-github/)
- [Rastogi et al. 2018 (TU Delft)](https://web.archive.org/web/20240415135230/https://repository.tudelft.nl/islandora/object/uuid%3A3b3ad2bd-d865-4a78-b5f0-cdb849d2ee50)
- [WWS2019 Ehime slides](https://se.cite.ehime-u.ac.jp/wws2019/pdf/p10.pdf)
- [Nadri et al. 2021](https://arxiv.org/abs/2104.06143)
- [Herbsleb & Mockus 2003](https://dl.acm.org/doi/10.1109/TSE.2003.1205177)
- [Herbsleb & Mockus Retrospective 2025](https://dl.acm.org/doi/10.1109/TSE.2025.3533977)
- [Neumann et al. 2024 (arXiv)](https://arxiv.org/abs/2404.17009)
- [Neumann et al. 2024 (ACM)](https://dl.acm.org/doi/abs/10.1145/3661167.3661229)
- [Lambiase et al. 2024](https://arxiv.org/abs/2409.05055)
- [Khosravi & Payberah 2026](https://arxiv.org/abs/2607.12563)
- [HICSS SLR: Cultural Influences on Collaborative Work in SE Teams](https://scholarspace.manoa.hawaii.edu/bitstreams/e1ed1f1e-99db-4c2f-af3e-ddbfdf167031/download)
- [GSD: Practices for Cultural Differences (Springer)](https://link.springer.com/chapter/10.1007/978-3-030-03673-7_22)
- [Multicultural Agile Teams (arXiv 2311.12061)](https://arxiv.org/pdf/2311.12061)
- [Modern Code Review SLR (arXiv 2103.08777)](https://arxiv.org/pdf/2103.08777)
- [Borchers 2003 DOI](https://doi.org/10.1109/ICSE.2003.1201234)
- [Shopify Engineering: code reviews & culture](https://shopify.engineering/code-reviews-communication)
- [Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
- [Second Talent (Octoverse 二次集計)](https://www.secondtalent.com/resources/countries-with-most-software-developers/)
- [Stack Overflow 2025 Work](https://survey.stackoverflow.co/2025/work)
- [Stack Overflow Developer Survey 2026: Work data](https://survey.stackoverflow.co/2026/work/data)
- [techrecruiting.io SO 2025 summary](https://techrecruiting.io/en/stack-overflow-developer-survey-2025-usa/)
