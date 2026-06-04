export type SketchPrompt = {
  title: string;
  image: string;
};

export const sketchPrompts: SketchPrompt[] = [
  {
    title: "Рука художника",
    image: "/images/process/sketch-hand.png",
  },
  {
    title: "Силует людини",
    image: "/images/process/sketch-person.png",
  },
  {
    title: "Квітка",
    image: "/images/process/sketch-flower.png",
  },
  {
    title: "Старе дерево",
    image: "/images/process/sketch-tree.png",
  },
  {
    title: "Чашка на столі",
    image: "/images/process/sketch-cup.png",
  },
];

export const getRandomSketchPrompt = () =>
  sketchPrompts[Math.floor(Math.random() * sketchPrompts.length)];