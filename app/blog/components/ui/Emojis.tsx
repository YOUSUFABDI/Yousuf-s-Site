import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import FlipNumber from "@/layouts/FlipNumber"
import fetcher from "@/lib/fetcher"
import axios from "axios"
import { SmilePlus } from "lucide-react"
import useSWR from "swr"

const Emojis = ({ blogID }: { blogID: number }) => {
  const { data: emojis, mutate } = useSWR(
    `/api/posts/emojis/${blogID}`,
    fetcher
  )

  const handleEmojiClick = async (type: string) => {
    try {
      await axios.post(`/api/posts/emojis/${blogID}`, { type })
      mutate()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <HoverCard>
      <div className="flex items-center gap-5">
        <HoverCardTrigger>
          <SmilePlus className="cursor-pointer" />
        </HoverCardTrigger>
        <div className="flex items-center gap-1">
          {emojis?.map((emoji: any) => (
            <div
              key={emoji.type}
              className="bg-hoverDark flex items-center gap-[2px] p-1 rounded-md"
            >
              <img src={`/${emoji.type}.png`} alt={emoji.type} />
              <FlipNumber>{emoji.count}</FlipNumber>
            </div>
          ))}
        </div>
        <HoverCardContent
          style={{
            backgroundColor: "#222222",
            borderColor: "transparent",
            width: "fit-content",
            height: "fit-content",
            position: "absolute",
            top: "-80px",
            padding: 5,
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="h-[30px] w-[50px] cursor-pointer"
              onClick={() => handleEmojiClick("heart")}
            >
              <img
                className="h-full w-full object-contain"
                src="/heart.png"
                alt="heart"
              />
            </div>
            <div
              className="h-[30px] w-[50px] cursor-pointer"
              onClick={() => handleEmojiClick("clap")}
            >
              <img
                className="h-full w-full object-contain"
                src="/clap.png"
                alt="clap"
              />
            </div>
          </div>
        </HoverCardContent>
      </div>
    </HoverCard>
  )
}

export default Emojis
