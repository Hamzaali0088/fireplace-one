'use client'

import React, { useState, useEffect } from 'react'
import FullContainer from '@/components/common/FullContainer'
import Container from '@/components/common/Container'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    name: 'Lina Doe',
    avatar: 'https://ui-avatars.com/api/?name=Lina+Doe&size=96&background=e8e8e8&color=374151',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    name: 'Mr. John Doe',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&size=96&background=e8e8e8&color=374151',
  },
  {
    quote:
      'Professional service from start to finish. They explained everything clearly and left our chimney in great shape.',
    name: 'Sarah M.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+M&size=96&background=e8e8e8&color=374151',
  },
  {
    quote:
      'Fast, thorough, and fair pricing. We use them every year and recommend to all our neighbors.',
    name: 'James K.',
    avatar: 'https://ui-avatars.com/api/?name=James+K&size=96&background=e8e8e8&color=374151',
  },
]

function TestimonialCard({ item }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center shadow-sm h-full min-h-[320px] md:min-h-[340px]">
      <div className="flex items-center gap-0.5 mb-4">
        {[...Array(5)].map((_, j) => (
          <Star
            key={j}
            className="w-5 h-5 fill-amber-400 text-amber-400"
            strokeWidth={0}
          />
        ))}
      </div>
      <p className="text-gray-600 text-base lg:text-lg italic leading-relaxed mb-6 flex-1">
        &ldquo;{item.quote}&rdquo;
      </p>
      <img
        src={item.avatar}
        alt={item.name}
        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-gray-100 mb-3"
      />
      <p className="text-gray-900 font-bold">{item.name}</p>
      <p className="text-sky-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
        Clients
      </p>
    </div>
  )
}

export default function Testimonial() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMd, setIsMd] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsMd(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const perPage = isMd ? 2 : 1
  const totalPages = Math.ceil(testimonials.length / perPage)
  const maxPage = Math.max(0, totalPages - 1)
  const safePage = Math.min(currentPage, maxPage)

  useEffect(() => {
    setCurrentPage((p) => Math.min(p, maxPage))
  }, [maxPage])

  const goPrev = () => setCurrentPage((p) => Math.max(0, p - 1))
  const goNext = () => setCurrentPage((p) => Math.min(maxPage, p + 1))

  return (
    <FullContainer className="bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-medium text-gray-900">
            Our Happy Clients
          </h2>
          <p className="text-gray-700 text-lg lg:text-2xl mt-1">Chimney Service Co</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-amber-400 text-amber-400"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span className="ml-2 px-3 py-1 rounded-lg bg-white border border-gray-300 shadow-sm text-gray-700 text-base font-medium">
              16 Google Reviews
            </span>
          </div>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${safePage * (isMd ? 50 : 100)}%)`,
              }}
            >
              {isMd ? (
                testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="w-1/2 shrink-0 px-3 min-w-0"
                  >
                    <TestimonialCard item={item} />
                  </div>
                ))
              ) : (
                testimonials.map((item, i) => (
                  <div key={i} className="w-full shrink-0 px-2 min-w-0">
                    <TestimonialCard item={item} />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={goPrev}
              disabled={safePage === 0}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-primary disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setCurrentPage(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === safePage
                      ? 'w-6 bg-primary'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={goNext}
              disabled={safePage >= maxPage}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-primary disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}
