import React from 'react'
import TitleSection from '../../layouts/TitleSection'
import { lastestPosts } from '../../lib/data'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LastestPosts: React.FC = () => {
  return (
    <motion.section
      className=""
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <TitleSection>Lastest Posts</TitleSection>

      {lastestPosts.map((post, index) => (
        <motion.div
          key={post.id}
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        >
          <Link
            to={post.to}
            className="flex items-center justify-between hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
          >
            <div className="flex flex-col gap-3 md:flex-row md:gap-20 md:flex-1">
              <span className="text-lightSecondary dark:text-darkSecondary md:flex-[0.20]">
                {post.date}
              </span>
              <span
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  WebkitLineClamp: 1,
                }}
                className="text-lightPrimary dark:text-darkPrimary font-medium overflow-hidden overflow-ellipsis md:flex-1 max-w-[50%]"
              >
                {post.name}
              </span>
            </div>
            <div className="flex md:hidden">
              <img
                className="h-[50px] max-w-[50px] object-contain"
                src={post.imgUrl}
                alt="post img"
              />
            </div>
          </Link>
        </motion.div>
      ))}

      <div className="mt-10 text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition-colors duration-300 ease-in-out font-medium text-sm">
        <Link to="/blogs" className="underline">
          See All
        </Link>
      </div>
    </motion.section>
  )
}

export default LastestPosts
