"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import Search from "./search"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact me", href: "mailto:rozansubedi25@gmail.com?subject=Some%20business%20enquiries%20&body=I%20wanna%20talk%20to%20you." },
    { name: "Social Handles", href: "/social-handles" },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // You can implement the actual search logic here
    console.log("Searching for:", query)
  }

  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold tracking-wider">ROZAN</Link>
        <div className="flex items-center gap-4">
          <Search onSearch={handleSearch} />
          <button
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[72px] left-0 right-0 bg-neutral-900/95 backdrop-blur-sm z-50"
          >
            <ul className="container mx-auto py-4 px-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name === "Contact me" ? (
                    <a
                      href={item.href}
                      className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-300 text-lg hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-300 text-lg hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

