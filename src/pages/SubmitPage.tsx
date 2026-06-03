import PageTitle from "../components/PageTitle";

export default function SubmitPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <PageTitle
        title="Submit Artwork"
        subtitle="Send your artwork for moderation and future publication in the gallery."
      />

      <div className="mt-6 rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        Form will be here
      </div>
    </div>
  );
}