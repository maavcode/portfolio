import { motion } from "framer-motion"

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"
const SI = "https://cdn.simpleicons.org"

const categories = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "PHP", icon: `${DI}/php/php-original.svg` },
      { name: "C#", icon: `${DI}/csharp/csharp-original.svg` },
      { name: "Java", icon: `${DI}/java/java-original.svg` },
      { name: "Kotlin", icon: `${DI}/kotlin/kotlin-original.svg` },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "SQL", icon: `${SI}/mysql/4479A1` },
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DI}/css3/css3-original.svg` },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Astro", icon: `${SI}/astro/FF5D01` },
      { name: "Next.js", icon: `${SI}/nextdotjs/white` },
      { name: "Laravel", icon: `${DI}/laravel/laravel-original.svg` },
      { name: "Spring", icon: `${DI}/spring/spring-original.svg` },
      { name: ".NET", icon: `${SI}/dotnet/512BD4` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Tailwind CSS", icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: "Framer Motion", icon: `${SI}/framer/0055FF` },
      { name: "Android Studio", icon: `${DI}/androidstudio/androidstudio-original.svg` },
      { name: "Apache Maven", icon: `${DI}/maven/maven-original.svg` },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "MariaDB", icon: `${SI}/mariadb/003545` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "SQLite", icon: `${DI}/sqlite/sqlite-original.svg` },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      { name: "AWS", icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Nginx", icon: `${DI}/nginx/nginx-original.svg` },
      { name: "Linux", icon: `${DI}/linux/linux-original.svg` },
      { name: "Grafana", icon: `${SI}/grafana/F46800` },
      { name: "k6", icon: `${SI}/k6/7D64FF` },
      { name: "SEO", icon: `${SI}/google/4285F4` },
    ],
  },
]

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
}

export function Skills() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Skills & Expertise
        </h2>
        <div
          className="w-12 h-1 rounded-full mb-6 mx-auto"
          style={{ background: "var(--color-accent)" }}
        />
        <p
          className="text-base max-w-xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          A collection of technologies I'm proficient with, from languages to frameworks and tools
        </p>
      </div>

      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category.category}>
            <h3
              className="mb-4 text-lg font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {category.category}
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill) => (
                <motion.div key={skill.name} variants={staggerItem}>
                  <div
                    className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors"
                    style={{
                      background: "color-mix(in srgb, var(--color-bg-card) 100%, transparent)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="shrink-0"
                      loading="lazy"
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
