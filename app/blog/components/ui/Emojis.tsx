import FlipNumber from "@/layouts/FlipNumber";
import fetcher from "@/lib/fetcher";
import axios from "axios";
import { SmilePlus } from "lucide-react";
import { useState } from "react";
import useSWR from "swr";

const Emojis = ({ blogID }: { blogID: number }) => {
  const [isHoverCardOpen, setIsHoverCardOpen] = useState(false);

  const { data: emojis, mutate } = useSWR(
    `http://localhost:3000/api/posts/emojis/${blogID}`,
    fetcher
  );

  const handleEmojiClick = async (type: string) => {
    setIsHoverCardOpen(false);

    const updatedEmojis = emojis.map((emoji: any) =>
      emoji.type === type ? { ...emoji, count: emoji.count + 1 } : emoji
    );
    mutate(updatedEmojis, false);

    try {
      await axios.post(`/api/posts/emojis/${blogID}`, { type });
      mutate();
    } catch (error) {
      console.error(error);
      mutate();
    }
  };

  const toggleHoverCard = () => {
    setIsHoverCardOpen((prev) => !prev);
  };

  return (
    <div className="relative flex items-center gap-5">
      <div className="cursor-pointer" onClick={toggleHoverCard}>
        <SmilePlus />
      </div>
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
      {isHoverCardOpen && (
        <div
          className="absolute top-[-50px] p-1 bg-[#222222] border border-transparent rounded-md"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="h-[30px] w-[30px] cursor-pointer"
              onClick={() => handleEmojiClick("heart")}
            >
              <img
                className="h-full w-full object-contain"
                src="/heart.png"
                alt="heart"
              />
            </div>
            <div
              className="h-[30px] w-[30px] cursor-pointer"
              onClick={() => handleEmojiClick("clap")}
            >
              <img
                className="h-full w-full object-contain"
                src="/clap.png"
                alt="clap"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Emojis;
