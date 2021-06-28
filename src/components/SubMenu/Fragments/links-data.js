import * as React from "react"
import { GiCrackedGlass } from "react-icons/gi"

import { AiFillSchedule, AiOutlineShopping } from "react-icons/ai"

import { BiPaint } from "react-icons/bi"
export const links = [
  {
    href: "/products/class",
    title: "Classes",
    description: "Book your class today!",
    icon: <AiFillSchedule />,
  },
  {
    href: "/products/art",
    title: "Art",
    description: "Unique pieces by Jeanne Philippus",
    icon: <GiCrackedGlass />,
  },
  {
    href: "/products/art-kit",
    title: "Art Kits",
    description: "Take home the experience",
    icon: <BiPaint />,
  },
  {
    href: "/products",
    title: "All Products",
    description: "View our entire inventory",
    icon: <AiOutlineShopping />,
    new: false,
  },
]
