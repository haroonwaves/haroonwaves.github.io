import Main from "@/components/main/main";
import Side from "@/components/side/side";

export default function Home() {
  return (
    <div className="flex flex-col lg:h-screen lg:flex-row">
      <aside className="border-r border-gray-100 lg:w-1/4 lg:overflow-hidden print:hidden">
        <Side />
      </aside>

      <main className="lg:w-3/4 lg:overflow-y-auto">
        <Main />
      </main>
    </div>
  );
}
