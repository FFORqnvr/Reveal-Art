type SuccessMessageProps = {
  isVisible: boolean;
};

export default function SuccessMessage({
  isVisible,
}: SuccessMessageProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
      Роботу успішно надіслано на розгляд. Він з'явиться в галереї після затвердження.
    </div>
  );
}