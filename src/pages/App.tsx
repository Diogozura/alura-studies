import React, { useState } from 'react';
import Lista from '../components/Lista';
import Formulario from '../components/Formulario';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro/>
    </div>
  );
}

export default App;
