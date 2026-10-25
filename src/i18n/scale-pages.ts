import type { CultureMapScale, HofstedeDimension, ThemeId } from "../data/schema.ts";
import type { Lang } from "./ui.ts";

/** What each scale is built from: the observations (Meyer) or survey items (Hofstede) behind the axis. */
export const builtFrom: Record<Lang, Record<CultureMapScale | HofstedeDimension, string>> = {
  en: {
    communicating:
      "Whether a message is meant to be taken at face value. Meyer looks at how much people repeat and confirm in writing, whether they summarise what was agreed, and how much they expect the listener to read between the lines.",
    evaluating:
      "How negative feedback is worded and where it is given: upgraders such as “absolutely” and “totally” versus downgraders such as “kind of” and “slightly”, and whether criticism is given in front of the group or only one to one. This scale is separate from Communicating: a culture can be high-context and still give blunt criticism.",
    persuading:
      "Whether a convincing argument starts from the concept and theory and then reaches a conclusion (principles-first, deductive), or starts from facts, examples and the conclusion (applications-first, inductive). Meyer notes that East Asian holistic reasoning sits outside this axis, which is why Japan, China and South Korea have no position here.",
    leading:
      "The expected distance between a boss and the team: whether skipping a level to talk to someone is acceptable, whether the boss acts as a facilitator among equals or as a strong director, and how much status shows in seating, titles and who speaks first.",
    deciding:
      "Who makes a decision and how final it is. Consensual cultures take longer to decide and then hold the decision fixed; top-down cultures decide quickly through the person in charge and revise later. It differs from Leading: Japan is hierarchical yet strongly consensual.",
    trusting:
      "Where trust at work comes from: cognitive trust built by reliable, competent work (task-based) or affective trust built over meals, time together and personal connection (relationship-based).",
    disagreeing:
      "Whether open disagreement is good for the team or damages the relationship, and whether disagreeing with an idea is taken as an attack on the person who proposed it.",
    scheduling:
      "Whether deadlines, agendas and plans are fixed and worked through in order (linear time), or treated as a starting point that adapts to people and events (flexible time).",
    pdi: "Originally built from IBM survey items on how often employees are afraid to express disagreement with their managers, and on the decision style they see in, and want from, their boss.",
    idv: "Originally built from IBM work-goal items: how much people value personal time, freedom and challenge in a job, against training, good physical conditions and the use of their skills.",
    mas: "Originally built from IBM work-goal items: earnings, recognition, advancement and challenge, against a good relationship with the manager, cooperation, a pleasant living area and job security. The Culture Factor renamed it from masculinity versus femininity.",
    uai: "Originally built from IBM items on rule orientation (“company rules should not be broken, even when it is in the company's best interest”), intent to stay with the employer, and how often people feel nervous or tense at work.",
    lto: "Added later. It first came from Michael Bond's Chinese Value Survey (thrift, persistence, respect for tradition) and was re-estimated from World Values Survey items by Michael Minkov.",
    ivr: "Added in 2010 from World Values Survey items analysed by Michael Minkov: how happy people say they are, how much control they feel over their own lives, and how important leisure is to them.",
  },
  ja: {
    communicating:
      "メッセージを字義どおりに受け取ってよいかどうか。Meyer は、繰り返しや書面での確認がどれだけ多いか、合意事項を要約して確かめるか、聞き手に行間を読むことをどれだけ求めるかを見ています。",
    evaluating:
      "否定的なフィードバックの言い回しと場所。「絶対に」「まったく」のように強める言葉を使うか、「少し」「やや」のように弱める言葉を使うか。また、皆の前で指摘するか、一対一でしか言わないか。コミュニケーションの尺度とは別物で、高文脈でも批判ははっきり言う文化があります。",
    persuading:
      "説得力のある議論が、概念や理論から始めて結論に至るもの（原理優先・演繹的）か、事実や事例、結論から始めるもの（応用優先・帰納的）か。Meyer は東アジアの全体論的な思考をこの軸の外に置いているため、日本・中国・韓国にはここでの位置がありません。",
    leading:
      "上司とチームの間に想定される距離。階層を飛ばして話してよいか、上司は対等な仲間をまとめる進行役か強い指揮者か、席順や肩書きや発言の順番に地位がどれだけ表れるか。",
    deciding:
      "誰が決め、その決定がどれだけ確定的か。合意志向の文化は決めるまでに時間をかけ、決めたあとは動かしません。トップダウンの文化は責任者がすばやく決め、あとで修正します。リードの尺度とは別物で、日本は階層的でありながら強く合意志向です。",
    trusting:
      "仕事上の信頼がどこから生まれるか。確かな仕事ぶりによる認知的な信頼（タスクベース）か、食事や一緒に過ごす時間、個人的なつながりによる情緒的な信頼（関係ベース）か。",
    disagreeing:
      "公然と反論することがチームのためになるか、関係を損なうか。また、意見への反論が、その意見を出した人への攻撃と受け取られるかどうか。",
    scheduling:
      "締め切りや議題、計画を固定して順に進めるもの（直線的な時間）と捉えるか、人や状況に合わせて変わる出発点（柔軟な時間）と捉えるか。",
    pdi: "もとは IBM の調査項目から作られています。部下が上司への反対意見をどれだけ恐れているか、上司の意思決定スタイルをどう見ているか、どう望んでいるか。",
    idv: "もとは IBM の「仕事の目標」の項目から作られています。私生活の時間、自由、やりがいを重んじるか、研修、良い労働環境、技能を生かせることを重んじるか。",
    mas: "もとは IBM の「仕事の目標」の項目から作られています。収入、評価、昇進、やりがいを重んじるか、上司との良い関係、協力、住みよい環境、雇用の安定を重んじるか。The Culture Factor は旧称「男性性／女性性」から名前を変えています。",
    uai: "もとは IBM の調査項目から作られています。規則の重視（「会社のためになる場合でも、会社の規則は破るべきではない」）、今の勤め先に長くとどまるつもりか、職場で緊張や不安をどれだけ感じるか。",
    lto: "あとから加わった次元です。はじめは Michael Bond の中国的価値観調査（倹約、粘り強さ、伝統の尊重）から作られ、のちに Michael Minkov が世界価値観調査の項目から推定し直しました。",
    ivr: "2010 年に加わった次元で、Michael Minkov が世界価値観調査の項目を分析して作りました。自分が幸せだと答えるか、自分の人生をどれだけ思いどおりにできると感じるか、余暇をどれだけ大切にするか。",
  },
};

