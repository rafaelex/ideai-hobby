function Tempo(props) {
    
    console.log('> Passando pelo Frontend')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();

    return(
        <div>
            <div>{dynamicDateString} (dinâmico...)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log('> Passando pelo getStaticProps();');

    const staticDate = new Date();
    const staticDateString = staticDate.toUTCString();

    return{
        props: { staticDateString },
        revalidate: 1
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;