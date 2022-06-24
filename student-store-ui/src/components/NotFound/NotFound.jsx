import * as React from "react"
import "./NotFound.css"
import notFound from "./not-found.png"

export default function NotFound() {
  return (
    <div className="not-found">
      <img src={notFound}></img>
    </div>
  )
}