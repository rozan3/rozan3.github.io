import Link from 'next/link'
import Image from 'next/image'

const projects = [
  { 
    id: 'filmyverse', 
    title: "FilmyVerse",
    shortDescription: "Premium online streaming platform",
    image: "/filmyverse-thumbnail.jpg", // Will show the clean, modern FilmyVerse interface
  },
  { 
    id: 'rozanflix', 
    title: "RozanFlix",
    shortDescription: "Versatile multimedia entertainment hub",
    image: "/rozanflix-thumbnail.jpg", // Will show the dark theme with green accents
  }
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Link 
          href={`/projects/${project.id}`} 
          key={project.id}
          className="block group"
        >
          <div className="relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-neutral-900">
            <div className="aspect-[16/9] bg-neutral-800 rounded-t-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-neutral-400 mb-4">{project.shortDescription}</p>
              <span className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                View Project Details
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

