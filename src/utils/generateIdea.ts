import { ideaTemplates } from "../data/IdeaOptions";

type GenerateIdeaParams = {
  theme: string;
  object: string;
  mood: string;
  palette: string;
  place: string;
  details: string;
};

export function generateIdea({
  theme,
  object,
  mood,
  palette,
  place,
  details,
}: GenerateIdeaParams): string {
  const template =
    ideaTemplates[Math.floor(Math.random() * ideaTemplates.length)];

  return template
    .replace("{theme}", theme)
    .replace("{object}", object)
    .replace("{mood}", mood)
    .replace("{palette}", palette)
    .replace("{place}", place)
    .replace("{details}", details);
}