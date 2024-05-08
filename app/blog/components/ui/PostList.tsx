"use client"

import FlipNumber from "@/layouts/FlipNumber"
import Paragraph from "@/layouts/Paragraph"
import SubTitle from "@/layouts/SubTitle"
import Title from "@/layouts/Title"
import Fetcher from "@/lib/fetcher"
import { BlogPostDT } from "@/lib/types"
import { motion } from "framer-motion"
import { SquareChevronLeft, SquareChevronRight } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import useSWR from "swr"

const PostList = () => {
  const [displayedPosts, setDisplayedPosts] = useState(3)

  const { data: posts, isLoading } = useSWR(
    `/api/posts/get_more_posts?offset=${displayedPosts}`,
    Fetcher
  )

  const loadMorePosts = () => {
    setDisplayedPosts((prevDisplayedPosts) => prevDisplayedPosts + 3)
  }

  const showPreviousPosts = () => {
    if (displayedPosts >= 6) {
      setDisplayedPosts((prevDisplayedPosts) => prevDisplayedPosts - 3)
    } else {
      setDisplayedPosts(3)
      return
    }
  }

  return (
    <div className="flex flex-col my-14 w-full">
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Title>Blog</Title>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SubTitle>
              <FlipNumber>{displayedPosts}</FlipNumber> posts about tech, code,
              more...
            </SubTitle>
          </motion.div>
        </div>
        {isLoading ? (
          <SkeletonPostList />
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-[1fr, 1fr, 1fr, 1fr] grid-rows-[1fr, 1fr, 1fr, 1fr] gap-y-[10px] gap-x-7"
            >
              {posts?.map((post: BlogPostDT, index: any) => (
                <Link
                  key={post.blogID}
                  href={`blog/${post.blogID}`}
                  className={`relative bg-gradient-to-r from-neutral-400 to-slate-900 dark:from-[#282828] dark:to-[#000000]  rounded-xl text-white animate-in 
            ${
              index === 0 &&
              "col-start-1 col-end-3 row-start-1 row-end-3 h-[420px] "
            }
            ${index === 1 && "col-start-3 col-end-4 h-[200px]"}
            ${index === 2 && "col-start-3 col-end-4 h-[200px]"}
    `}
                  style={{ "--index": 3 } as React.CSSProperties}
                >
                  {/* top */}
                  {index === 0 && (
                    <div
                      className="h-[200px] object-cover rounded-tl-xl rounded-tr-xl"
                      style={{
                        backgroundImage: `linear-gradient(to right bottom, rgba(17, 17, 17, 0.3), #282828), url(${post.coverImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  )}
                  {/* top */}

                  {/* bottom */}
                  <div
                    className={`flex flex-col p-[10px] w-full ${
                      index === 0 && "h-[308px]"
                    }`}
                  >
                    <div className="flex flex-col gap-[10px]">
                      <Title customClasses="font-bold text-lg text-white">
                        {post.mainTitle.length > 8
                          ? `${post.mainTitle.slice(0, 23)}...`
                          : post.mainTitle}
                      </Title>
                      <Paragraph customClasses="text-sm text-white">
                        {post.description.length > 50
                          ? `${post.description.slice(0, 50)}`
                          : post.description}
                      </Paragraph>
                      <div className="flex flex-col gap-[6px]">
                        <div className="flex items-center justify-between">
                          <Paragraph customClasses="text-base text-white">
                            By {post.creatorName}
                          </Paragraph>
                          <Paragraph customClasses="text-base text-white">
                            On {post.createdDate}
                          </Paragraph>
                        </div>
                        <div className="flex items-center justify-between">
                          <Paragraph customClasses="text-base text-white">
                            Reading time: 10-25 minutes
                          </Paragraph>
                          <Paragraph customClasses="text-base text-white">
                            Views: {post.views}
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`blog/${post.blogID}`}
                      className="uppercase font-bold text-lg underline absolute bottom-[10px]"
                    >
                      Continue Reading
                    </Link>
                  </div>
                  {/* bottom */}
                </Link>
              ))}
            </motion.div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={showPreviousPosts}
                className="text-lightPrimary dark:text-white"
              >
                <SquareChevronLeft />
              </button>
              <button
                onClick={loadMorePosts}
                className="text-lightPrimary dark:text-white"
              >
                <SquareChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PostList

const SkeletonPostList = () => {
  const skeletonPosts = Array.from({ length: 3 }, (_, index) => index)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-[1fr, 1fr, 1fr, 1fr] grid-rows-[1fr, 1fr, 1fr, 1fr] gap-y-[10px] gap-x-7"
    >
      {skeletonPosts.map((index) => (
        <div
          key={index}
          className={`relative bg-gradient-to-r from-neutral-400 to-slate-900 dark:from-[#282828] dark:to-[#000000]  rounded-xl text-white animate-in 
          ${
            index === 0 &&
            "col-start-1 col-end-3 row-start-1 row-end-3 h-[420px] "
          }
          ${index === 1 && "col-start-3 col-end-4 h-[200px]"}
          ${index === 2 && "col-start-3 col-end-4 h-[200px]"}
        `}
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {/* top */}
          {index === 0 && (
            <div
              className="h-[200px] object-cover rounded-tl-xl rounded-tr-xl"
              style={{
                background: "gray",
              }}
            ></div>
          )}
          {/* top */}

          {/* bottom */}
          <div
            className={`flex flex-col p-[10px] w-full ${
              index === 0 && "h-[308px]"
            }`}
          >
            <div className="flex flex-col gap-[10px]">
              <div
                className="font-bold text-lg text-white"
                style={{
                  width: "80%",
                  height: "20px",
                  background: "gray",
                }}
              ></div>
              <div
                className="text-sm text-white"
                style={{
                  width: "100%",
                  height: "50px",
                  background: "gray",
                }}
              ></div>
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center justify-between">
                  <div
                    className="text-base text-white"
                    style={{
                      width: "40%",
                      height: "20px",
                      background: "gray",
                    }}
                  ></div>
                  <div
                    className="text-base text-white"
                    style={{
                      width: "40%",
                      height: "20px",
                      background: "gray",
                    }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <div
                    className="text-base text-white"
                    style={{
                      width: "40%",
                      height: "20px",
                      background: "gray",
                    }}
                  ></div>
                  <div
                    className="text-base text-white"
                    style={{
                      width: "40%",
                      height: "20px",
                      background: "gray",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="uppercase font-bold text-lg underline absolute bottom-[10px]"
              style={{
                width: "200px",
                height: "20px",
                background: "gray",
              }}
            ></div>
          </div>
          {/* bottom */}
        </div>
      ))}
    </motion.div>
  )
}
