import React from 'react'
import FullContainer from '@/components/common/FullContainer'
import Container from '@/components/common/Container'
import { MapPin } from 'lucide-react'

const areas = [
  'Alabama',
  'Connecticut',
  'Idaho',
  'Louisiana',
  'Mississippi',
  'California',
  'Florida',
  'Georgia',
  'Texas',
  'New York',
  'Ohio',
  'Pennsylvania',
  'North Carolina',
  'Michigan',
  'New Jersey',
  'Virginia',
  'Washington',
  'Arizona',
  'Massachusetts',
  'Tennessee',
  'Indiana',
  'Missouri',
  'Maryland',
  'Wisconsin',
  'Colorado',
  'Minnesota',
  'South Carolina',
  'Kentucky',
  'Oregon',
  'Oklahoma',
]

export default function Locations() {
  return (
    <FullContainer className="bg-white">
      <Container>
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
          Areas We Serve
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {areas.map((area, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5"
            >
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-gray-900 text-sm font-medium truncate">
                {area}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  )
}
