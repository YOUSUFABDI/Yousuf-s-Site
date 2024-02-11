import React from "react"
import Title from "../../layouts/Title"
import { motion } from "framer-motion"
import Link from "next/link"
import useSWR from "swr"
import Fetcher from "@/lib/fetcher"
import { BlogPostDT } from "@/lib/types"

const TopViewedPosts: React.FC = () => {
  // const { data } = useSWR(`/api/posts`, Fetcher, {
  //   revalidateOnFocus: false,
  // })
  // const posts = data

  // // get top 3 of the most viewed posts
  // const topViewedPosts: BlogPostDT[] = posts?.sort(
  //   (a: any, b: any) => (b.views || 0) - (a.views || 0)
  // )
  // const mostViewedPosts: BlogPostDT[] = topViewedPosts?.slice(0, 3)

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Title>Top Viewed Posts</Title>

      {/* {mostViewedPosts.map((post, index) => (
        <motion.div
          key={post.blogID}
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        >
          <Link
            href={`blog/${post.blogID}`}
            className="flex items-center justify-between hover:opacity-50 transition-opacity duration-[0.4s] ease-in-out"
          >
            <div className="flex flex-col gap-3 md:flex-row md:gap-20 md:flex-1">
              <span className="text-lightSecondary dark:text-darkSecondary md:flex-[0.20]">
                {post.createdDate}
              </span>
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 1,
                }}
                className="text-lightPrimary dark:text-darkPrimary font-medium overflow-hidden overflow-ellipsis md:flex-1 max-w-[50%]"
              >
                {post.mainTitle}
              </span>
            </div>
            <div className="flex md:hidden">
              <img
                className="h-[50px] max-w-[50px] object-contain"
                src={post.coverImage}
                alt="post img"
              />
            </div>
          </Link>
        </motion.div>
      ))} */}

      <div className="mt-10 text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition-colors duration-300 ease-in-out font-medium text-sm">
        <Link href="/blog" className="underline">
          See All
        </Link>
      </div>
    </motion.section>
  )
}

export default TopViewedPosts
