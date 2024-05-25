import BackgroundImage from "data-base64:~assets/background.png"
import React from "react"

const Background = () => {
  return (
    <img
      src={BackgroundImage}
      className="w-screen transform -translate-y-[50%] fixed top-0 left-0 z-[-1]"
      alt=""
    />
  )
}

export default Background
