import Image from "next/image"
import { motion } from "framer-motion"
import User from "../public/user.svg"
import { useEffect, useRef, useState } from "react"

function Banner() {

  const carouselRef = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    let carousel = carouselRef.current
    setWidth(carousel.scrollWidth - carousel.offsetWidth)
  },[])

  const users = [
    { id:1, image: User, alt: "user 1" },
    { id:2, image: User, alt: "user 2" },
    { id:3, image: User, alt: "user 3" },
    { id:4, image: User, alt: "user 4" },
    { id:5, image: User, alt: "user 5" },
    { id:6, image: User, alt: "user 2" },
    { id:7, image: User, alt: "user 3" },
    { id:8, image: User, alt: "user 4" },
    { id:9, image: User, alt: "user 2" },
    { id:10, image: User, alt: "user 3" }
  ]

  return (
    <div className="h-24 bg-banner grid items-center justify-center">
      {/* middle */}
      <motion.div ref={carouselRef} className="overflow-hidden p-2 max-w-[228px] sm:max-w-fit">
        <motion.div  className="flex gap-2 sm:gap-5" drag="x" dragConstraints={{right: 0, left: -(width )}}>
          {users.map(( { id ,image ,alt } ) => (
            <motion.div key={id} className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full flex-shrink-0 cursor-pointer">
              <Image src={image} alt={alt} fill className="pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Banner;
