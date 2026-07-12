import { motion, useScroll, useSpring } from "framer-motion"
import "@/styles/scroll-progress.css"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  )
}
