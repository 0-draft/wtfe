import type { Lang } from "../../i18n/ui.ts";
import { formatSigned, formatValue, GEOM, type StripGeometry, type StripKind } from "../../lib/strip.ts";

interface Props {
  geometry: StripGeometry;
  kind: StripKind;
  lang: Lang;
  /** Extra class, used to pick the wide or narrow drawing with a container query. */
  className?: string;
}

/**
 * Draws one strip from precomputed geometry. Used server-side by Strip.astro (no JavaScript shipped) and inside
 * the VantageStrip island. Purely presentational: the figure's text equivalent lives in the surrounding HTML,
 * so the SVG itself is hidden from assistive technology.
 */
export default function StripSvg({ geometry: g, kind, lang, className }: Props) {
  const u = GEOM.unit;
  const fmtGrid = (v: number) =>
    g.mode === "from" || kind === "meyer" ? formatSigned(v, lang) : formatValue(kind, v, lang);
  return (
    <svg
      className={`vs-svg${className ? ` ${className}` : ""}`}
      width={g.width}
      height={g.height}
      viewBox={`0 0 ${g.width} ${g.height}`}
      aria-hidden="true"
      focusable="false"
    >
      {g.grid.map((m) => (
        <line key={`h${m.value}`} className="vs-hair" x1={m.x} x2={m.x} y1={GEOM.top} y2={g.height - 4} />
      ))}
      <line className="vs-axis" x1={g.x0} x2={g.x1} y1={g.axisY} y2={g.axisY} />
      {g.grid.map((m) => (
        <g key={`g${m.value}`}>
          <line className="vs-step" x1={m.x} x2={m.x} y1={g.axisY - 4} y2={g.axisY + 6} />
          <text
            className={`vs-grid${g.mode === "from" && m.value === 0 ? " is-centre" : ""}`}
            x={m.x}
            y={g.gridLabelY}
            textAnchor="middle"
          >
            {fmtGrid(m.value)}
          </text>
        </g>
      ))}
      {g.ticks.map((t) => {
        const tickTop = -u + 19;
        const bottom = t.focus ? t.level * u + 8 : 0;
        return (
          <g
            key={t.id}
            className={`vs-mark${t.focus ? " is-focus" : ""}${t.secondary ? " is-secondary" : ""}`}
            data-id={t.id}
            style={{ transform: `translate(${t.x}px, ${g.axisY - t.level * u}px)` }}
          >
            {t.level > 0 && !t.focus && <line className="vs-guide" x1={0} x2={0} y1={0} y2={t.level * u} />}
            {t.secondary ? (
              <rect className="vs-tick" x={-2.5} y={tickTop + 0.75} width={5} height={bottom - tickTop - 1.5} />
            ) : (
              <rect
                className="vs-tick"
                x={t.focus ? -2.5 : -2}
                y={tickTop}
                width={t.focus ? 5 : 4}
                height={bottom - tickTop}
              />
            )}
            <text className="vs-code" x={t.labelDx} y={-u + 15} textAnchor="middle">
              {t.label}
            </text>
          </g>
        );
      })}
      {g.region && (
        <g className={`vs-region${g.region.focus ? " is-focus" : ""}`} data-id={g.region.id}>
          <g className="vs-move" style={{ transform: `translate(${g.region.labelX}px, ${g.region.labelY}px)` }}>
            <text className="vs-code" x={0} y={0} textAnchor="middle">
              {g.region.label}
            </text>
          </g>
          <g className="vs-move" style={{ transform: `translate(${g.region.x1}px, ${g.region.lineY}px)` }}>
            <rect
              className="vs-span"
              x={g.region.x2 - g.region.x1 < 4 ? -2 : 0}
              y={-2.5}
              width={Math.max(4, g.region.x2 - g.region.x1)}
              height={5}
            />
          </g>
          {g.region.members.map((m) => (
            <g
              key={m.code}
              className="vs-move"
              data-member={m.code}
              style={{ transform: `translate(${m.x}px, ${g.region!.lineY}px)` }}
            >
              <line className="vs-member" x1={0} x2={0} y1={-8} y2={8} />
              <text
                className="vs-code"
                x={m.labelDx}
                y={g.region!.memberLabelY - g.region!.lineY + m.level * GEOM.memberRow}
                textAnchor="middle"
              >
                {m.code}
              </text>
            </g>
          ))}
        </g>
      )}
      {g.centre && (
        <text className="vs-name" x={g.centre.x} y={g.centre.y} textAnchor="middle">
          {g.centre.text}
        </text>
      )}
    </svg>
  );
}
