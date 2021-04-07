import Link from 'next/link';
function Sobre(){
    return (
        <div>
            <h1>Página Sobre</h1>
            <h3>Bem vindo a sobre da test-app!</h3>
            
            <Link href="/">
                <a>Acessar página Home</a>
            </Link>
            
        </div>
    )
    

}

export default Sobre