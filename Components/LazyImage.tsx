import { useRef, useEffect, useState, type ImgHTMLAttributes } from "react";

type Props = {
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};

type NativeImage = ImgHTMLAttributes<HTMLImageElement>;

type LazyImage = Props & NativeImage;

// Forma explícita "JSX.Element"
export const LazyImage = ({
  src,
  onLazyLoad,
  ...OtherAtrbitrus
}: LazyImage): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const backGroound: string =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  const [currentSrc, setCurrentSrc] = useState(backGroound);
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLazyLoaded) {
          setCurrentSrc(src);
          if (onLazyLoad && node.current) onLazyLoad(node.current);
          setIsLazyLoaded(true);
        }
      });
    });

    if (node.current && !isLazyLoaded) {
      observer.observe(node.current);
    } else {
      observer.disconnect();
    }

    return () => {
      observer.disconnect();
    };
  }, [isLazyLoaded]);

  return (
    <div>
      <img src={currentSrc} ref={node} {...OtherAtrbitrus} />
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
