import NavBar from "../components/NavBar";
import Header from "../components/Header"


export default function NodosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
   <section className="flex min-h-screen flex-col items-center  p-24">
      <Header
          parrafo="Monitor de Nodos"
          imageAlt="esta foto"
          imageSrc="https://raw.githubusercontent.com/cypherplatxs/cypherplatxs.github.io/main/public/logo-cypherplatxs-unscreen.gif"
        />
 <NavBar />
        {children}      
        </section>
  )
}   