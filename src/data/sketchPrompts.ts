export type SketchPrompt = {
  title: string;
  image: string;
};

export const sketchPrompts: SketchPrompt[] = [
  {
    title: "",
    image: "/images/process/training-1.png",
  },
  {
    title: "",
    image: "/images/process/training-2.png",
  },
  {
    title: "",
    image: "/images/process/training-3.png",
  },
  {
    title: "",
    image: "/images/process/training-4.png",
  },
];

export const getRandomSketchPrompt = () =>
  sketchPrompts[Math.floor(Math.random() * sketchPrompts.length)];