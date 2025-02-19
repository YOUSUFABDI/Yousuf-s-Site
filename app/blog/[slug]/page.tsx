"use client";

import SubTitle from "@/layouts/SubTitle";
import Fetcher from "@/lib/fetcher";
import { BlogPostDT, PostPagePropsDT } from "@/lib/types";
import React from "react";
import useSWR from "swr";
import GoBack from "../../../layouts/GoBack";
import Note from "../../../layouts/Note";
import Paragraph from "../../../layouts/Paragraph";
import Article from "../components/ui/Article";
import BlogInro from "../components/ui/BlogInro";
import BlogTitle from "../components/ui/BlogTitle";
import Box from "../components/ui/Box";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page({ params }: PostPagePropsDT) {
  const { data, isLoading } = useSWR(
    `/api/posts/get_posts?slug=${params.slug}`,
    Fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const post: BlogPostDT = data;

  if (isLoading) {
    return (
      <Article>
        {[1].map((el, index) => (
          <SkeletonArticle key={`${el + index}`} />
        ))}
      </Article>
    );
  }

  return (
    <Article>
      <Box>
        <BlogTitle>{post?.mainTitle}</BlogTitle>
        <SubTitle>{post?.description}</SubTitle>
        <BlogInro
          name={post?.creatorName}
          img={post?.creatorImage}
          date={post?.createdDate}
          views={post?.views}
        />
        {post?.allImages[0]?.image && (
          <Avatar
            key={post.allImages[0].imageID}
            className="w-[1020px] rounded-md h-[390px]"
          >
            <AvatarImage
              className="object-cover object-center w-[1020px] rounded-md h-[390px]"
              src={post?.allImages[0]?.image && post?.allImages[0]?.image}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </Box>

      {post?.titles.map((title) => (
        <Box key={title.titleID}>
          <BlogTitle>{title.title}</BlogTitle>
          {title.paragraphs.map((paragraph) => (
            <React.Fragment key={paragraph.paragraph_id}>
              {paragraph.paragraph ===
                "Xusuusnow si aad u racdo habkan waxa qasab ah in computerkaga ku jiro nodejs" && (
                <Note text={paragraph.paragraph} />
              )}
              <Paragraph>{paragraph.paragraph}</Paragraph>
            </React.Fragment>
          ))}
          {title.images.map((image) => (
            <Avatar
              key={image.imageID}
              className="w-[1020px] rounded-md h-[390px]"
            >
              <AvatarImage
                className="object-cover object-center"
                src={image.image}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </Box>
      ))}

      <div className={`${post?.allImages[1] ? "block" : "hidden"}`}>
        <Avatar className="w-[1020px] rounded-md h-[390px]">
          <AvatarImage
            className="object-cover object-center"
            src={post?.allImages[1] && post?.allImages[1].image}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <GoBack text="All blogs" link="blog" />
    </Article>
  );
}

const SkeletonArticle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 my-14 pagePb"
    >
      {/* Placeholder for Box with BlogTitle, SubTitle, Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-5"
      >
        <div className="h-10 w-10  bg-gray-200 rounded-full p-4 animate-pulse"></div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-36 bg-gray-200 rounded-md  animate-pulse"></div>
          <div className="h-4 w-20 bg-gray-200 rounded-md  animate-pulse"></div>
        </div>
      </motion.div>

      {/* Placeholder for Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-48 bg-gray-200 rounded-md animate-pulse"
      ></motion.div>

      {/* Placeholder for Box with BlogTitle and Paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-1"
      >
        <div className="h-8 w-36 bg-gray-200 rounded-md  animate-pulse"></div>
        <div className="h-10 w-96 bg-gray-200 rounded-md  animate-pulse"></div>
        <div className="h-10 w-96 bg-gray-200 rounded-md  animate-pulse"></div>
        <div className="h-10 w-96 bg-gray-200 rounded-md  animate-pulse"></div>
      </motion.div>

      {/* Placeholder for Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="h-48 bg-gray-200 rounded-md  animate-pulse"
      ></motion.div>
    </motion.div>
  );
};
