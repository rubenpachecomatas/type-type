import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ThemeSwitch } from "./_components/ThemeSwitch/ThemeSwitch";
import Typer from "./_components/typer/Typer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <ThemeSwitch />
        <section className="flex w-full justify-center">
          <Typer />
        </section>
      </main>
      <Footer />
    </>
  );
}
