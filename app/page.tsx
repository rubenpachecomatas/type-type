import Header from "./_components/Header";
import { ThemeSwitch } from "./_components/ThemeSwitch/ThemeSwitch";
import Typer from "./_components/typer/Typer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-5 sm:px-14">
      <ThemeSwitch />
      <Header />
      <section className="flex w-full justify-center">
        <Typer />
      </section>
    </main>
  );
}
