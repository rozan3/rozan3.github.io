"use client"

import { useState, useEffect } from "react"
import { SearchIcon } from 'lucide-react'

interface SearchProps {
  onSearch: (query: string) => void
}

export default function Search({ onSearch }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <SearchIcon className="w-6 h-6" />
      </button>
      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="absolute right-0 top-full mt-2 bg-neutral-800 rounded-lg shadow-lg overflow-hidden"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-64 px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            autoFocus
          />
        </form>
      )}
    </div>
  )
}

