# Design research and direction

_Researched: 2026-10-25. Screenshots (desktop 1280px, mobile 412px) are in `/private/tmp/claude-501/-Users-takumaniwa-wtfe/1670987c-ac36-4cc4-b2de-06b57750fd19/scratchpad/design/`, named `NN-site-desktop.png` / `NN-site-mobile.png`. They are not committed._

## Summary

- Concept: **"Usage, not character" / 性格ではなく用法.** wtfe is typeset like a bilingual usage dictionary. A dictionary describes how a community uses words: with frequency labels, regional variants, dated citations and cross-references, and with no claim that every speaker talks the same way. That is the epistemic stance wtfe needs: claims are attested usage, confidence is a usage label, sources are citations.
- Signature figure: the **vantage strip** (視点ストリップ). Every scale is read _from somewhere_. Pick the country you work from and the strip re-centres on it; every other country becomes "more direct than you" / "less direct than you". This is Erin Meyer's "cultural relativity" turned into an interaction, and it is the strongest visual guard against reading a position as a fixed trait.
- Confidence is encoded **without hue**: rule weight (solid thick / solid thin / dashed) plus a lexicographic label ("well attested / attested / thin"; 【裏付け十分】【裏付けあり】【裏付け薄】). The interim green/amber/red traffic light goes.
- Two inks only, like a Japanese two-colour learner's dictionary (2色刷り): ink black plus 朱 (vermilion) for "the country you are looking at". A second hue, 藍 (indigo), appears only in the compare view for the other country.
- Type: LINE Seed JP 800 for headwords (country and theme names), IBM Plex Sans JP for body in both languages, IBM Plex Mono only for codes, years and numbers. Measured reason below: LINE Seed JP has proportional digits and no `tnum`, so it cannot carry numbers.

## References

Each subsection: URL, what it does for comparing countries on many dimensions, the interaction pattern, type and colour, and what to avoid. "Seen" means I loaded the page in a browser at both widths unless stated.

### 1. Hofstede country comparison tool (The Culture Factor)

- URL: <https://www.theculturefactor.com/country-comparison-tool?countries=germany%2Cjapan>
- Good: the selection lives in the URL (`?countries=germany,japan`), so comparisons are shareable. Each dimension has a per-country paragraph under the chart. A boilerplate paragraph says "culture does not imply that everyone in a given society is programmed in the same way".
- Pattern: grouped vertical bars, one colour per country (orange, grey), 6 dimension groups. Click a dimension label to switch the description panel.
- Type/colour: Barlow-like grotesk, orange brand accent, grey second country. Note that the 5th dimension is now labelled "Motivation towards Achievement and Success" (the renamed MAS), so wtfe's labels should follow the current name and note the old one.
- Avoid: no legend near the bars, so you only learn which colour is which from the paragraphs below. Point scores with no spread, shown as tall bars from zero, read as "Japan has 95 of something". On mobile (412px) the six groups squeeze into unreadable 10px labels. Commercial-use notice sits above the chart.

### 2. Erin Meyer, Country Mapping Tool

- URL: <https://erinmeyer.com/tools/culture-map-premium/> (tool itself is paywalled; I looked at the public preview image `tool01.png`)
- Good: the eight scales are drawn as horizontal tracks with the pole words at each end, and countries are dots with a 2-letter code inside. Comparison is purely positional.
- Pattern: parallel tracks, one dot per country per track, dots of the same country joined by a polyline across tracks.
- Type/colour: Playfair Display headings, aubergine brand, red/orange/yellow country dots.
- Avoid: the polyline joining unrelated scales implies a continuous "profile shape" that does not exist. Dots sit on top of the pole labels and hide them. Red/orange/yellow are hard to tell apart and fail for protanopes.

### 3. Our World in Data grapher

- URL: <https://ourworldindata.org/grapher/life-expectancy?tab=discrete-bar&country=JPN~DEU~USA~IND~BRA~KOR~FRA~GBR~ISR~POL>
- Good: best-in-class provenance block under every chart: data source, unit, date range, last updated, next expected update, named maintainer, licence. Country picker list shows the value as a faint bar behind each row, so the picker is itself a chart. Selection is in the URL (`country=JPN~DEU`).
- Pattern: Table / Map / Line / Bar tabs over the same data; sticky side picker on desktop; on mobile the picker collapses into an "Edit countries" button and the tabs into icons.
- Type/colour: Playfair Display headings, Lato body, one muted blue for all bars (hue is not wasted on country identity in a single-variable bar).
- Avoid: the Map tab as default for every dataset (choropleth-for-everything). Cookie banner covers a third of the mobile viewport.

### 4. Stack Overflow Developer Survey 2025

