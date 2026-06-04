export type SubmitFormState = {
  title: string;
  description: string;
  artistName: string;
  artistNickname: string;
  category: string;
  style: string;
  technique: string;
  image: File | null;
};

export type SubmitFormErrors = Partial<
  Record<keyof SubmitFormState, string>
>;