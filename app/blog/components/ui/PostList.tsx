"use client";

import FlipNumber from "@/layouts/FlipNumber";
import Note from "@/layouts/Note";
import Paragraph from "@/layouts/Paragraph";
import SubTitle from "@/layouts/SubTitle";
import Title from "@/layouts/Title";
import Fetcher from "@/lib/fetcher";
import { BlogPostDT } from "@/lib/types";
import { motion } from "framer-motion";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Emojis from "./Emojis";
import SkeletonPostList from "./SkeletonPostList";

const PostList = () => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPostDT[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3;

  const { data: allPosts, isLoading } = useSWR(
    `http://localhost:3000/api/posts/get_posts`,
    Fetcher
  );

  useEffect(() => {
    if (allPosts) {
      setPosts(allPosts);
    }
  }, [allPosts]);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const filteredPosts = posts?.filter((post: BlogPostDT) => {
    const lowerCaseSearch = search.toLowerCase();
    const matchesSearch =
      post.mainTitle.toLowerCase().includes(lowerCaseSearch) ||
      post.description.toLowerCase().includes(lowerCaseSearch) ||
      post.tag.toLowerCase().includes(lowerCaseSearch) ||
      post.creatorName.toLowerCase().includes(lowerCaseSearch);

    const matchesTag = selectedTag ? post.tag === selectedTag : true;

    return matchesSearch && matchesTag;
  });

  const startIndex = currentPage * postsPerPage;
  const displayedFilteredPosts = filteredPosts?.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const loadMorePosts = () => {
    if (startIndex + postsPerPage < (filteredPosts?.length || 0)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const showPreviousPosts = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

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
                <FlipNumber>{allPosts?.length}</FlipNumber> posts about tech,
                code, more...
              </SubTitle>
              <div className="flex items-center gap-4 mt-1">
                <button
                  className="text-lightPrimary dark:text-darkPrimary"
                  onClick={() => handleTagClick("tech")}
                >
                  #Tech
                </button>
                <button
                  className="text-lightPrimary dark:text-darkPrimary"
                  onClick={() => handleTagClick("coding")}
                >
                  #Coding
                </button>
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="search.."
                className="w-full bg-gradient-to-r from-[#222222] to-[#B4B4B4] dark:from-[#282828] dark:to-[#000000] rounded-md text-white pl-2 py-2"
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
            {filteredPosts && filteredPosts.length > 0 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-[1fr, 1fr, 1fr, 1fr] grid-rows-[1fr, 1fr, 1fr, 1fr] gap-y-[10px] gap-x-[10px] lg:gap-x-7"
                >
                  {displayedFilteredPosts?.map(
                    (post: BlogPostDT, index: any) => (
                      <div
                        key={post.blogID}
                        className={`relative bg-gradient-to-r from-[#222222] to-[#B4B4B4] dark:from-[#282828] dark:to-[#000000]  rounded-xl text-white animate-in 
              ${
                index === 0 &&
                "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:h-full h-fit"
              }
              ${
                index === 1 && "lg:col-start-3 lg:col-end-4 lg:h-full h-[250px]"
              }
              ${
                index === 2 && "lg:col-start-3 lg:col-end-4 lg:h-full h-[250px]"
              }
      `}
                        style={{ "--index": 3 } as React.CSSProperties}
                      >
                        {/* top */}
                        {index === 0 && (
                          <div
                            className="h-[250px] lg:h-[200px] object-cover rounded-tl-xl rounded-tr-xl"
                            style={{
                              backgroundImage: `linear-gradient(to right bottom, rgba(17, 17, 17, 0.3), #282828), url(${post.coverImage})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        )}
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
                    )
                  )}
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
            ) : (
              <div className="h-[50vh] flex items-center justify-center">
                <Note text="No blogs related to this yet. Stay tuned for more updates!" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PostList;
