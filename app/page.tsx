'use client'
import { ImageFox } from "@/Components/ImageFox"
import { useState } from "react"

const random = (): number => Math.floor(Math.random()*123)+1

export default function Home() {

  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`
  ])

  return (
    <main>
      <h1 className="underline font-bold text-slate-500" >Hola Platzi =)</h1>
      {images.map((image, index) => <div key={index} className="p-4"><ImageFox  imagen={image}/></div>)}
    </main>
  )
}
