export type ArtTool = {
  title: string;
  description: string;
  platforms: string[];
};

export const phoneTabletTools: ArtTool[] = [
  {
    title: "Procreate",
    description:
      "Найпопулярніший додаток для iPad. Інтуїтивний інтерфейс, багато пензлів, висока продуктивність.",
    platforms: ["iPad"],
  },
  {
    title: "ibisPaint X",
    description:
      "Потужний безкоштовний додаток з великою бібліотекою пензлів та функцій.",
    platforms: ["Android", "iOS", "Безкоштовно"],
  },
  {
    title: "MediBang Paint",
    description:
      "Безкоштовний додаток з хмарним сховищем та інструментами для коміксів.",
    platforms: ["Android", "iOS", "Безкоштовно"],
  },
  {
    title: "Sketchbook",
    description:
      "Від Autodesk — простий, елегантний додаток для скетчів та ілюстрацій.",
    platforms: ["Android", "iOS", "Безкоштовно"],
  },
  {
    title: "Infinite Painter",
    description:
      "Потужний додаток з реалістичними пензлями та перспективними інструментами.",
    platforms: ["Android"],
  },
  {
    title: "Clip Studio Paint",
    description:
      "Професійний інструмент для ілюстрації, манги, коміксів та анімації.",
    platforms: ["Android", "iOS", "iPad"],
  },
];

export const computerTools: ArtTool[] = [
  {
    title: "Photoshop",
    description:
      "Індустріальний стандарт. Безліч можливостей для цифрового мистецтва, фотомонтажу та дизайну.",
    platforms: ["Windows", "macOS"],
  },
  {
    title: "Clip Studio Paint",
    description:
      "Улюбленець манґак та ілюстраторів. Відмінні інструменти для ліній та коміксів.",
    platforms: ["Windows", "macOS"],
  },
  {
    title: "Krita",
    description:
      "Безкоштовний open-source редактор з професійними можливостями. Ідеальний для початківців.",
    platforms: ["Windows", "macOS", "Linux"],
  },
  {
    title: "SAI",
    description:
      "Легкий та швидкий редактор для аніме-художників. Простий інтерфейс, плавні лінії.",
    platforms: ["Windows"],
  },
  {
    title: "Procreate Dreams",
    description:
      "Анімація від Procreate — для створення рухомих ілюстрацій на iPad.",
    platforms: ["iPad"],
  },
  {
    title: "GIMP",
    description:
      "Безкоштовна альтернатива Photoshop з відкритим кодом та широкими можливостями.",
    platforms: ["Windows", "macOS", "Linux", "Безкоштовно"],
  },
];