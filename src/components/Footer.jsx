import React from 'react'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  return (
    <footer
      className="relative py-12 px-4 bg-card border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Footer Content */}
      <div className="relative z-10 w-full flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} WalterMatsinhe.co, All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
