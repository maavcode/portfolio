import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send } from "lucide-react"
import { iconMap } from "../../data/icon-map"
import type { ContactSection } from "../../data/types"

const demo: ContactSection = {
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet",
  contactInfo: [
    { icon: "Mail", title: "Email", description: "lorem@ipsum.com" },
    { icon: "MapPin", title: "Location", description: "Lorem" },
  ],
  socials: [
    { name: "GitHub", icon: "FaGithub", url: "#" },
  ],
}

interface Props {
  data?: ContactSection
  className?: string
}

export function Contact({ data, className }: Props) {
  const content = data || demo
  const contactInfo = content.contactInfo
  const socials = content.socials

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("_subject") as string
    const message = formData.get("message") as string

    const body = [
      `From: ${name}`,
      `Email: ${email}`,
      "",
      `Message:`,
      message,
    ].join("\n")

    const mailto = `mailto:mario.aguilar.dev@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div ref={ref} className={`w-full max-w-5xl mx-auto px-6 ${className ?? ""}`}>
      <motion.div
        className="flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          {content.title}
        </h2>
        <div
          className="w-12 h-1 rounded-full mb-6"
          style={{ background: "var(--color-accent)" }}
        />
        <p
          className="text-base max-w-xl"
          style={{ color: "var(--color-text-muted)" }}
        >
          {content.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3
              className="text-xl font-bold mb-2 text-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              Get In Touch
            </h3>
            <p
              className="text-sm mb-8 text-center"
              style={{ color: "var(--color-text-muted)" }}
            >
              Have a project in mind? Let's collaborate and build something
              amazing together.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300"
                  style={{
                    background: "color-mix(in srgb, var(--color-bg-primary) 100%, transparent)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300"
                  style={{
                    background: "color-mix(in srgb, var(--color-bg-primary) 100%, transparent)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                />
              </div>
              <input
                type="text"
                name="_subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300"
                style={{
                  background: "color-mix(in srgb, var(--color-bg-primary) 100%, transparent)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all duration-300"
                style={{
                  background: "color-mix(in srgb, var(--color-bg-primary) 100%, transparent)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
              />
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: "var(--color-accent)",
                    color: "#fff",
                  }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-2 flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactInfo.map((item) => {
            const ContactIcon = iconMap[item.icon]
            return (
              <div
                key={item.title}
                className="rounded-xl p-5 transition-all duration-300"
                style={{
                  background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: "color-mix(in srgb, var(--color-accent) 15%, transparent)",
                      color: "var(--color-accent)",
                    }}
                  >
                    <ContactIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm truncate" style={{ color: "var(--color-text-muted)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

          <div
            className="rounded-xl p-5"
            style={{
              background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Connect with me
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const SocialIcon = iconMap[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                    style={{
                      background: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                      color: "var(--color-text-muted)",
                      border: "1px solid transparent",
                    }}
                  >
                    <SocialIcon className="w-4 h-4" />
                    {social.name}
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
