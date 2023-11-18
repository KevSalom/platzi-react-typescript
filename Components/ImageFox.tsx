import { useRef, useEffect, useState } from "react";

type Props = {
  imagen: string;
};

// Forma explícita "JSX.Element"
export const ImageFox = ({ imagen }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const backGroound: string =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  const [src, setSrc] = useState(backGroound);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(imagen);
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect;
    };
  }, []);

  return (
    <div>
      <img
        src={src}
        ref={node}
        width={450}
        height="auto"
        className="rounded-md bg-slate-100"
      />
    </div>
  );
};

// // Forma implícito (JSX:Element)**
// const Implicito = () => {
// 	return (
// 		<div>
// 			<h1>Hola!</h1>
// 		</div>
// 	)
// }

// // Usando tipos de React "FunctionComponent"
// const MyComponjjjent: FunctionComponent = () => {
// 	return (
// 		<div>
// 			<h1>Hola!</h1>
// 		</div>
// 	)
// }

// // Usando tipos de React "FC"
// const MyCompojnent: FC = () => {
// 	return (
// 		<div>
// 			<h1>Hola!</h1>
// 		</div>
// 	)
// }
