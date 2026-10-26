# Brazil

_調査日: 2026-10-25_

_このノートは調査時点の記録。各記述の信頼度（[強]/[中]/[弱]）と数値の最終版は `src/data/content/{ja,en}/countries/` の JSON が正で、校正で変えた数値は `_訂正_` 行で示している。_

Hofstede (Culture Factor 現行値): PDI 69 / IDV 36 / MAS 49 / UAI 76 / LTO 28 / IVR 59 ([source](https://www.theculturefactor.com/country-comparison-tool?countries=brazil))。旧版は IDV 38 / LTO 44 で、旧版の数字と混ぜて引用しないこと。

## Design & quality

- Lua (1993) は PUC-Rio の Tecgraf で、Petrobras 向けの業務から生まれた。1977-92 年の「市場留保」で輸入ソフトが高く入手も面倒だったため、自前で言語を作った (HOPL III, 2007) [強] ([source](https://www.cs.tufts.edu/comp/250RTS/archive/roberto-ierusalimschy/lua-hopl-iii.pdf))
- 品質・仕様に対する国民的な傾向を示す実証研究は見つからなかった。「gambiarra / jeitinho(その場しのぎ)」と結びつけるのはステレオタイプの域を出ない [弱] (信頼できる source は未取得)
- アジャイル導入は、世界的にはトップダウンが多いのに対し、ブラジルでは開発者・チームリーダー主導のボトムアップだったという調査がある (JBCS, 2013 頃、古い) [中] ([source](https://link.springer.com/article/10.1007/s13173-013-0114-x))

## Failure & risk

- UAI 76 で不確実性回避は高め。ただしエンジニアリング組織での失敗やポストモーテムの扱いについての直接的な研究は見当たらない [弱] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=brazil))
- 人材難を自社開発・買収でしのぐ実例がある。Nubank は 2020 年 1 月に Plataformatec (Elixir の母体) を、同年 7 月に Cognitect (Clojure/Datomic) を買収した。買収時点で Clojure 開発者 600 人、500 のマイクロサービスを抱えていた [強] ([source](https://www.finextra.com/newsarticle/36297/nubank-buys-firm-behind-clojure-programming-language), [source](https://clojureverse.org/t/cognitect-joins-nubank/6280))
  _訂正 2026-10-26: Finextra (2020-07-28) で Cognitect 買収と「600 人の Clojure 開発者、500 のマイクロサービス」を確認した。数字の主語を「Cognitect によれば」から「Finextra の報道では」に直した。Plataformatec の 2020 年 1 月の買収は Finextra にも ClojureVerse にも日付がないため、FinTech Global (2020-01-07) を出典に足した_

## Feedback & code review

- 否定的フィードバックは間接的で、温かさで包み、個別に伝える傾向があり、公の場での批判は関係を傷つけるとされる。Meyer を引用しているが、行動面の記述は著者の観察が中心 (Talaera, 2026) [中] ([source](https://www.talaera.com/culture/brazilian-work-culture/))
- Meyer 本人の資料でも、ラテンアメリカは "really indirect parts of the world" とされている [中] ([source](https://erinmeyer.com/wp-content/uploads/2014/05/034_HR_0217_Erin-Meyer1-1.pdf))
- 直接「No」とは言わず、"we can try" や "I'll do my best" が実質的な拒否・懸念のサインになりうる。レビューで遠回しな懸念を見落とさないこと [弱] ([source](https://www.talaera.com/culture/brazilian-work-culture/))

## Hierarchy & decision-making

- PDI 69 で階層的 [強] ([source](https://www.theculturefactor.com/country-comparison-tool?countries=brazil))
- 意思決定はトップダウンで、ジュニアは発言を促されるまで待つ傾向があるとされる。一方で tech スタートアップや多国籍企業はフラットで、伝統的な家族経営や政府系は階層的とされる [中] ([source](https://www.talaera.com/culture/brazilian-work-culture/))
- 反証として、Rio の金融系アジャイル 2 チームを対象にした研究 (SBQS '24) では、高い権力格差の影響は「ほぼ見られない」だった。予備的研究で n は小さい [中] ([source](https://dl.acm.org/doi/10.1145/3701625.3701653))
  _訂正 2026-10-26: ACM DL で本文を確認し、記述を正確にした。対象は英国本社のグローバルコンサルが Rio の大手金融機関向けにモバイルアプリを作る 2 チーム (各 5 人)。影響が「ほぼない」のは組織文化と人的要因についてで、プロセスの実行と改善には高い権力格差が影響している可能性があると書かれている_

## Communication & documentation

- 信頼は関係ベースで (Culture Map で中国・サウジと同じ側)、会議冒頭の雑談も仕事の一部とされる [中] ([source](https://mind.li/explore/37057-the-culture-map-by-erin-meyer-study-analysis-guide))
- 英語で書くときはフォーマル寄りになり、非同期の返信は長く温かい。表情が情報を運ぶので、音声のみより映像通話が推奨される [弱] ([source](https://www.talaera.com/culture/brazilian-work-culture/))

## Work style & careers

- PJ(法人契約、1099 相当)は CLT(雇用契約)より 30-40% 高い報酬で提示されることが多い。ただし PJ と CLT の比率を示す調査値は見つからず、偽装請負 (pejotização) は裁判で雇用と再認定されるリスクがある [中] ([source](https://talenlio.ai/blogs/brazil-tech-salary-guide-2026))
- 2026 年の Código Fonte TV 調査 (n=17,046、自己選択サンプル) では、CLT の平均が +14.4% だったのに対し PJ は +0.7% で頭打ちだった [中] ([source](https://talenlio.ai/blogs/brazil-tech-salary-guide-2026))
- 人材不足は構造的。Brasscom (2021) は 2021-25 年の需要を 79.7 万人、年間の育成を約 5.3 万人と見積もり、年約 10.6 万人の不足とした。データはやや古い [強] ([source](https://brasscom.org.br/estudo-da-brasscom-aponta-demanda-de-797-mil-profissionais-de-tecnologia-ate-2025/))
- 海外企業向けリモートで報酬は約 3 倍になる (現地 $18.4k から $56.3k)。海外雇用主の 70% が米英 (Arc.dev、採用業者のデータでバイアスの可能性あり) [中] ([source](https://arc.dev/talent-blog/remote-software-developer-salary-report-latin-america-2022/))

## OSS & community

- Octoverse 2025 で開発者 689 万人の世界 4 位。2020-25 年で 4 倍以上に増え、OSS コントリビューター数・貢献量はともに世界 3 位。2030 年には 1,960 万人で 3 位と予測されている [強] ([source](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/))
- 成長の一部は学生 (GitHub Education) によるもので、2024 年は前年比 +27%。数字が伸びた分がそのまま熟練度の伸びとは限らない [強] ([source](https://www.infoq.com/news/2024/11/github-octoverse-2024))
- Elixir は José Valim (USP 卒、元 Rails Core) が 2011 年に作り始め、2012 年から Plataformatec が支援した。Valim は現在 Dashbit に所属し、クラクフ在住 [強] ([source](https://osshistory.org/p/elixir), [source](https://github.com/josevalim))

## 一言で

階層的で関係重視、フィードバックは柔らかい。一方で OSS 人口は爆発的に伸びており、Lua と Elixir を生んだ。PJ 契約と海外リモートで、ドル建てで稼ぐ働き方が広がっている。

## 注意点

- 「gambiarra / jeitinho」で開発文化を説明する言説には実証研究が見つからない。ステレオタイプとして扱う。
- フィードバック・コミュニケーションの記述の多くは研修会社 (Talaera) の観察ベースで、定量データではない。
- PJ と CLT の比率、海外企業向けに働く開発者の比率は信頼できる調査値が見つからなかった。

## Sources

- [The Culture Factor — Country comparison tool (Brazil)](https://www.theculturefactor.com/country-comparison-tool?countries=brazil)
- [Lua HOPL III paper](https://www.cs.tufts.edu/comp/250RTS/archive/roberto-ierusalimschy/lua-hopl-iii.pdf)
- [JBCS: agile in Brazil](https://link.springer.com/article/10.1007/s13173-013-0114-x)
- [Finextra: Nubank buys Cognitect](https://www.finextra.com/newsarticle/36297/nubank-buys-firm-behind-clojure-programming-language)
- [ClojureVerse: Cognitect joins Nubank](https://clojureverse.org/t/cognitect-joins-nubank/6280)
- [Talaera: Brazilian work culture](https://www.talaera.com/culture/brazilian-work-culture/)
- [Erin Meyer HR magazine PDF](https://erinmeyer.com/wp-content/uploads/2014/05/034_HR_0217_Erin-Meyer1-1.pdf)
- [SBQS'24 power distance in agile](https://dl.acm.org/doi/10.1145/3701625.3701653)
- [Mindli Culture Map guide](https://mind.li/explore/37057-the-culture-map-by-erin-meyer-study-analysis-guide)
- [Talenlio: Brazil PJ vs CLT 2026](https://talenlio.ai/blogs/brazil-tech-salary-guide-2026)
- [Brasscom 797k study](https://brasscom.org.br/estudo-da-brasscom-aponta-demanda-de-797-mil-profissionais-de-tecnologia-ate-2025/)
- [Arc.dev LatAm remote report](https://arc.dev/talent-blog/remote-software-developer-salary-report-latin-america-2022/)
- [Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
- [InfoQ: Octoverse 2024](https://www.infoq.com/news/2024/11/github-octoverse-2024)
- [OSS History: Elixir](https://osshistory.org/p/elixir)
- [josevalim GitHub](https://github.com/josevalim)
