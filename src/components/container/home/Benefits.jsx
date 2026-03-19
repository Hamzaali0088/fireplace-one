import React from 'react'
import FullContainer from '@/components/common/FullContainer'
import Container from '@/components/common/Container'
import ContactButton from '@/components/Ui/ContactButton'
import { Check } from 'lucide-react'
import Image from 'next/image'

const benefits = [
  'Keep your fireplace clean and safe',
  'Boost heating efficiency.',
  '5 Star Rated On Google',
  'Save on energy with optimal airflow.',
]

const intro =
  'Chimney One provides top-quality chimney maintenance and repair services with precision and care. From cleaning and inspections to expert repairs, our experienced team ensures safety, efficiency, and long-lasting performance for your chimney.'

const imageUrl =
  '/st-images/benefits.png'

export default function Benefits() {
  return (
    <FullContainer className="bg-white">
      <Container>
        {/* Top: Committed to Excellence */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
            Committed to Excellence
          </h2>
          <p className="text-gray-700 text-base lg:text-lg mt-4 leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Two columns: image left, benefits right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] lg:aspect-[5/4] lg:min-h-[380px] bg-gray-100">
            <Image
              src="/st-images/benefits.png"
              alt="Chimney service professional at work"
              width={1500}
              height={1500}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Chimney Service CO Benefits
            </h3>
            <ul className="mt-6 space-y-4">
              {benefits.map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white">
                    <Check className="h-3.5 w-3.5 text-primary stroke-[2.5]" />
                  </span>
                  <span className="text-gray-900 text-base">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ContactButton variant="secondary-large-dark" />
              <ContactButton variant="primary-large-light" />
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}
