import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss'
import {v4 as uuidv4} from 'uuid'

// Maneira antiga de criar components 

class Formulario extends React.Component<{
    setTarefas:React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        tarefa: "",
        tempo: "00:00",
        id: uuidv4()
    }
    // evitar comportamento padrão react- typeScript 
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false
                }
            ]
        )
        this.setState({
            tarefa: "",
            tempo: "00:00"
       })
    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name='tarefa'
                        id='tarefa'
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa:evento.target.value})}
                        placeholder='O que você quer estudar'
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                    <input
                        type="time"
                        step='1'
                        name='tempo'
                        value={this.state.tempo}
                        onChange={evento =>{this.setState({...this.state, tempo: evento.target.value})}}
                        id='tempo'
                        min='00:00:00'
                        max='01:30:00' 
                        required
                    />    
                </div>
                <pre>{ JSON.stringify (this.state, null, 2)}</pre>
                {/* <Botao
                texto='Adicionar'
                /> */}
                <Botao type="submit">Adicionar</Botao>
                
            </form>
        )
    }
}

export default Formulario