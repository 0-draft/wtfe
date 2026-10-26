# wtfe (Ways They Frame Engineering)

[日本語](README.ja.md)

wtfe describes how software engineers in different countries tend to think and work. It covers seven themes: design and quality, failure and risk, feedback and code review, hierarchy and decisions, communication and documentation, work and careers, and open source. Every claim cites a source and carries a confidence level.

Site: <https://0-draft.github.io/wtfe/> (English) · <https://0-draft.github.io/wtfe/ja/> (日本語)

## Read this first

- The site describes tendencies, not personal traits. Roughly 80% of the variance in cultural values lies within countries, not between them ([Taras, Steel & Kirkman 2016](https://link.springer.com/article/10.1007/s11575-016-0283-x)). Company and team culture often outweigh national culture.
- Positions are relative. The US looks direct from Tokyo and indirect from Amsterdam.
- Each claim carries a usage label. **Well attested**: official statistics, primary documents, large surveys read from the publisher, peer-reviewed quantitative studies, or an organization's own account of its practice. **Attested**: frameworks such as Hofstede and Meyer, single news reports, Wikipedia, industry associations, qualitative studies. **Thin**: blogs, forums, vendor material, summary sites, single anecdotes, kept only when nothing better exists. Sources published before 2016 are marked as dated. The full policy is on the [method page](https://0-draft.github.io/wtfe/method/).

## Coverage

Japan, South Korea, China, India, the United States, the United Kingdom, Germany, France, the Nordics, the Netherlands, Israel, Brazil, Poland and Ukraine. The scale pages add Hofstede's six dimensions (current Culture Factor values) and Erin Meyer's eight Culture Map scales, placed on a deliberately coarse seven-step grid.

## Pages

| Page | What it shows |
| --- | --- |
| [Home](https://0-draft.github.io/wtfe/) | Evidence map: how many claims back each country and theme, and how strong they are |
| [Countries](https://0-draft.github.io/wtfe/countries/) | One page per country: claims by theme, within-country variance, scale positions |
| [Themes](https://0-draft.github.io/wtfe/themes/) | One theme across all countries |
| [Scales](https://0-draft.github.io/wtfe/scales/) | Meyer's 8 scales and Hofstede's 6 dimensions; pick a country to read the scale from (`?from=jp`) |
| [Compare](https://0-draft.github.io/wtfe/compare/) | Any ordered pair: `jp-vs-de` shows Germany as seen from Japan, largest gaps first |
| [Sources](https://0-draft.github.io/wtfe/sources/) | Every cited source once, with the claims that cite it |
| [Method](https://0-draft.github.io/wtfe/method/) | How the claims were collected and rated, and how not to read the site |

Search opens with `/` or Ctrl/⌘-K.

## Repository layout

| Path | What |
| --- | --- |
| `research/` | Raw research notes per country and the methodology review, with every source |
| `src/data/schema.ts` | zod schema for all content |
| `src/data/content/{ja,en}/countries/` | Country content (Japanese original, English translation) |
| `src/data/content/meta/` | Language-independent data: ISO codes, Hofstede scores, Culture Map positions |
| `scripts/validate-data.ts` | Schema, claim ids, EN/JA parity, no Japanese left in English |
| `src/` | Astro site |

## Development

Requires Node 24 and pnpm 12.

```sh
pnpm install
pnpm dev            # http://localhost:4321/wtfe/
pnpm validate:data  # REQUIRE_EN=1 in CI
pnpm lint && pnpm check && pnpm test
pnpm build && pnpm test:e2e
```

## Contributing

Corrections are welcome, especially from engineers who live and work in the countries covered. Open an issue or a pull request with the claim id (e.g. `de-hierarchy-2`) and a source. Claims without a public source are not accepted.

## License

Code: [MIT](LICENSE). Content (text and data): [CC BY 4.0](LICENSE-CONTENT).
