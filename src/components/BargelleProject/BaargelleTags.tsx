import React from 'react'
import TitleSection from '../../layouts/TitleSection'

const BaargelleTags: React.FC = () => {
  const tags = (tag: string) => (
    <span className="bg-[#E8E8E8] dark:bg-projectBg px-6 py-3 rounded-md">
      {tag}
    </span>
  )

  return (
    <div className="flex flex-col gap-5">
      <TitleSection>Tags</TitleSection>
      <div className="flex items-center gap-3 flex-wrap">
        {tags('Web app')}
        {tags('Php')}
        {tags('Python')}
        {tags('Mysql')}
        {tags('Reactjs')}
        {tags('CSS')}
      </div>
    </div>
  )
}

export default BaargelleTags
