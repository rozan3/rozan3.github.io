import Header from "@/components/header"
import ProjectGrid from "@/components/project-grid"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  )
}

