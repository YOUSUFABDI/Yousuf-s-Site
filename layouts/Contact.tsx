import React from "react"
import Title from "./Title"

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title>Contact</Title>
      <p className="text-sm">
        Need more project details, or interested in working together? Reach out
        to me directly at{" "}
        <strong className="text-lightPrimary dark:text-darkPrimary">
          <a href="mailto:yousufabdi34@gmail.com">yousufabdi34@gmail.com</a>.
        </strong>{" "}
        I'd be happy to connect!
      </p>
    </div>
  )
}

export default Contact
