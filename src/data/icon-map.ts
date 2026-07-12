import {
  Home,
  User,
  Briefcase,
  Code2,
  History,
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitch } from "react-icons/fa"

export const iconMap = {
  Home,
  User,
  Briefcase,
  Code2,
  History,
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  ExternalLink,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitch,
} as const

export type IconName = keyof typeof iconMap
