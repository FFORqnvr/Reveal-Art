type AdminMessageProps = {
  message: string | null;
};

export default function AdminMessage({
  message,
}: AdminMessageProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700 sm:p-4 sm:text-base">
      {message}
    </div>
  );
}