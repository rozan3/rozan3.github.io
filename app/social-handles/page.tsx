import Header from "@/components/header"
import Footer from "@/components/footer"
import { Youtube, Github } from 'lucide-react'

export default function SocialHandles() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Social Handles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'YouTube', icon: Youtube, handle: 'rozan-dev' },
            { name: 'GitHub', icon: Github, handle: 'rozan3' },
          ].map((social) => (
            <a
              key={social.name}
              href={`https://${social.name.toLowerCase()}.com/${social.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              <social.icon className="w-8 h-8 mr-4" />
              <div>
                <h2 className="text-xl font-semibold">{social.name}</h2>
                <p className="text-gray-400">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

