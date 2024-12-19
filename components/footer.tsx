export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-neutral-400">Copyright © 2023. All Rights Reserved</p>
        <p className="flex items-center justify-center gap-1">
          Made with{" "}
          <span className="text-red-500" aria-label="love">
            ♥
          </span>{" "}
          by Rozan
        </p>
      </div>
    </footer>
  )
}

