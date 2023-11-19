"use client";
import { LazyImage } from "@/Components/LazyImage";
import { useState,  } from "react";
import { random } from "lodash";

const myRandom = () => random(1, 122);
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};


export default function Home() {
  const [images, setImages] = useState<Array<IFoxItem>>([]);

  const handleNewFox: React.MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: IFoxItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`,
    };
    setImages([...images, newImageItem]);
  };
  return (
    <main>
      <h1 className="underline font-bold text-slate-500">Hola Platzi =)</h1>
      <button onClick={handleNewFox} className="bg-sky-600 rounded-md p-2">
        Agragar un nuevo Zorro
      </button>
      {images.map(({ url, id }) => (
        <div key={id} className="p-4">
          <LazyImage
            src={url}
            width={300}
            height="auto"
            className="rounded-md bg-slate-100"
            onLazyLoad={(img)=>console.log('holis')}
          />
        </div>
      ))}
    </main>
  );
}
