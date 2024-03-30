


//          G Fernando Treviño Estrada
//          MArzo 30 del 2024, Michigan USA



//Creando un contexto
const NotasContext = React.createContext(null);



//Funcion de formulario
function Seccionformulario() {



    const [notas, setNotas] = React.useContext(NotasContext);

    function handleNotas() {

        const titulo = document.getElementById('titulo');
        const descripcion = document.getElementById('descripcion');
        const k = notas.length + 1;

       

        //Actualizar estado
        setNotas([...notas, ...[{ "id": k, "titulo": titulo.value, "descripcion": descripcion.value }]]);

       

        //Limpiar inputs
        titulo.value='';
        descripcion.value='';

    }

    return (
        <div className="formulario">
            <label className="etiquetas">Titulo:
                <input typ="text" className='entrada' name="titulo" id="titulo"></input>
            </label>

            <label className="etiquetas">Descripción:
                <input typ="text" className='entrada' name="descripcion" id="descripcion"></input>
            </label>
            <button className="boton" onClick={handleNotas}>Agregar Tarjeta</button>
        </div>
    );
}



//============================   Contenedor Recopila informacion =====================================
function UseContenedorDeNotas() {
    const [notas] = React.useContext(NotasContext);


    return (
        <div className="contenedor-notas">

            <VistaDeNota notas={notas} />

        </div>);
}


//===========================================   Vista de nota renderiza cada nota   =====================
function VistaDeNota({ notas }) {

    return (
        <ul>{notas.map(nota => (<li key={nota.id} className="item-list"><h4>{nota.titulo}</h4>
            <p>{nota.descripcion}</p>
            <hr />

        </li>))}
        </ul>
    );


}

//==============================  Aplicacion principal =====================================




function App() {


    const ListaDeNotas = [
        {
            "id": "1",
            "titulo": "Estudiar en AcademiaX",
            "descripcion": "Completar el curso de React"
        }
    ];




    const [notas, setNotas] = React.useState(ListaDeNotas);


    return (

        <NotasContext.Provider value={[notas, setNotas]}>
            <div className="main-container">
                <h1>Notas</h1>
                <Seccionformulario />
                <UseContenedorDeNotas />


            </div>
        </NotasContext.Provider>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));