- URL: <https://survey.stackoverflow.co/2025/work>
- Good: every chart shows the exact question wording ("Which of the following best describes your current employment status?") and the response count ("Responses: 48,178 (98.3%)"). Country filter tabs (USA, Germany, India, UK, France) swap the same chart, and the URL hash records the choice.
- Pattern: text card left, dark chart card right; section titles with a dotted leader to a section number ("Employment ........ 4.1").
- Type/colour: Roboto Slab headings, system UI body, a single bright blue on a dark panel, hard offset shadows.
- Avoid: only the top 5 responding countries are filterable, which silently drops Japan and Korea. Bar labels are truncated ("Independent contra") at 412px. The hard-shadow card look is now a template.

### 5. GitHub Octoverse 2025

- URL: <https://octoverse.github.com/> and the report at <https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/>
- Good: the rank table has a "five-year trend" column with rank-change pills ("+1 spot", "Steady #1"), which is a compact way to show movement.
- Pattern: hero stat cards (21.9M developers in India), raster infographic tables, sticky table of contents.
- Type/colour: Mona Sans heavy expanded headline, purple-green blurred gradient with sparkles.
- Avoid: exactly the AI-template look the owner bans (gradient glow, sparkles, giant stat cards). The country tables are PNGs: unreadable at 412px, not selectable, not translatable. Country attribution is self-reported profile location, which wtfe's methodology already flags.

### 6. The Pudding, "How do animals sound across languages?"

- URL: <https://pudding.cool/2025/03/language/>
- Good: small multiples of the same item across 21 languages, each with the **native script above** and the English language name below in small caps. No flags anywhere; languages are named in words. The grid reflows from 7 columns (desktop) to 3 (mobile) with nothing lost.
- Pattern: small multiples, colour-coded phone groups with a legend top-right, audio buttons.
- Type/colour: IBM Plex Serif title with a Plex Sans Bold word on a yellow highlighter block; pastel phoneme colours.
- Avoid: nine pastel categorical colours are beyond what anyone can map back to the legend.

### 7. Rest of World

- URL: <https://restofworld.org/>
- Good: the logotype puts diacritics on every letter, a visual statement that the default (English, unaccented) is not the only norm. Coverage is tech outside the West, i.e. close to wtfe's audience.
- Pattern: classic news front with kicker / headline / dek / byline.
- Type/colour: Moderat headlines, Georgia body, Input Mono kickers in electric blue `#242EF7`.
- Avoid: mono kickers plus electric blue is becoming a "tech journalism" cliché; do not copy.

### 8. FT Visual Vocabulary

- URL: <https://ft-interactive.github.io/visual-vocabulary/> (desktop only; it is a reference poster, not a layout to copy)
- Good: picks chart type by relationship. Two categories matter for wtfe: **Deviation** ("emphasise variations from a fixed reference point ... can also be a target or a long-term average") and **Distribution**. The vantage strip is a deviation chart whose reference point the reader chooses.
- Avoid: the page is a d3 SPA that sometimes renders blank until clicked.

### 9. Reuters Graphics and NYT Upshot (index pages only)

- URLs: <https://www.reuters.com/graphics/>, <https://www.nytimes.com/section/upshot>
- Only the index pages loaded (paywall/bot walls). The relevant lesson is from the Upshot's 2016 election "needle", which jittered within the 25th-75th percentile of simulations so that a single value would not imply certainty. Readers called it the most stressful thing online; researchers later defended it as honest but noted readers did not know what drove each movement ([Visualising Data](https://visualisingdata.com/2016/11/gauging-election-reaction/), [Fast Company](https://www.fastcompany.com/90459366/the-most-hated-data-visualization-in-politics-is-back-to-spike-your-blood-pressure), [Judgment and Decision Making](https://www.cambridge.org/core/journals/judgment-and-decision-making/article/information-incentives-and-goals-in-election-forecasts/CDED59D35F6599BF9D31348A79B196F9)).
- Lesson: show uncertainty statically and explain it in words. No animated jitter.

### 10. OECD Better Life Index (now inside the Well-being Data Monitor)

- URL: <https://www.oecd.org/en/data/tools/well-being-data-monitor/better-life-index.html>, embedded app <https://wise-oecd.github.io/wise-better-life-index/>
- Finding: `oecdbetterlifeindex.org` now redirects to the OECD Well-being Data Monitor (launched November 2025). The flower chart survives in a re-implementation hosted on GitHub Pages.
- Good: the ranking is **the reader's weighting**. Eleven sliders (0-10 importance) re-sort the flowers. There is no official "best country", which is exactly the posture wtfe needs for "which culture is better for engineers".
- Pattern: weight sliders + glyph per country on a stem whose height is the weighted score.
- Avoid: on mobile the flowers overlap, the chart overflows sideways and the sliders fall below the fold. Each flower is a 11-petal glyph nobody can read without hovering. Rotated country names.

### 11. Gapminder Dollar Street

