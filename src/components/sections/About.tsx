import { useState, useEffect, useCallback, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { AboutSection } from "../../data/types"
import { SectionHeading } from "../shared/SectionHeading"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const demo: AboutSection = {
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: ["https://picsum.photos/id/1/600/750"],
  stats: [
    { label: "Lorem", value: "0+" },
    { label: "Ipsum", value: "0+" },
    { label: "Dolor", value: "0+" },
  ],
}

interface Props {
  data?: AboutSection
  className?: string
}

export function About({ data, className }: Props) {
  const content = data || demo
  const images = content.images
  const stats = content.stats

  const [currentIndex, setCurrentIndex] = useState(0)
  const imageCount = images.length
  const hasMultiple = imageCount > 1

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imageCount)
  }, [imageCount])

  useEffect(() => {
    if (!hasMultiple) return
    const timer = setInterval(nextImage, 3000)
    return () => clearInterval(timer)
  }, [hasMultiple, nextImage])

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className={`w-full max-w-5xl mx-auto px-6 ${className ?? ""}`}>
      <SectionHeading title={content.title} description={content.description} />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden"
          style={{
            background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
            border: "1px solid var(--color-border)",
          }}
          variants={itemVariants}
        >
          {imageCount === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-6xl sm:text-7xl font-extrabold tracking-tight select-none"
                style={{ color: "color-mix(in srgb, var(--color-accent) 20%, transparent)" }}
              >
                MA
              </span>
            </div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={hasMultiple ? { opacity: 0, scale: 1.05 } : false as any}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={images[currentIndex]}
                    alt={`Profile photo ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {hasMultiple && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        background: i === currentIndex ? "var(--color-accent)" : "color-mix(in srgb, var(--color-text-primary) 30%, transparent)",
                        width: i === currentIndex ? "1.5rem" : "0.5rem",
                      }}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {content.paragraph}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-3"
            variants={itemVariants}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{
                  background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs sm:text-sm leading-tight"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 w-fit"
            style={{ color: "var(--color-accent)" }}
            whileHover={{ gap: "0.625rem" }}
            variants={itemVariants}
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
