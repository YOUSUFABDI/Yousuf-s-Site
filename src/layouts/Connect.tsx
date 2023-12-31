import React from 'react'
import TitleSection from './TitleSection'

const SomBDConnect: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <TitleSection>Contact</TitleSection>
      <p className="text-sm">
        Need more project details, or interested in working together? Reach out
        to me directly at{' '}
        <strong className="text-lightPrimary dark:text-darkPrimary">
          <a href="mailto:yousufabdi34@gmail.com">yousufabdi34@gmail.com</a>.
        </strong>
        I'd be happy to connect!
      </p>
    </div>
  )
}

export default SomBDConnect
