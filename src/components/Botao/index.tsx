import React from 'react';
import style from './Botao.module.scss'

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}


export function Botao({onClick, type, children}:Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}
        >
            {/* {this.props.texto} */}
            {children}
        </button>
    )
}
 


// Maneira antiga de criar components

// class Botao extends React.Component<{texto : string}> {
// class Botao1 extends React.Component<any,any,{
//     type?: "button" | "submit" | "reset" | undefined,
//     onClick?: () => void
// }> {
//     render() {
//         const {type = "button" , onClick} = this.props
//         return (
//             <button onClick={onClick} type={type} className={style.botao}
//             >
//                 {/* {this.props.texto} */}
//                 {this.props.children}
//             </button>
//         )
//     }
// }

export default Botao