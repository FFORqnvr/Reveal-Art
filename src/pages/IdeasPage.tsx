import PageTitle from "../components/PageTitle";

export default function ExamplePage() {
  return (
    <div>
      <PageTitle title="Ideas Generator" subtitle="Get inspired" />

      <div className="mt-6">
        <div className="p-6 border border-[var(--color-border)] rounded-[14px] bg-[var(--color-surface)]">
          Temporary placeholder content
        </div>
      </div>
    </div>
  );
}