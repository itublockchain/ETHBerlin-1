import BackgroundImage from "data-base64:~assets/background.png"
import React from "react"

import useRouter from "~hooks/useRouter"

const Background = () => {
  const { path } = useRouter()
  return (
    <img
      src={BackgroundImage}
      className="w-screen  transition  duration-1000 fixed top-0 left-0 z-[-1]"
      alt=""
      style={{
        transform: `translateY(${path === "/" ? "-50%" : "-12.5%"})`
      }}
    />
  )
}

export default Background