/** Themes that a scale speaks to, for cross-links from scale pages (and back from theme pages). */
export const SCALE_THEMES: Record<CultureMapScale | HofstedeDimension, readonly ThemeId[]> = {
  communicating: ["communication"],
  evaluating: ["feedback"],
  persuading: ["design", "communication"],
  leading: ["hierarchy"],
  deciding: ["hierarchy"],
  trusting: ["work", "oss"],
  disagreeing: ["feedback", "hierarchy"],
  scheduling: ["work"],
  pdi: ["hierarchy"],
  idv: ["oss", "work"],
  mas: ["work"],
  uai: ["design", "failure"],
  lto: ["work"],
  ivr: ["work"],
};

/** What each end of a scale means: [left pole, right pole]. Paraphrased from Meyer and Hofstede. */
export const poleNotes: Record<Lang, Record<CultureMapScale | HofstedeDimension, readonly [string, string]>> = {
  en: {
    communicating: [
      "Good communication is precise, simple and explicit. Messages are taken at face value, and repeating and writing things down is welcome.",
      "Good communication is subtle and layered. Messages are often implied rather than stated, and listeners are expected to read between the lines.",
    ],
    evaluating: [
      "Negative feedback is frank and blunt, may be given in front of others, and is strengthened with words like “absolutely”.",
      "Negative feedback is soft and diplomatic, wrapped in positive messages, softened with words like “slightly”, and given only in private.",
    ],
    persuading: [
      "People want the why first: the theory or concept comes before the facts and the conclusion.",
      "People want the what and the how first: facts, examples and the conclusion come first, theory only if needed.",
    ],
    leading: [
      "The ideal distance between boss and team is small. The best boss is a facilitator among equals, and skipping levels is normal.",
      "The ideal distance is large. The best boss is a strong director out in front, status matters, and communication follows the hierarchy.",
    ],
    deciding: [
      "Decisions are made by the group through unanimous agreement. It takes longer, but the decision is then fixed.",
      "Decisions are made by individuals, usually the boss. It is fast, and the decision stays open to change.",
    ],
    trusting: [
      "Trust is built through work: deliver reliably and people trust you. Work relationships are easy to start and to end.",
      "Trust is built over meals, time together and personal connection. Work relationships build slowly and last.",
    ],
    disagreeing: [
      "Disagreement and debate are good for the team. Open confrontation is fine and does not harm the relationship.",
      "Disagreement and debate are bad for the team and the relationship. Open confrontation breaks group harmony.",
    ],
    scheduling: [
      "Work runs in steps, one task at a time, without interruption. Deadlines and the plan come first; organisation beats flexibility.",
      "Work is fluid, many things are handled at once, and interruptions are accepted. Adapting beats sticking to the plan.",
    ],
    pdi: [
      "Power should be spread evenly. People expect to be consulted, and bosses are easy to approach.",
      "Inequality is accepted as the natural order. People expect to be told what to do, and status is visible.",
    ],
    idv: [
      "People belong to in-groups, such as the family or the company, that look after them in return for loyalty. “We” comes before “I”.",
      "People are expected to look after themselves and their immediate family. Personal goals and “I” come first.",
    ],
    mas: [
      "Caring for others and quality of life are the marks of success; standing out from the crowd is not admired.",
      "Competition, achievement and success drive people; winning and being the best are admired.",
    ],
    uai: [
      "Ambiguity is tolerated. Fewer rules are preferred, and what is different is interesting rather than threatening.",
      "Ambiguity is uncomfortable. People want rules, structure and precision, even rules that do not seem to work.",
    ],
    lto: [
      "Traditions and established norms are kept, change is viewed with suspicion, and quick results are expected.",
      "Pragmatic: traditions are adapted to new conditions, people save and invest, and they persevere for future results.",
    ],
    ivr: [
      "Gratification of desires is curbed by strict social norms, and leisure matters less.",
      "People are relatively free to enjoy life and have fun, and leisure matters.",
    ],
  },
  ja: {
    communicating: [
      "よい伝え方は正確で簡潔、明示的なもの。言葉は額面どおりに受け取られ、繰り返しや書面での確認が歓迎される。",
      "よい伝え方は繊細で含みのあるもの。言いたいことははっきり言わずに伝えることが多く、聞き手は行間を読むことを期待される。",
    ],
    evaluating: [
      "否定的なフィードバックは率直かつ単刀直入に伝え、人前でもかまわない。「絶対に」のような強める言葉を添える。",
      "否定的なフィードバックは柔らかく外交的に伝える。肯定的な言葉で包み、「少し」のような弱める言葉を添え、一対一の場でだけ伝える。",
    ],
    persuading: [
      "まず「なぜ」を知りたい。理論や概念を示してから、事実や結論に進む。",
      "まず「何を、どうするか」を知りたい。事実や事例、結論を先に示し、理論は必要なときだけ添える。",
    ],
    leading: [
      "上司とチームの距離は小さいのがよい。理想の上司は対等な仲間をまとめる進行役で、階層を飛ばしてやりとりするのも普通。",
      "上司とチームの距離は大きいのがよい。理想の上司は先頭に立つ強い指揮者で、地位が重んじられ、やりとりは階層に沿う。",
    ],
    deciding: [
      "決定はグループが全員の合意で行う。時間はかかるが、決めたあとは動かない。",
      "決定は個人、たいていは上司が行う。速いが、決めたあとも変更されうる。",
    ],
    trusting: [
      "信頼は仕事を通じて築かれる。確かな仕事を続ければ信頼される。仕事上の関係は始めるのも終えるのも容易。",
      "信頼は食事や一緒に過ごす時間、個人的なつながりから築かれる。仕事上の関係はゆっくり育ち、長く続く。",
    ],
    disagreeing: [
      "反論や議論はチームのためになる。公然と対立してもかまわず、それで関係が損なわれることはない。",
      "反論や議論はチームにも関係にも悪い影響を与える。公然と対立すると集団の調和が崩れる。",
    ],
    scheduling: [
      "仕事は段階を追って一つずつ、中断なく進める。締め切りと計画が優先され、柔軟さより段取りが評価される。",
      "仕事の進め方は流動的で、多くのことを同時にこなし、中断も受け入れる。計画を守るより状況に合わせることが評価される。",
    ],
    pdi: [
      "権力は平等に分かれているべきもの。部下は相談されることを期待し、上司には話しかけやすい。",
      "不平等は自然な秩序として受け入れられる。部下は指示されることを期待し、地位がはっきり表に出る。",
    ],
    idv: [
      "人は家族や会社などの内集団に属し、忠誠と引き換えに守られる。「私」より「私たち」が先に来る。",
      "人は自分と身近な家族の面倒を自分で見ることを期待される。個人の目標と「私」が先に来る。",
    ],
    mas: [
      "他者への思いやりと生活の質が成功の証とされ、人より目立つことはあまり評価されない。",
      "競争、達成、成功が動機になり、勝つことや一番になることが評価される。",
    ],
    uai: [
      "曖昧さに寛容。規則は少ないほうがよいとされ、異質なものは脅威ではなく興味の対象になる。",
      "曖昧さは落ち着かない。規則や構造、正確さが求められ、うまく機能しそうにない規則でさえ欲しがられる。",
    ],
    lto: [
      "伝統や既存の規範を守り、変化には疑いの目を向け、すぐに成果が出ることを期待する。",
      "実利的。状況が変われば伝統も合わせて変え、倹約と投資を重んじ、将来の成果のために粘り強く取り組む。",
    ],
    ivr: [
      "欲求を満たすことは厳しい社会規範で抑えられ、余暇はあまり重視されない。",
      "人生を楽しむことが比較的自由に許され、余暇が重視される。",
    ],
  },
};
