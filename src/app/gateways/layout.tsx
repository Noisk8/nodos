import NavBar from "../components/Shared/NavBar";
import Header from "../components/Shared/Header";

export default function GatewaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <Header
        parrafo="Monitor de Nodos"
        imageAlt="esta foto"
        imageSrc="https://raw.githubusercontent.com/cypherplatxs/cypherplatxs.github.io/main/public/logo-cypherplatxs-unscreen.gif"
      />
      <NavBar />
      {children}
    </section>
  );
}
