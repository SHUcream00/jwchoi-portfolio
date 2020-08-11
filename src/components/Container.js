import React from "react"
import containerStyles from "./Container.module.css"

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}
