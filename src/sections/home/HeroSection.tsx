import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[940px]">
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl items-center px-4 pt-[280px] md:px-1">
        <div className="max-w-xl border-l border-[var(--color-primary)] pl-8">
          <h1 className="font-[var(--font-heading)] text-70px font-bold leading-tight text-[var(--color-text-primary)] md:text-70px">
            Вітаємо у світі<br/>цифрової творчості
          </h1>

          <p className="mt-8 text-lg leading-8 text-[var(--color-text-primary)] md:text-xl">
            Шлях від першого штриха до шедевра не буває легким, але він завжди
            прекрасний. Ми зібрали для вас есенцію знань, щоб ваш творчий
            вогонь горів яскравіше, а рука була впевненішою.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/tools">
              <Button>Інструменти</Button>
            </Link>

            <Link to="/ideas">
              <Button>Генератор ідей</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}