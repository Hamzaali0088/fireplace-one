'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FullContainer from './FullContainer'
import Container from './Container'
import ContactButton from '../Ui/ContactButton'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Locations', href: '#locations' },
  { label: 'Services', href: '#services' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'About', href: '#about' },
  { label: 'Contact Us', href: '#quote' },
]

export default function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    setActiveHash(window.location.hash || '')
  }, [router.asPath])

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  const linkClass = (href) =>
    `transition-colors ${
      activeHash && activeHash === href
        ? 'text-primary'
        : 'text-gray-700 hover:text-primary'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <FullContainer>
        <Container className="!py-0">
          <div className="flex flex-row items-center justify-between py-3">
            <Link href="#home" className="shrink-0" onClick={closeMobile}>
              <Image
                src="/st-images/logo.png"
                width={300}
                height={300}
                alt="Logo"
                className='w-28 h-full md:w-32 md:h-full object-contain'
              />
            </Link>
            <nav className="hidden md:flex flex-row items-center gap-6 lg:gap-8 text-[15px]">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={linkClass(href)}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex flex-row items-center gap-4">
              <div className="">
                <ContactButton variant="primary-small-light" />
              </div>
              <button
                type="button"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                className="md:hidden p-2 -m-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 h-screen transition-opacity duration-200 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
        onClick={closeMobile}
      />
      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-full max-w-[280px] bg-white h-screen shadow-xl transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMobile}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMobile}
                className={`py-3 px-2 rounded-lg transition-colors text-base font-medium hover:bg-gray-50 ${linkClass(href)}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <ContactButton variant="primary-small-light" className="w-full justify-center" />
          </div>
        </div>
      </div>
    </header>
  )
}
