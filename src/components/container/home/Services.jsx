import React from 'react'
import Link from 'next/link'
import FullContainer from '@/components/common/FullContainer'
import Container from '@/components/common/Container'
import ContactButton from '@/components/Ui/ContactButton'
import { ArrowRight } from 'lucide-react'

const serviceDescription =
  'Remove soot, creosote, and debris with professional chimney cleaning to improve airflow and reduce fire hazards.'

const services = [
  {
    title: 'Chimney Sweep/Clean',
    description: serviceDescription,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=260&fit=crop',
  },
  {
    title: 'Chimney Repair',
    description: serviceDescription,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=260&fit=crop',
  },
  {
    title: 'Chimney Inspection',
    description: serviceDescription,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=260&fit=crop',
  },
  {
    title: 'Fireplace Installation',
    description: serviceDescription,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=260&fit=crop',
  },
  {
    title: 'Flue Liner Services',
    description: serviceDescription,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop',
  },
  {
    title: 'Chimney Cap & Damper',
    description: serviceDescription,
    image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400&h=260&fit=crop',
  },
]

export default function Services() {
  return (
    <FullContainer className="bg-gray-100">
      <Container>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
            We Offer Best Chimney Services
          </h2>
          <Link
            href="#quote"
            className="flex items-center gap-1.5 text-primary font-semibold hover:underline w-fit shrink-0"
          >
            GET A QUOTATION
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <article
              key={i}
              className="bg-white rounded-4xl p-10 shadow-md overflow-hidden flex flex-col"
            >
              <div className=" ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full max-h-[110px] object-cover rounded-3xl"
                />
              </div>
              <div className="flex flex-col flex-1 mt-4">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-5">
                  <ContactButton variant="secondary-large-light" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </FullContainer>
  )
}
