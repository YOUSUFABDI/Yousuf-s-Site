"use client"

import React from "react"
import BlogInro from "../components/ui/BlogInro"
import SubTitle from "@/layouts/SubTitle"
import Paragraph from "../../../layouts/Paragraph"
import Box from "../components/ui/Box"
import BlogTitle from "../components/ui/BlogTitle"
import Avatar from "../../../layouts/Avatar"
import Article from "../components/ui/Article"
import Note from "../../../layouts/Note"
import GoBack from "../../../layouts/GoBack"
import { BlogPostDT, PostPagePropsDT } from "@/lib/types"
import Skeleton from "../../../layouts/Skeleton"
import useSWR from "swr"
import Fetcher from "@/lib/fetcher"

export default function Page({ params }: PostPagePropsDT) {
  const { data, isLoading } = useSWR(
    `/api/posts/?slug=${params.slug}`,
    Fetcher,
    {
      revalidateOnFocus: false,
    }
  )
  const post: BlogPostDT = data

  if (isLoading) {
    return (
      <Article>
        {[1, 2, 3, 4, 5].map((el, index) => (
          <Skeleton key={`${el + index}`} />
        ))}
      </Article>
    )
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
        <Avatar
          img={post?.allImages[0].image}
          customClasses="w-[1020px] rounded-md"
          width={1020}
          height={548}
        />
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
              img={image.image}
              key={image.imageID}
              customClasses="w-[1020px] rounded-md"
              width={1020}
              height={548}
            />
          ))}
        </Box>
      ))}

      <div className={`${post?.allImages[1] ? "block" : "hidden"}`}>
        <Avatar
          img={post?.allImages[1] && post?.allImages[1].image}
          customClasses="w-[1020px] rounded-md"
          width={1020}
          height={548}
        />
      </div>

      <GoBack text="All blogs" link="blog" />
    </Article>
  )
}
