import type { FunctionComponent, FC } from "react"


type Props = {
  imagen:string
}

// Forma explícita "JSX.Element"
export const ImageFox = ({imagen}:Props): JSX.Element => {

  
	return (
		<div>
			<img src={imagen} width={450} className="rounded-md"/>
		</div>
	)
}




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
