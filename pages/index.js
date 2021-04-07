import Link from 'next/link'; 
import { useState } from 'react';

function Home(){
    return (
        <div>
            <h1>Página Inicial</h1>
            <h3>Bem vindo a página inicial da test-app!</h3>
            <Contador />

            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
            <hr></hr>
            <Link href="/tempo">
                <a>Acessar página Tempo</a>
            </Link>
           
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