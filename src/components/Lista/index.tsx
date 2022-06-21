import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from  './Lista.module.scss'
// Maneira mais nova e utilizada para criar components

interface Props {
    tarefas: ITarefa[]
    selecionaTarefa:(tarefaSelecionada:ITarefa)=> void
}


function Lista({tarefas, selecionaTarefa}:Props) {
    
    return (
        <aside className={ style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                    selecionaTarefa={selecionaTarefa}
                        key={item.id}

                        // usar isso apenas em escopo fechado, que tenha controle, em caso de API, pode dar erro 
                        {...item}
                        
                        // outro modo de passar os dados é declarando que vai ser passado 
                        // tarefa={item.tarefa}
                        // tempo={item.tempo}
                    />
                ))}
            </ul>
            
        </aside>
    )
}

export default Lista