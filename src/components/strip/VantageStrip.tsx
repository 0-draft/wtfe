import { useEffect, useId, useMemo, useState } from "react";
import { COUNTRY_IDS, type CountryId } from "../../data/schema.ts";
import type { ScaleText } from "../../i18n/scales.ts";
import { stripText } from "../../i18n/strip.ts";
import type { Lang } from "../../i18n/ui.ts";
import {
  formatSigned,
  layoutStrip,
  MEYER_RANGE,
  offsetSentence,
  offsetsFrom,
  parseVantage,
  type StripItem,
  type StripKey,
  scaleKind,
  sentenceName,
  spreadDomain,
} from "../../lib/strip.ts";
import StripSvg from "./StripSvg.tsx";

interface Props {
  lang: Lang;
  scale: StripKey;
  text: ScaleText;
  items: StripItem[];
  names: Record<CountryId, string>;
  /** id of the static spread-mode figure, hidden while a vantage is chosen. */
  staticId: string;
  size?: "normal" | "large";
}

/**
 * From mode of the vantage strip: pick a country (or open the page with `?from=jp`) and the line re-centres on
 * it. Without JavaScript nothing renders here and the static spread-mode strip stays.
 */
export default function VantageStrip({ lang, scale, text, items, names, staticId, size = "normal" }: Props) {
  const t = stripText[lang];
  const kind = scaleKind(scale);
  const uid = useId();
  const [mounted, setMounted] = useState(false);
  const [vantage, setVantage] = useState<CountryId | undefined>(undefined);
  const [live, setLive] = useState("");

  useEffect(() => {
    setMounted(true);
    const v = parseVantage(new URLSearchParams(location.search).get("from"));
    if (v) setVantage(v);
  }, []);

  const view = useMemo(() => (vantage ? offsetsFrom(items, vantage) : null), [items, vantage]);

  useEffect(() => {
    if (!mounted) return;
    const el = document.getElementById(staticId);
    if (el) el.hidden = view !== null;
  }, [mounted, view, staticId]);

  function choose(raw: string) {
    const v = parseVantage(raw);
    setVantage(v);
    const u = new URL(location.href);
    if (v) u.searchParams.set("from", v);
    else u.searchParams.delete("from");
    history.replaceState(history.state, "", u);
    setLive(v ? t["vantage.live"](names[v]) : t["vantage.liveNone"]);
  }

  if (!mounted) return null;

  const valueById = new Map(items.map((i) => [i.id, i.value]));
  const vName = vantage ? sentenceName(lang, vantage, names[vantage]) : "";
  const youLabel = vantage ? t["vantage.you"](names[vantage]) : "";
  const geometry = view
    ? layoutStrip(kind, items, { width: size === "large" ? 1040 : 760, vantage, centreLabel: youLabel })
    : null;
  const maxDelta = kind === "meyer" ? 2 * MEYER_RANGE : spreadDomain(kind, items).hi;
  const sep = lang === "ja" ? "、" : ", ";

  return (
    <div className="vs-vantage">
      <div className="vs-picker">
        <label htmlFor={`${uid}-from`}>{t["vantage.label"]}</label>
        <select id={`${uid}-from`} value={view ? vantage : ""} onChange={(e) => choose(e.currentTarget.value)}>
          <option value="">{t["vantage.none"]}</option>
          {COUNTRY_IDS.map((id) => {
            const none = valueById.get(id) === null || valueById.get(id) === undefined;
            return (
              <option key={id} value={id} disabled={none}>
                {names[id]}
                {none ? ` (${t["vantage.noData"]})` : ""}
              </option>
            );
          })}
        </select>
      </div>
      <p className="vs-hint">{t["vantage.hint"]}</p>
      <p className="sr-only" aria-live="polite">
        {live}
      </p>
      {vantage && !view && (
        <p className="notice" role="status">
          {t["vantage.missing"](names[vantage])}
        </p>
      )}
      {view && geometry && (
        <figure className="vs-fig vs-from" data-size={size} data-vantage={vantage}>
          <div className="vs-body">
            <div className="vs-poles">
              <span>← {text.left}</span>
              <span>{text.right} →</span>
            </div>
            <div className="vs-draw">
              <StripSvg geometry={geometry} kind={kind} lang={lang} className="is-wide" />
            </div>
          </div>
          <ul className="vs-list" aria-label={t["vantage.listLabel"](names[view.vantage.id])}>
            <li className="vs-row is-you">
              <span className="vs-row-name">
                {youLabel}
                <span className="mono">{view.vantage.code}</span>
              </span>
              <span className="vs-bar" aria-hidden="true" />
            </li>
            {view.rows.map((r) => {
              const w = (Math.abs(r.delta) / maxDelta) * 50;
              const left = r.delta < 0 ? 50 - w : 50;
              const members =
                r.members.length > 0
                  ? `${lang === "ja" ? "（" : " ("}${r.members.map((m) => `${m.code} ${formatSigned(m.delta, lang)}`).join(sep)}${lang === "ja" ? "）" : ")"}`
                  : "";
              return (
                <li key={r.id} className="vs-row" data-id={r.id}>
                  <span className="vs-row-name">
                    {names[r.id]}
                    <span className="mono">
                      {r.code}
                      {r.secondary ? "†" : ""}
                    </span>
                  </span>
                  <span className="vs-bar" aria-hidden="true">
                    {r.delta !== 0 && (
                      <span
                        className={r.secondary ? "is-secondary" : undefined}
                        style={{ left: `${left}%`, width: `${Math.max(w, 1)}%` }}
                      />
                    )}
                  </span>
                  <span className="vs-row-text">
                    {offsetSentence(lang, scale, r.delta, vName)}
                    {members}
                  </span>
                </li>
              );
            })}
          </ul>
          <figcaption className="vs-cap">
            {view.noSource.length > 0 && (
              <p className="vs-nosrc">
                {t["strip.noSource"]}
                {lang === "ja" ? "：" : ": "}
                {view.noSource.map((id) => names[id]).join(sep)}
              </p>
            )}
            {items.some((i) => i.secondary && i.value !== null) && <p>{t["strip.secondary"]}</p>}
            {kind === "hofstede" && <p>{t["strip.taras"]}</p>}
            <p>{kind === "meyer" ? t["strip.provMeyer"] : t["strip.provHofstede"]}</p>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
