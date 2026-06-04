import { Link } from "react-router-dom";

type AboutCardProps = {
  to: string;
  title: string;
  desc: string;
  image: string;
};

export default function AboutCard({
  to,
  title,
  desc,
  image,
}: AboutCardProps) {
  return (
    <Link
      to={to}
      className="group relative block min-h-[200px] overflow-hidden rounded-2xl border border-[var(--color-primary)]/40 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-[var(--color-primary)]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

     <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-end p-6">
  <h3
    className="text-2xl font-bold !text-white"
    style={{ fontFamily: "var(--font-heading)" }}
  >
    {title}
  </h3>

  <p className="mt-2 text-sm leading-6 !text-[var(--color-text-card)] opacity-90">
    {desc}
  </p>
</div>
    </Link>
  );
}