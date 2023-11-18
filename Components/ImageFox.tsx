import type { FunctionComponent, FC } from "react"


const random = (): number => Math.floor(Math.random()*123)+1

// Forma explícita "JSX.Element"
export const ImageFox = (): JSX.Element => {

    const URL:string = `https://randomfox.ca/images/${random()}.jpg`
	return (
		<div>
			<img src={URL} width={450} className="rounded-md"/>
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
