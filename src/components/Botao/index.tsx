import React from 'react';
import style from './Botao.module.scss'
// Maneira antiga de criar components 


// class Botao extends React.Component<{texto : string}> {
class Botao extends React.Component<any,any,{
    type?:"button" | "submit" | "reset" | undefined
}> {
    render() {
        const {type = "button"} = this.props
        return (
            <button type={type} className={style.botao}
            >
                {/* {this.props.texto} */}
                {this.props.children}
            </button>
        )
    }
}

export default Botao