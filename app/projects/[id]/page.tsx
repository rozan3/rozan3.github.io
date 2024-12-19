import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const projects = {
  filmyverse: { 
    title: "FilmyVerse",
    description: `FilmyVerse.rf.gd is a premium online platform dedicated to providing high-quality streaming of movies and TV shows for free. With its sleek and user-friendly design, FilmyVerse ensures a seamless browsing experience for users of all backgrounds. The platform offers a treasure trove of entertainment, featuring the latest blockbusters, timeless classics, and binge-worthy series from various genres and regions.

    What sets FilmyVerse apart is its commitment to quality and accessibility. Users can stream content in high definition without the hassle of registration, making it incredibly convenient. Multi-language subtitle support further enhances the viewing experience, catering to a global audience.
    
    The platform's vast library includes new releases and beloved classics, ensuring viewers have access to the newest content at all times. From thrilling action movies to lighthearted comedies and engaging TV dramas, FilmyVerse is a one-stop destination for all your streaming needs.`,
    features: [
      "High-quality streaming",
      "No registration required",
      "Multi-language subtitles",
      "Latest releases and classics",
      "User-friendly interface",
      "Daily content updates"
    ],
    image: "/filmyverse-thumbnail.jpg",
    siteUrl: "https://filmyverse.rf.gd",
    sourceUrl: "#",
    screenshots: [
      {
        src: "/filmyverse-screenshot-1.jpg",
        alt: "FilmyVerse homepage showing latest movies"
      },
      {
        src: "/filmyverse-screenshot-2.jpg",
        alt: "FilmyVerse movie details page"
      }
    ]
  },
  rozanflix: { 
    title: "RozanFlix",
    description: `RozanFlix is a versatile online platform hosted on Blogger that caters to entertainment enthusiasts by providing access to a wide array of multimedia content. Specializing in Anime, K-Drama, Bollywood, and Hollywood films, RozanFlix ensures there's something for everyone. The platform is thoughtfully designed, offering an intuitive interface where users can explore the latest movies, popular series, and classic titles with ease.

    One of RozanFlix's standout features is its categorization system, allowing users to quickly navigate through different genres and formats. The platform extends its accessibility by integrating social media channels such as Telegram, YouTube, and Facebook, fostering a strong sense of community.
    
    Whether you're a fan of heartwarming K-Drama, action-packed Anime, or cinematic blockbusters, RozanFlix has you covered, making it an excellent destination for both casual viewers and avid fans.`,
    features: [
      "Wide range of content categories",
      "Anime & K-Drama specialized",
      "Social media integration",
      "User-friendly navigation",
      "Regular content updates",
      "Community features"
    ],
    image: "/rozanflix-thumbnail.jpg",
    siteUrl: "https://rozanflix.blogspot.com",
    sourceUrl: "#",
    screenshots: [
      {
        src: "/rozanflix-screenshot-1.jpg",
        alt: "RozanFlix homepage featuring popular content"
      },
      {
        src: "/rozanflix-screenshot-2.jpg",
        alt: "RozanFlix recommended section"
      }
    ]
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="prose prose-invert max-w-none mb-8">
            {project.description.split('\n').map((paragraph, index) => (
              <p key={index} className="text-neutral-300 mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center text-neutral-300">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={600}
                  height={338}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Site
            </a>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