- URL: <https://www.gapminder.org/dollar-street>
- Good: its page title is literally "photos as data to kill country stereotypes". Homes are sorted by **income**, not by country, so a $10k/month Ukrainian family sits next to rich families elsewhere. Country becomes a caption, not the axis.
- Pattern: sentence-shaped controls ("Families in The World by income per month"), with each noun a dropdown. Wraps naturally on mobile.
- Lesson for wtfe: where data allows, order by the variable that actually explains the difference (company type, sector, size), and let country be a label. The Japan data already says SIers and web firms differ sharply.

### 12. World Happiness Report dashboard and report

- URL: <https://data.worldhappiness.report/table>, report chapter <https://www.worldhappiness.report/ed/2025/caring-and-sharing-global-analysis-of-happiness-and-kindness/>
- Good (report): Figure 2.1 shows a 95% confidence whisker on each country's score, and prints a **rank range** in brackets (for example "2-4") instead of pretending a single rank is exact. That is the cleanest uncertainty device I found for ranked countries.
- Bad (dashboard): the table drops the intervals and shows single ranks with flag icons and colour-banded column groups. Line chart has no bands. At 412px the table does not render at all, only the tab menu.
- Lesson: if wtfe ever ranks anything, print the range, not the rank.

### 13. Pew Research Center, global attitudes charts

- URL: <https://www.pewresearch.org/short-reads/2025/09/22/opinions-of-the-eu-remain-mostly-favorable-across-25-countries/>
- Good: the best country chart in this survey. Diverging bars (unfavourable left, favourable right) around a centre line; the italic subtitle quotes the measure ("% who have a(n) ___ opinion of the European Union"); countries grouped (EU members / non-members) with a median row at the bottom; a note says what is not shown ("Those who did not answer are not shown"); source line.
- Colour: navy versus olive, not red versus green, so neither side reads as "bad", and it survives colour-blindness.
- Mobile: the chart is designed at about 320px wide, so at 412px it is identical to desktop. Design narrow first.

### 14. Atlas of Economic Complexity (Harvard Growth Lab)

- URL: <https://atlas.hks.harvard.edu/countries/392>
- Good: the country name is the page's search box, so switching country is the heading itself. The intro paragraph is generated from the data ("Japan is a high-income country, ranking as the 29th richest economy per capita out of 145"), with "29th of 145" next to each big number and a small sparkline.
- Avoid: plexus network background and a rotating globe; at 412px the page sat on "Loading..." for more than 10 seconds. A static site must never do that.

### 15. State of JS 2024 (Devographics), Japanese locale

- URL: <https://2024.stateofjs.com/ja-JP/demographics/>
- Good: each row shows its respondent count (person icon + 874); the question is printed above the chart; on mobile the label sits on its own line above the bar instead of being truncated.
- Avoid: IBM Plex Mono for everything, including Japanese headings and body, on a dark pink-accented UI. The ja-JP locale translates headings and nav but leaves body copy in English, which looks broken. Mobile rows are 110px tall for one bar, so 14 countries need four screens.

### 16. levels.fyi

- URL: <https://www.levels.fyi/t/software-engineer/locations/greater-tokyo-area>
- Good: median plus 25th / 75th / 90th percentiles, the sample size ("based on 369 salaries"), "Updated" date, and a histogram with median/75th/90th flags. The median is shown as one marker on a spread.
- Avoid: inconsistent localisation in one row (`¥8,422,814` next to `¥667.25万`), rotated tick labels on mobile, the visitor was silently geo-redirected to `/ja-jp/` which 404'd. wtfe should never auto-redirect by locale.

### 17. roadmap.sh

- URL: <https://roadmap.sh/backend>
- Good: the legend marks the **epistemic status of each node** ("Personal Recommendation / Opinion", "Alternative Option", "Order not strict") with small badges on the node. That is the same job as wtfe's confidence tags.
- Avoid: on mobile the whole SVG is scaled down to fit, text at about 5px. Dense diagrams must reflow, not shrink.

### 18. Information is Beautiful, "Colours in Cultures"

