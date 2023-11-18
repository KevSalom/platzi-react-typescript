'use client'
import { ImageFox } from "@/Components/ImageFox"
import { useState } from "react"

const random = (): number => Math.floor(Math.random()*123)+1
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

type ImageItem = {id:string, url:string}
export default function Home() {

  const [images, setImages] = useState<Array<ImageItem>>([])


  const handleNewFox:React.MouseEventHandler<HTMLButtonElement> = ()=>{
    const newImageItem:ImageItem = {id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`}
    setImages([
      ...images, newImageItem
    ])
  }
  return (
    <main>
      <h1 className="underline font-bold text-slate-500" >Hola Platzi =)</h1>
      <button onClick={handleNewFox} className="bg-sky-600 rounded-md p-2">Agragar un nuevo Zorro</button>
      {images.map(({url, id}) => <div key={id} className="p-4"><ImageFox  imagen={url}/></div>)}
    </main>
  )
}
