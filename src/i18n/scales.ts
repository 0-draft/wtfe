import type { CultureMapScale, HofstedeDimension } from "../data/schema.ts";
import type { Lang } from "./ui.ts";

export interface ScaleText {
  name: string;
  /** Pole at negative steps / low scores. */
  left: string;
  /** Pole at positive steps / high scores. */
  right: string;
  /** One sentence on what the scale describes. */
  gloss: string;
}

/** Erin Meyer's eight scales. Poles follow the sign convention in src/data/schema.ts. */
export const cultureMapText: Record<Lang, Record<CultureMapScale, ScaleText>> = {
  en: {
    communicating: {
      name: "Communicating",
      left: "Low-context",
      right: "High-context",
      gloss: "Whether good communication is explicit and literal, or layered and read between the lines.",
    },
    evaluating: {
      name: "Evaluating",
      left: "Direct negative feedback",
      right: "Indirect negative feedback",
      gloss: "How bluntly criticism is delivered.",
    },
    persuading: {
      name: "Persuading",
      left: "Principles-first",
      right: "Applications-first",
      gloss: "Whether an argument starts from theory or from examples and conclusions.",
    },
    leading: {
      name: "Leading",
      left: "Egalitarian",
      right: "Hierarchical",
      gloss: "How much distance is expected between a boss and the team.",
    },
    deciding: {
      name: "Deciding",
      left: "Consensual",
      right: "Top-down",
      gloss: "Whether decisions are reached by group agreement or made by the person in charge.",
    },
    trusting: {
      name: "Trusting",
      left: "Task-based",
      right: "Relationship-based",
      gloss: "Whether trust comes from reliable work or from personal relationships.",
    },
    disagreeing: {
      name: "Disagreeing",
      left: "Confrontational",
      right: "Avoids confrontation",
      gloss: "Whether open disagreement is seen as productive or as damaging to the relationship.",
    },
    scheduling: {
      name: "Scheduling",
      left: "Linear time",
      right: "Flexible time",
      gloss: "Whether plans are fixed and sequential or adapted as things come up.",
    },
  },
  ja: {
    communicating: {
      name: "コミュニケーション",
      left: "低文脈",
      right: "高文脈",
      gloss: "よい伝え方は明示的で文字どおりか、含みがあり行間を読むものか。",
    },
    evaluating: {
      name: "評価",
      left: "直接的な否定的フィードバック",
      right: "間接的な否定的フィードバック",
      gloss: "批判をどれだけ率直に伝えるか。",
    },
    persuading: {
      name: "説得",
      left: "原理優先",
      right: "応用優先",
      gloss: "議論を理論から始めるか、事例や結論から始めるか。",
    },
    leading: {
      name: "リード",
      left: "平等主義",
      right: "階層主義",
      gloss: "上司とチームの間にどれだけ距離があるのが普通か。",
    },
    deciding: {
      name: "決定",
      left: "合意志向",
      right: "トップダウン",
      gloss: "集団の合意で決めるか、責任者が決めるか。",
    },
    trusting: {
      name: "信頼",
      left: "タスクベース",
      right: "関係ベース",
      gloss: "信頼は確かな仕事ぶりから生まれるか、個人的な関係から生まれるか。",
    },
    disagreeing: {
      name: "見解の相違",
      left: "対立型",
      right: "対立回避型",
      gloss: "公然と反論することを生産的と見るか、関係を損なうと見るか。",
    },
    scheduling: {
      name: "スケジューリング",
      left: "直線的な時間",
      right: "柔軟な時間",
      gloss: "予定を固定して順に進めるか、状況に合わせて変えるか。",
    },
  },
};

/** Hofstede's six dimensions with The Culture Factor's current names. Scores run 0-100 (a few exceed 100). */
export const hofstedeText: Record<Lang, Record<HofstedeDimension, ScaleText>> = {
  en: {
    pdi: {
      name: "Power distance",
      left: "Low power distance",
      right: "High power distance",
      gloss: "How far less powerful members accept that power is distributed unequally.",
    },
    idv: {
      name: "Individualism",
      left: "Collectivist",
      right: "Individualist",
      gloss: "Whether people define themselves by personal goals or by the groups they belong to.",
    },
    mas: {
      name: "Motivation towards achievement and success",
      left: "Consensus-oriented",
      right: "Decisive",
      gloss:
        "Formerly masculinity/femininity: whether competition and achievement or care and quality of life drive people.",
    },
    uai: {
      name: "Uncertainty avoidance",
      left: "Tolerant of ambiguity",
      right: "Avoids ambiguity",
      gloss: "How threatened people feel by ambiguous or unknown situations. Not the same as risk avoidance.",
    },
    lto: {
      name: "Long-term orientation",
      left: "Short-term",
      right: "Long-term",
      gloss: "Whether a society favours tradition and quick results or pragmatism and future rewards.",
    },
    ivr: {
      name: "Indulgence",
      left: "Restrained",
      right: "Indulgent",
      gloss: "How freely people may act on their desires and enjoy life.",
    },
  },
  ja: {
    pdi: {
      name: "権力格差",
      left: "権力格差が小さい",
      right: "権力格差が大きい",
      gloss: "力の弱い人が、力の不平等な配分をどこまで受け入れるか。",
    },
    idv: {
      name: "個人主義",
      left: "集団主義",
      right: "個人主義",
      gloss: "自分を個人の目標で捉えるか、属する集団で捉えるか。",
    },
    mas: {
      name: "達成と成功への動機",
      left: "合意志向",
      right: "達成志向",
      gloss: "旧称は男性性／女性性。競争と達成が動機になるか、思いやりと生活の質が動機になるか。",
    },
    uai: {
      name: "不確実性の回避",
      left: "曖昧さに寛容",
      right: "曖昧さを避ける",
      gloss: "曖昧な状況や未知の状況をどれだけ脅威と感じるか。リスク回避とは別の概念。",
    },
    lto: {
      name: "長期志向",
      left: "短期志向",
      right: "長期志向",
      gloss: "伝統と目先の成果を重んじるか、実利と将来の見返りを重んじるか。",
    },
    ivr: {
      name: "人生の楽しみ方",
      left: "抑制的",
      right: "充足的",
      gloss: "欲求に従って人生を楽しむことがどれだけ許されるか。",
    },
  },
};

/** URL slug of a scale page: Meyer scales by name, Hofstede as `hofstede-<dim>`. */
export const scaleSlug = (key: CultureMapScale | HofstedeDimension, kind: "meyer" | "hofstede") =>
  kind === "meyer" ? key : `hofstede-${key}`;