- URL: <https://informationisbeautiful.net/visualizations/colours-in-cultures/> (static PNG, desktop only)
- Cautionary reference. A radial matrix of 10 "cultures" by 84 meanings. The cultures mix incompatible granularity ("Western / American", "Japanese", "Asian", "Native American", "African", "South American"). Each cell is a single colour with no frequency or confidence, sourced to "Pantone, ColorMatters & web sources". The reader decodes letters A-J and numbers 1-84 through a separate legend.
- Lesson: pick one level of unit and say so (wtfe's "Nordics" and "Poland/Ukraine" need an explicit note), never assert a cell without a source, and keep labels on the marks.

### 19. Kontinentalist, "What's in an Asian name?"

- URL: <https://kontinentalist.com/stories/how-asian-names-work>
- Good: a taxonomy tree of naming types; clicking a node opens a side panel with explanation, an example name with the relevant part highlighted, and "learn more" tags. Prev/Next steppers on the edges. Index cards run headline and dek on one line (bold title, grey dek).
- Avoid: hand-drawn type and cream paper with orange (close to the banned cream + terracotta). On mobile the Material icon font failed and printed the ligature text "expand_less" on the page; the logo image was broken. Do not depend on icon fonts.

### 20. デジタル庁デザインシステム (Digital Agency Design System), typography

- URL: <https://design.digital.go.jp/dads/foundations/typography/>
- Measured on the page: Noto Sans JP 45px/63px headings, body 17px / 28.9px (line-height 1.7) with 0.02em tracking. The guide says body and UI text must be 16 CSS px or more, 14px only for footers and cramped UI, below 14px "not allowed in principle"; body line-height at least 1.5, headings about 1.4. Fonts: Noto Sans JP + Noto Sans Mono.
- Lesson: these are the floor for wtfe's Japanese pages. No 12px chart labels.

### 21. Wikipedia comparison tables

- URL: <https://en.wikipedia.org/wiki/Comparison_of_programming_languages>
- Good: sortable headers; every cell can carry its own footnote citation (`Yes[2]`); words ("Yes", "No") repeat what the cell colour says.
- Avoid: pure green / pink cells (red-green); on mobile the table scrolls sideways with neither the first column nor the header sticky, so you lose which row and column you are on.

### 22. Bartosz Ciechanowski, "Bicycle"

- URL: <https://ciechanow.ski/bicycle/>
- Good: the **prose is the legend**. The word "force" is printed in the same red as the force arrow and the slider. Every figure has one control and one idea. IBM Plex Sans body at 19px / 1.6 on `#F8F8F8`.
- Lesson: in wtfe, the name of the focus country in running text is set in 朱 and the compare country in 藍, so the paragraph keys the chart.

### 23. Stripe Press

- URL: <https://press.stripe.com/>
- Observation: in a headless browser without GPU the WebGL bookshelf did not render at either width; the page showed only the logo on a dark background. Beautiful book typography elsewhere, but a cautionary example: no content may depend on WebGL or JavaScript.

### 24. Nikkei Visual Data (日経ビジュアルデータ)

- URL: <https://vdata.nikkei.com/>, story <https://vdata.nikkei.com/newsgraphics/pisa2025/> (paywalled after the first screen)
- Good: Japanese body at 20.25px with 40px line-height (almost 2.0), system Hiragino stack. The PISA piece uses subject tabs (科学 / 読解力 / 数学) and a rank grid with Japan's cell highlighted, the standard Japanese newspaper way to show "where are we".
- Lesson: Japanese long-form needs more leading than English (1.8-2.0 versus 1.6). Set line-height per `:lang()`.

### 25. World Values Survey, Inglehart-Welzel Cultural Map 2023

- URL: <https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=Findings>
- Good: the page also shows the factor-loading table, i.e. **which survey questions make up each axis**. wtfe should do the same for every Hofstede and Meyer scale: "this axis is built from these questions / observations".
- Avoid: hand-drawn "cultural zone" blobs labelled "Confucian", "African-Islamic", "Protestant Europe". Drawing a boundary around countries asserts discrete civilisational types; the points have no uncertainty; it is a static image unusable on a phone.

### 26. 3ie Evidence Gap Maps

- URL: <https://gapmaps.3ieimpact.org/evidence-maps/youth-transferable-skills-evidence-gap-map>, guide <https://www.3ieimpact.org/sites/default/files/2024-03/how-to-read-egm-document-Feb2024.pdf>
- Good: a matrix of interventions by outcomes where bubble size is the number of studies and colour is review confidence. **Empty cells are shown as gaps**, and "N/A" is distinguished from "no evidence". Clicking a cell lists the studies. This is the right genre for wtfe's 14 countries by 7 themes: it is an evidence map, not a scorecard.
- Avoid: rotated column headers; on mobile the row labels take two thirds of the width and only three columns are visible.

### 27. Supporting research (not a site to copy)

- Taras, Steel & Kirkman 2016: about 80% of variation in cultural values is within countries ([Springer](https://link.springer.com/article/10.1007/s11575-016-0283-x)). Already in `research/frameworks.md`. This number drives the whole direction: a country is a tendency inside a wide spread, so the design must never draw a country as a point that "is" somewhere.
- TokyoDev Developer Survey 2025 ([results](https://2025.surveys.tokyodev.com/en-US)) runs on the same Devographics platform as State of JS, so the same patterns and pitfalls apply.

## Patterns worth stealing

| Pattern | Seen at | How wtfe uses it |
| --- | --- | --- |
| Selection encoded in the URL | Hofstede, OWID, SO Survey | `/compare/jp-vs-de/`, `?from=jp` on scale pages |
| Provenance block per figure (source, date range, updated, maintainer) | OWID | Under every figure: sources, years, "data read from Meyer slides, position approximate" |
| Question wording and n printed with the chart | SO Survey, State of JS, Pew | Each scale shows its pole definitions and what it is built from |
| Diverging bars around a centre, non-judgemental hues | Pew | Vantage strip in "from" mode |
| Rank ranges instead of ranks | World Happiness Report | Never print a rank; if ordering is shown, print ties as ties |
| User-chosen weighting, no official winner | OECD BLI | No "best culture for engineers" anywhere; the vantage is the reader's choice |
| Sort by the explaining variable, country as caption | Dollar Street | Within-country variance notes (SIer vs web) sit next to the country claim |
| Native script above, English below, no flags | The Pudding | Country headword: 日本 / Japan, ISO code, never a flag |
| Epistemic badge on each item | roadmap.sh, 3ie | Confidence rule + label on every claim |
| Empty cells shown as gaps | 3ie EGM | Evidence map shows where wtfe knows little |
| Prose keyed to the chart by colour | Ciechanowski | Focus country name in 朱, compare country in 藍 in running text |
| Name-as-picker | Atlas | Compare page title "Japan vs Germany" where each name is a select |
| Label above bar on narrow screens | State of JS | Mobile strips put the country code above its mark when crowded |
| Show what the axis is made of | WVS | Every scale page lists the defining questions or observations |

## Anti-patterns seen

- Point scores drawn as bars from zero (Hofstede tool): length implies "amount of culture". Use position on a line.
- Lines connecting a country's dots across unrelated scales (Meyer tool): invents a profile shape.
- Discrete zones drawn around countries (WVS map): essentialism by geometry.
- Mixed granularity of units (IIB "Western / American" next to "Japanese"): be explicit about region rows.
- Flags as identifiers (WHR dashboard): flags are national symbols, hard to tell apart at 16px, and they make the page look like a sports table.
- Raster infographics (Octoverse): unreadable on mobile, untranslatable.
- Scaling a dense diagram down to fit (roadmap.sh, OECD BLI on mobile): reflow or switch form.
- Horizontal scroll tables without sticky row and column headers (Wikipedia, 3ie on mobile).
- Rotated text for labels (OECD BLI, 3ie, levels.fyi ticks).
- Traffic-light colours for confidence or for poles (Wikipedia yes/no cells, wtfe's interim CSS): red reads as "bad country".
- Half-translated locale (State of JS ja-JP), number formats switching inside one row (levels.fyi), auto locale redirect (levels.fyi).
- Animated uncertainty (NYT needle), WebGL- or JS-only content (Stripe Press, Atlas "Loading..."), icon fonts (Kontinentalist "expand_less").
- Template looks: gradient glow and sparkles (Octoverse), hard-shadow cards (SO Survey), mono everywhere on dark (State of JS).

## Direction

### Concept: "Usage, not character" (性格ではなく用法)

wtfe reads like a **bilingual usage dictionary of engineering work norms**. Lexicography gives a complete, honest vocabulary for exactly what the site does:

| Dictionary device | wtfe meaning |
| --- | --- |
| Headword with reading | Country or region: "日本 / Japan · JP" |
| Usage label (frequency, register) | Confidence: well attested / attested / thin |
| "Dated" label | Source year older than a threshold (proposal: before 2016) |
| Dated citation quotations | Sources with year and link, per claim |
| Usage note "compare ..." | Cross-reference to another country's claim on the same theme |
| Regional variants | `variance` field: SIer vs web, Seoul chaebol vs startups |
| Descriptive, not prescriptive | Methodology: we record observed patterns, we do not say how anyone is |
| Thumb index (爪掛け) on the fore-edge | Country index on the right edge of the page |
| Running head (柱) | Sticky "Japan · Feedback & code review" while scrolling |

Why this and not a map or a scorecard: a map makes countries regions of colour, a scorecard makes them winners and losers. A dictionary makes them **speech communities with tendencies and exceptions**, which is what the Taras result (80% of variance within countries) says they are. It is also a genre native to both audiences: English learners' dictionaries and Japanese 英和・国語辞典 share the same conventions (bold gothic headwords, 【】 labels, second-colour emphasis).

Distinct from the sibling project's engineering-drawing set: no title blocks, no grid paper, no dimension lines, no technical-pen strokes. The identity here is typographic (headwords, labels, citations, thumb index) plus one kind of chart (the strip).

### Information architecture and URLs

English at `/`, Japanese at `/ja/` with identical paths. Trailing slashes, lowercase, existing ids from `src/data/schema.ts`.

| Page | EN URL | JA URL | Content |
| --- | --- | --- | --- |
| Home | `/` | `/ja/` | One-paragraph premise, evidence map (14 by 7), vantage strip teaser for one scale, entry to compare |
| Countries index | `/countries/` | `/ja/countries/` | 14 headwords with one-liners, sorted alphabetically per language (五十音 in JA) |
| Country | `/countries/jp/` | `/ja/countries/jp/` | Headword, intro, regional variants first, 7 theme sections with claims, Meyer and Hofstede strips with this country in 朱 |
| Themes index | `/themes/` | `/ja/themes/` | 7 themes with a definition each |
| Theme | `/themes/feedback/` | `/ja/themes/feedback/` | All countries' claims on one theme, grouped by country, plus the Meyer scales that relate (feedback: Evaluating, Disagreeing) |
| Scales index | `/scales/` | `/ja/scales/` | 8 Meyer + 6 Hofstede strips, all countries, no focus |
| Scale | `/scales/evaluating/`, `/scales/hofstede-pdi/` | `/ja/scales/...` | One strip large, pole definitions, what the scale is built from, vantage control (`?from=jp`) |
| Compare | `/compare/jp-vs-de/` | `/ja/compare/jp-vs-de/` | Gap ruler, claims side by side per theme; order is meaningful: first is "from", second is "to" |
| Method | `/method/` | `/ja/method/` | How not to stereotype, frameworks and their critiques, confidence definitions |
| Sources | `/sources/` | `/ja/sources/` | Every source once, with year, which claims cite it, filter by country and confidence |

- Compare pages: generate all 182 ordered pairs (14 by 13). `jp-vs-de` reads "Germany as seen from Japan"; `de-vs-jp` is the mirror and links to it with a "swap" control. Both are static.
- Claim anchors: `/countries/jp/#jp-feedback-2` using the existing stable claim ids, identical in both languages so a JA link and an EN link point at the same claim.
- Language switch keeps the path and the hash. No automatic locale redirect.

### Signature figures

#### A. Vantage strip (視点ストリップ)

One horizontal line per scale, poles written in words at both ends ("Direct negative feedback" ... "Indirect negative feedback"). Every country is a short vertical tick with its code above it. Two modes:

1. **Spread mode (default, static HTML):** all 14 ticks on the 7-step grid. The focus country (country page) is a taller tick in 朱 with its name; others are ink-3 ticks. Ticks sharing a step stack vertically, never overlap. Countries with no source on this scale are listed under the strip as "No source: Israel, Ukraine" instead of being placed.
2. **From mode (React island, `?from=jp`):** the line re-centres on the chosen country. Every other country becomes a signed bar from the centre: "2 steps more direct than Japan". The centre is labelled "you (Japan)". Same data, but the reader now sees what Meyer means by relativity: from Japan, China looks direct; from the Netherlands, China looks indirect.

Honesty rules: Meyer positions are drawn on the coarse 7-step grid the data actually has (−3..+3), never interpolated. A `secondary` basis is drawn as a hollow tick with "†". Region rows (Nordics) are drawn as a span covering the member countries' steps with each member tick labelled (DK, SE, FI, NO), which is a real range from data rather than an invented error bar.

Hofstede strips use the same component on a 0-100 line (values above 100 allowed by the schema extend the line with a note). Each Hofstede tick is a point score; the strip carries a fixed caption: "Country averages. About 80% of variation in values is between people inside a country (Taras et al. 2016)." No fabricated distributions.

Mobile: the strip is full width (about 380px usable); 7 steps at about 50px each fit; stacked codes keep 14px text. From mode turns into a vertical list of signed bars sorted by distance, which is Pew's narrow-first layout.

#### B. Gap ruler (compare view)

For `/compare/jp-vs-de/`, the 8 Meyer scales are listed **sorted by gap size**, largest first, under the heading "Where you will notice the difference". Each row is a mini strip with Japan as a filled 朱 dot and Germany as a hollow 藍 ring, a bracket between them, and a sentence: "Germany gives negative feedback more directly (3 steps)". Rows with a gap of 0 move to a "Where you are close" group. Rows where either country has no source go to "No source" with no marks. Below the ruler, the 7 themes show both countries' claims side by side on desktop (two columns, JA headwords aligned) and stacked with a sticky country label on mobile.

#### C. Evidence map (home)

A 14 by 7 grid, countries as rows, themes as columns. Each cell shows its claims as short horizontal rules stacked top to bottom: one thick solid rule per well-attested claim, one thin solid per attested, one dashed per thin. Cell height is fixed, so the reader sees evidence weight at a glance, and a cell with only dashed rules looks thin because it is. Hover or tap opens the list of claims for that cell. It is explicitly an evidence map ("how much we know"), never coloured by any cultural score.

Mobile: 7 columns at 44px fit in 412px with a 72px row header of codes (JP, KR ...). Column headers are 2-character Japanese (設計, 失敗, 指摘, 階層, 伝達, 働方, OSS) or 3-letter English codes (DES, FAIL, REV, HIER, COMM, WORK, OSS) in a sticky header; tapping a header shows the full theme name in the running head. Row and column headers both sticky. No rotated text.

#### D. Claim entry (the atomic unit)

```text
│ In IPA's DX White Paper 2021, 19.3% of Japanese companies used agile ...
│ WELL ATTESTED · 1 source · 2021
│   @IT, "Japan lags the US in DX" (2021) ↗
│ → compare: United States, design
```

The left rule is the confidence mark (thick solid / thin solid / dashed). The label line repeats it in words. In Japanese the label is 【裏付け十分】【裏付けあり】【裏付け薄】. Sources older than the threshold get a "dated" / 【古い資料】 label in ink-2.

### Typography

| Role | Family | Weight | Size / line-height | Notes |
| --- | --- | --- | --- | --- |
| Headword (country, theme, page title) | LINE Seed JP | 800 | 44px / 1.2 (mobile 34px) | `palt` on for Japanese; tracking 0 |
| Section heading | LINE Seed JP | 700 | 24px / 1.35 | |
| Subheading | IBM Plex Sans JP | 700 | 20px / 1.4 | |
| Body EN | IBM Plex Sans JP | 400 | 17px / 1.6 | `:lang(en)` |
| Body JA | IBM Plex Sans JP | 400 | 17px / 1.85 | `:lang(ja)`, no `palt` in body |
| Usage label, running head | IBM Plex Sans JP | 600 | 14px / 1.4 | EN uppercase with 0.06em tracking; JA in 【】 without tracking |
| Codes, years, numbers, chart ticks | IBM Plex Mono | 400 / 500 | 14px | Tabular by design |
| Caption, provenance block | IBM Plex Sans JP | 400 | 15px / 1.6 | Never below 14px (DADS floor) |

Scale steps: 14 / 15 / 17 / 20 / 24 / 34 / 44. Measure: `max-inline-size: 40rem` for body in both languages, which gives about 70 Latin characters or about 38 Japanese characters per line.

Why this pairing, measured on the actual font files (`@fontsource` packages, fontTools):

- LINE Seed JP ships 100 / 400 / 700 / 800 only, and its digits are **proportional** (advances 466 to 725 units) with no `tnum` feature in either the Latin or Japanese subset. Numbers in tables and chart ticks would jitter. It stays where the owner liked it: big headwords, where its round, friendly gothic gives the site a voice.
- IBM Plex Sans JP digits are **tabular by default** (all 630 units), it has weights 100-700, `palt` for headings, and it is drawn to match IBM Plex Mono, so body text and data text share proportions. One family covers EN and JA body, so mixed-language sentences ("IPA の DX 白書 2021") do not switch fonts mid-line.
- BIZ UDPGothic was considered for accessibility, but it has only 400 / 700 and proportional digits. Noto Sans JP is the safe default (DADS uses it) but it is the most common Japanese web font and gives no identity.
- Mincho is not used anywhere (owner found Mincho headings hard to read; dictionaries' gothic headwords are the better reference anyway).
- All three are OFL and on `@fontsource`, split into about 120 unicode-range chunks, so a page only downloads the glyphs it uses. Self-host; do not call Google Fonts at runtime.

### Palette

Hue carries meaning only: 朱 = the country you are looking at, 藍 = the other country in a comparison. Everything else is ink on paper. Confidence and poles are not coloured by hue.

| Token | Light | Dark | Use | Contrast on paper (light / dark) |
| --- | --- | --- | --- | --- |
| `--paper` | `#F5F6F6` | `#111315` | Page ground (cool, not cream) | - |
| `--raised` | `#FFFFFF` | `#191C1F` | Popovers, sticky headers | - |
| `--ink` | `#16191D` | `#E8EAEC` | Text, focus marks, strong rule | 16.3 / 15.4 |
| `--ink-2` | `#4A5159` | `#B0B7BE` | Secondary text, medium rule | 7.4 / 9.2 |
| `--ink-3` | `#5C646D` | `#949CA4` | Tick labels, non-focus country ticks, thin (dashed) rule | 5.5 / 6.7 |
| `--axis` | `#7A828A` | `#6E777F` | Chart baselines and step marks (non-text, needs 3:1) | 3.6 / 4.1 |
| `--rule` | `#D3D7DA` | `#2C3136` | Decorative hairlines only, never meaning | 1.3 / 1.4 |
| `--shu` 朱 | `#B5341A` | `#FF7E61` | Focus country mark and name, focus ring, current thumb-index tab | 5.6 / 7.5 |
| `--ai` 藍 | `#2D4A97` | `#9CB1F0` | Compare country (hollow ring), its name in text | 7.6 / 8.8 |
| `--wash-left` | `#E6EBF2` | `#1B2330` | Optional background of the left half of a strip | ink 14.7 / 13.1 |
| `--wash-right` | `#F2EAE4` | `#2B211C` | Optional background of the right half of a strip | ink 14.8 / 13.0 |
| `--selected` | `#FCEBE6` | `#3A1F19` | Selected row in evidence map | ink 15.3 / 12.5 |

Checks (WCAG 2.x relative luminance, computed): every text token is at least 4.5:1 on `--paper`, `--raised`, both washes and `--selected` in both themes (lowest: `--ink-3` 5.0 and `--shu` 5.05 on `--wash-left` in light). `--axis` is at least 3:1 on all grounds (lowest 3.25 light, 3.32 dark). 朱 versus 藍 under simulated colour-vision deficiency (Machado 2009 matrices, CIELAB ΔE): light 97 normal / 97 deutan / 79 protan / 99 tritan; dark 82 / 78 / 64 / 83, so they stay distinct. They also differ in shape (filled dot versus hollow ring), so colour is never the only cue.

Confidence tokens (no hue):

| Level | Rule | Label EN | Label JA |
| --- | --- | --- | --- |
| strong | 3px solid `--ink` | WELL ATTESTED | 【裏付け十分】 |
| medium | 1.5px solid `--ink-2` | ATTESTED | 【裏付けあり】 |
| weak | 1.5px dashed `--ink-3` (4px dash, 3px gap) | THIN | 【裏付け薄】 |

Scale poles: position and words carry the pole; the washes are optional, low-chroma (contrast with paper about 1.1), and the two washes are blue-grey versus warm-grey, not two "team" colours.

Dark mode: follow `prefers-color-scheme` and allow a manual toggle stored in `localStorage`, set as `data-theme` on `html`.

### Chart rules

- Charts are inline SVG rendered at build time in Astro; React islands only add interaction (vantage, compare swap, evidence-map popover). Everything readable with JavaScript off.
- Position on a common line, never bar length from zero, for culture scores.
- Meyer: 7 discrete steps, no interpolation, primary versus secondary basis shown (solid versus hollow tick with †), "no source" listed in text, not placed.
- Hofstede: 0-100 line, point ticks, fixed variance caption, current dimension names with old names in the method page.
- Regions draw a span from member data, labelled per member.
- Labels on the marks (country codes), legend only for mark shape. No colour legend needed because there are two hues and the prose names them.
- Every figure has a provenance line: source, year, basis, "position approximate" where true, and a link to the scale page.
- Every figure has a text equivalent: a visually hidden `<table>` or a `<figcaption>` sentence listing positions ("Evaluating: JP −3, KR −2 ... NL +3").
- Minimum text size in figures 14px. No rotated text. Touch targets 44px.
- No maps. No flags. No radar charts (they invent area). No rankings; where order is shown, equal steps are shown as ties.
- Number formatting through `Intl.NumberFormat` per locale, never mixed in a row.

### Motion

- Default is no motion. The only animations: the vantage re-centre (ticks slide to their new offsets, 200ms, `ease-out`) and the evidence-map popover (opacity 120ms).
- Under `prefers-reduced-motion: reduce`, both become instant.
- No scroll-triggered reveals, no fade-up on sections, no parallax, no jitter, no animated counters, no hover lift.
- Focus: 2px 朱 outline with 2px offset on every interactive element; visible in both themes.

### Avoid list

- Inter or system UI as the brand face; Mincho headings.
- Purple-blue gradients, glass, glow, blur, sparkles, noise textures.
- Three icon cards, `rounded-2xl` plus shadow cards, hard offset shadows.
- Lucide or any icon set, icon fonts, emoji, flag emoji or flag images.
- Fake terminal hero, mono everything, cream plus terracotta, black plus acid green.
- Decorative 01 / 02 / 03 numbering (functional claim ids in small mono are fine).
- Choropleth maps, globes, radar or flower glyphs, network/plexus backgrounds.
- Traffic-light colours for confidence; any colour that implies a pole or a country is good or bad.
- Bars from zero for culture scores; lines joining a country across scales; drawn cultural zones.
- Rank numbers; "best country for engineers" framings.
- Raster text, WebGL, content that needs JavaScript, auto locale redirects, half-translated pages.
- Fade-up on scroll, animated jitter, counters.

## Open questions

1. Display code for the UK: `UK` is what readers expect, the data id and ISO code are `gb`. Proposal: show `UK`, keep `/countries/gb/`.
2. Code for the Nordics row on the thumb index and in strips: `NORD` (4 letters) or `N4`? Strips need a short label; the span shows DK / SE / FI / NO anyway.
3. Should Poland and Ukraine stay separate rows (schema has `pl` and `ua`) while Meyer data for Ukraine is entirely missing? The strip would list Ukraine under "No source" on all 8 scales.
4. "Dated" threshold for sources: 10 years (before 2016) or relative to the newest source for that country?
5. Compare pages: all 182 ordered pairs, or 91 unordered pairs with a client-side "from" toggle? Ordered pairs are better for sharing a specific viewpoint and cost only build time.
6. Should the vantage default to the reader's language (`/ja/` defaults `from=jp`)? Proposal: no default vantage, because assuming a Japanese-language reader works in Japan is itself a stereotype; offer it as the first suggestion.
7. GLOBE "as is" practice scores could give a second instrument on the same strip (Hofstede PDI versus GLOBE Power Distance), so disagreement between instruments becomes a visible, honest range. Worth adding to the data model?
8. LINE Seed JP 800 headwords in English: its Latin is wide and geometric; check "Netherlands" and "United Kingdom" at 34px on a 412px screen before committing.
