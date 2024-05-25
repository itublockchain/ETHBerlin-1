import React, { cloneElement, Children as ReactChildren } from "react"
import type { PropsWithChildren } from "react"

import useRouter from "~hooks/useRouter"

import Home from "./home"

export const RouterPage: React.FC<{
  path: string
  element: React.ReactElement
}> = ({ element, path }) => {
  return <>{element}</>
}

const Router: React.FC<PropsWithChildren> = ({ children }) => {
  const { path } = useRouter()

  return ReactChildren.map(children, (child, i) => {
    if ((child as any).props.path !== path) {
      return false
    }
    return child
  })
}

export default Router
