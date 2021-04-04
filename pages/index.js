import { useState } from 'react';

function Home(){
    return (
        <div>
            <h1>Página Inicial</h1>
            <h3>Bem vindo a página inicial da test-app!</h3>
            <Contador />
        </div>
    )
    

}

function Contador(){

    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )

    
}

export default Home