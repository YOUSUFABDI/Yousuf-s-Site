import { useActiveSectionContext } from "@/context/active-section-context"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import type { SectionName } from "./types"

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
  }
}

export default function useIsMount() {
  const isMountRef = useRef(true)

  useEffect(() => {
    isMountRef.current = false
  }, [])

  return isMountRef.current
}
