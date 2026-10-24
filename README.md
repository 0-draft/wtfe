# wtfe — Ways They Frame Engineering

[日本語](README.ja.md)

How software engineers in different countries tend to think and work: design and quality, failure and risk, feedback and code review, hierarchy and decisions, communication and documentation, work and careers, and open source. Every claim carries a source and a confidence level.

Site: <https://0-draft.github.io/wtfe/> (English) · <https://0-draft.github.io/wtfe/ja/> (日本語)

## Read this first

- These are tendencies, not traits. Roughly 80% of the variance in cultural values lies within countries, not between them ([Taras, Steel & Kirkman 2016](https://link.springer.com/article/10.1007/s11575-016-0283-x)). Company and team culture often outweigh national culture.
- Positions are relative. The US looks direct from Tokyo and indirect from Amsterdam.
- Each claim is tagged **strong** (survey or statistical data), **medium** (several qualitative sources) or **weak** (anecdotal). Weak claims are kept only where they are the best available evidence, and say so.

## Coverage

Japan, South Korea, China, India, United States, United Kingdom, Germany, France, the Nordics, the Netherlands, Israel, Brazil, Poland, Ukraine — plus Hofstede's six dimensions (current Culture Factor values) and Erin Meyer's eight Culture Map scales on a deliberately coarse seven-step grid.

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
