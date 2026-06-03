import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Select from "../components/Select";
import PageTitle from "../components/PageTitle";

export default function HomePage() {
  return (
    <div className="py-8">
      <Card>
        <PageTitle
  title="Reveal Art"
  subtitle="Демонстрационная арт-платформа для дипломного проекта"
/>

        <p className="mt-4">
          Демонстрационная арт-платформа для дипломного проекта.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button>Основная кнопка</Button>

          <Button variant="secondary">
            Вторичная кнопка
          </Button>

          <Button disabled>
            Disabled
          </Button>
        </div>

        <div className="mt-6">
          <Input placeholder="Введите имя художника..." />
        </div>
        <div className="mt-6">
  <Textarea placeholder="Описание работы..." />
</div>
<div className="mt-6">
  <Select defaultValue="">
    <option value="" disabled>
      Выберите категорию
    </option>

    <option value="digital">
      Digital Art
    </option>

    <option value="concept">
      Concept Art
    </option>

    <option value="illustration">
      Illustration
    </option>
  </Select>
</div>
      </Card>
    </div>
  );
}