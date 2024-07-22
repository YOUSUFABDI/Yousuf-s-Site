import { motion } from "framer-motion"
import React from "react"

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

export default SkeletonPostList
