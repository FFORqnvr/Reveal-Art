import type {
  SubmitFormErrors,
  SubmitFormState,
} from "../types/submit";

export function validateSubmitForm(
  form: SubmitFormState,
): SubmitFormErrors {
  const errors: SubmitFormErrors = {};

  if (!form.title.trim()) {
    errors.title = "Title is required";
  }

  if (!form.description.trim()) {
    errors.description = "Description is required";
  }

  if (!form.artistName.trim()) {
    errors.artistName = "Artist name is required";
  }

  if (!form.artistNickname.trim()) {
    errors.artistNickname = "Artist nickname is required";
  }

  if (!form.category) {
    errors.category = "Category is required";
  }

  if (!form.style) {
    errors.style = "Style is required";
  }

  if (!form.technique) {
    errors.technique = "Technique is required";
  }

  if (!form.image) {
    errors.image = "Image is required";
  }

  return errors;
}