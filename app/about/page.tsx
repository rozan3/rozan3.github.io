import Header from "@/components/header"
import Footer from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="space-y-4 text-neutral-300">
            <p>
              Hello, I am Rojan Subedi, also known as Rozan, a passionate web developer and digital creator from Nepal. My journey into the fascinating world of coding and web development began at the age of 8 when I was introduced to Blogger. This opened up a realm of possibilities, and I started creating websites, even though I was just beginning to understand the basics. Growing up in a city with limited technological resources posed challenges, but my curiosity and determination kept me moving forward.
            </p>
            <p>
              After taking a one-year break, I returned to web development at the age of 9, learning HTML, CSS, and JavaScript. My first creation was a simple tic-tac-toe game. Although it wasn't perfect, it marked the start of my journey into coding and fueled my passion for developing better projects.
            </p>
            <p>
              By the time I was 10, I was in grade 7 and had the opportunity to formally learn HTML, CSS, and JavaScript in school. This solid foundation reignited my dream of creating websites. With little knowledge of APIs or PHP scripts, I ventured into building my own movie website. Turning to YouTube for guidance, I honed my skills and mastered platforms like Blogger and WordPress.
            </p>
            <p>
              Over the years, I've developed numerous websites. Two of my most notable creations are RozanFlix, a Blogger-based platform, and FilmyVerse, built using WordPress. These projects reflect my creativity and growth as a developer, and they have helped me gain recognition for my work.
            </p>
            <p>
              Today, I continue to explore new technologies and expand my skill set. This portfolio website is a testament to my progress, showcasing my dedication and passion for web development. My journey has been one of self-learning, perseverance, and an unrelenting desire to innovate.
            </p>
            <p>
              Thank you for visiting my portfolio and taking the time to learn about my story!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

