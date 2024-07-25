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
import useSWR, { mutate } from "swr"
import Emojis from "./Emojis"
import SkeletonPostList from "./SkeletonPostList"

const PostList = () => {
  const [displayedPosts, setDisplayedPosts] = useState(3)
  const [search, setSearch] = useState("")

  const { isLoading } = useSWR(
    `/api/posts/get_more_posts?offset=${displayedPosts}`,
    Fetcher
  )

  const { data: allPosts } = useSWR(`/api/posts/get_posts`, Fetcher)

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const loadMorePosts = () => {
    const remainingPosts = allPosts.length - displayedPosts
    const postsToLoad = Math.min(3, remainingPosts)
    const nextOffset = displayedPosts + postsToLoad

    if (postsToLoad > 0) {
      setDisplayedPosts(nextOffset)
      mutate(`/api/posts/get_more_posts?offset=${nextOffset}`)
    }
  }

  const showPreviousPosts = () => {
    if (displayedPosts >= 6) {
      setDisplayedPosts((prevDisplayedPosts) => prevDisplayedPosts - 3)
    } else {
      setDisplayedPosts(3)
      return
    }
  }

  const filteredPosts = allPosts?.filter((post: BlogPostDT) => {
    const lowerCaseSearch = search.toLowerCase()

    return (
      post.mainTitle.toLowerCase().includes(lowerCaseSearch) ||
      post.description.toLowerCase().includes(lowerCaseSearch) ||
      post.tag.toLowerCase().includes(lowerCaseSearch) ||
      post.creatorName.toLowerCase().includes(lowerCaseSearch)
    )
  })

  const startIndex = Math.max(0, filteredPosts?.length - displayedPosts)
  const displayedFilteredPosts = filteredPosts?.slice(
    startIndex,
    startIndex + 3
  )

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
            className="flex justify-between"
          >
            <div>
              <SubTitle>
                <FlipNumber>{displayedPosts}</FlipNumber> posts about tech,
                code, more...
              </SubTitle>
              <div className="flex items-center gap-4 mt-1">
                <button className="text-lightPrimary dark:text-darkPrimary">
                  #Tech
                </button>
                <button className="text-lightPrimary dark:text-darkPrimary">
                  #Coding
                </button>
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="search.."
                className="w-full bg-gradient-to-r from-neutral-400 to-slate-900 dark:from-[#282828] dark:to-[#000000] rounded-md text-white pl-2 py-2"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
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
              className="grid grid-cols-1 grid-rows-1 lg:grid-cols-[1fr, 1fr, 1fr, 1fr] lg:grid-rows-[1fr, 1fr, 1fr, 1fr] gap-y-[10px] gap-x-[10px] lg:gap-x-7"
            >
              {displayedFilteredPosts?.map((post: BlogPostDT, index: any) => (
                <div
                  key={post.blogID}
                  className={`relative bg-gradient-to-r from-neutral-400 to-slate-900 dark:from-[#282828] dark:to-[#000000]  rounded-xl text-white animate-in 
            ${
              index === 0 &&
              "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:h-full h-fit"
            }
            ${index === 1 && "lg:col-start-3 lg:col-end-4 lg:h-full h-[250px]"}
            ${index === 2 && "lg:col-start-3 lg:col-end-4 lg:h-full h-[250px]"}
    `}
                  style={{ "--index": 3 } as React.CSSProperties}
                >
                  {/* top */}
                  {/* {index === 0 && ( */}
                  <div
                    className={`${
                      index === 0 && "h-[250px] lg:h-[200px]"
                    } object-cover rounded-tl-xl rounded-tr-xl`}
                    style={{
                      backgroundImage: `linear-gradient(to right bottom, rgba(17, 17, 17, 0.3), #282828), url(${post.coverImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  {/* // )} */}
                  {/* top */}

                  {/* bottom */}
                  <div className={`flex flex-col p-[10px] w-full`}>
                    <div className="flex flex-col gap-[10px]">
                      <Title customClasses="font-bold text-lg text-white">
                        {post.mainTitle.length > 8
                          ? `${post.mainTitle.slice(0, 23)}...`
                          : post.mainTitle}
                      </Title>
                      <Paragraph customClasses="text-sm text-white">
                        {post.description.length > 40
                          ? `${post.description.slice(0, 23)}...`
                          : post.description}
                      </Paragraph>
                      <div className="flex flex-col gap-[6px]">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full lg:gap-10 ">
                          <Paragraph customClasses="text-base text-white flex-1 ">
                            By {post.creatorName}
                          </Paragraph>
                          <Paragraph customClasses="text-base text-white flex-1 ">
                            On {post.createdDate}
                          </Paragraph>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full lg:gap-10">
                          <Paragraph customClasses="text-base text-white flex-1 ">
                            Reading time: 10-25 minutes
                          </Paragraph>
                          <Paragraph customClasses="text-base text-white self-start flex-1 ">
                            Views: {post.views}
                          </Paragraph>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center justify-around lg:justify-between relative h-[100px] lg:h-full">
                      <Link
                        href={`blog/${post.blogID}`}
                        className={`uppercase font-bold text-sm lg:text-base underline bottom-[10px] h-fit w-fit`}
                      >
                        Continue Reading
                      </Link>
                      <Emojis blogID={post.blogID} />
                    </div>
                  </div>
                  {/* bottom */}
                </div>
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
