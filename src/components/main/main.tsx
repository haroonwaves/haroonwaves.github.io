import Summary from "./summary";
import Work from "./work";
import Projects from "./projects";
import Header from "./header";

export default function Main() {
  return (
    <div className="p-4 mt-8 md:p-8 xl:p-12 xl:mt-0 print:p-0 print:mt-0">
      <header id="header" className="hidden print:block">
        <Header />
      </header>

      <section id="summary" className="mb-16 print:mb-8">
        <Summary />
      </section>

      <section id="work" className="mb-12 print:mb-6">
        <Work />
      </section>

      <section id="projects" className="mb-12 print:mb-6">
        <Projects />
      </section>
    </div>
  );
}
