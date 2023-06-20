const configCurso = [
  {
    id: 1,
    componente: <Ahorcado />,
    titulo: "Titulo de prueba",
    estilos: {
      wave: false,
      color: "#0A131E",
    },
  },
  {
    id: 2,
    componente: <Carrusel />,
    titulo: "Titulo de prueba 2",
    estilos: {
      wave: true,
      color: "#0099ff",
    },
  },
  {
    id: 3,
    componente: <Acordeon />,
    titulo: "Titulo de prueba 3",
    estilos: {
      wave: false,
      color: "#0A131E",
    },
  }
  ,
  {
    id: 4,
    componente: <Acordeon />,
    titulo: "Titulo de prueba 3",
    estilos: {
      wave: false,
      color: "#0A131E",
    },
  }
  ,
  {
    id: 5,
    componente: <Acordeon />,
    titulo: "Titulo de prueba 3",
    estilos: {
      wave: false,
      color: "#0A131E",
    },
  }
  ,
  {
    id: 6,
    componente: <Acordeon />,
    titulo: "Titulo de prueba 3",
    estilos: {
      wave: false,
      color: "#0A131E",
    },
  }
];
  
function NuevoCurso() {
  //Estado para scroll
    const [scrollTop,setScrollTop]=React.useState(0);
   // const onScroll= () =>{
   //   const winScroll=document.documentElement.scrollTop;
   //   const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
   //   const scrolled = (winScroll / height) *100;
   //   setScrollTop(scrolled.toFixed(0));
   // };

  //useEffect para scroll
    // React.useEffect(() => {
    //  window.addEventListener("scroll",onScroll);
    //  return () => window.removeEventListener("scroll",onScroll)
    
//},[]);
  
  //funcionalidad click
  function Terminar(){
     $(document).on('click', 'button', function(event) {
      //Codigo para buscar cuantos componentes existen.
     const total = document.querySelectorAll('#DivGeneral .componente').length;
      let id = this.id;
      console.log("Encontre:"+ total +' '+ "Componentes"+" :"+ id);
      const scrolled = (id / total) *100;
      setScrollTop(scrolled.toFixed(0));
   
    });
    
  }
  const listaComponentes = configCurso.map((comp) => (
    <section key={comp.id}>

      {comp.estilos.wave && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={comp.estilos.color}
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      )}
      <div id="DivGeneral"
        className="contNuevoCursoComponent"
        style={{ background: comp.estilos.color }}
      >
        <h2 className="titleNuevoCurso">{comp.titulo}</h2>
        <div className="componente">
        {comp.componente}
        </div><br/>
        <center>
        <button className="btnTermiando"  id={comp.id} onClick={Terminar}>Terminar {comp.id}</button>
        </center>
      </div>
      {comp.estilos.wave && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={comp.estilos.color}
            fillOpacity="1"
            d="M0,96L40,128C80,160,160,224,240,250.7C320,277,400,267,480,229.3C560,192,640,128,720,133.3C800,139,880,213,960,240C1040,267,1120,245,1200,213.3C1280,181,1360,139,1400,117.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      )}
    </section>
  ));

  return <div className="contenedorPrincipal">
     <div className="progressMainWrapper">
           <div className="progressMainStyle" style={{width:`${scrollTop}%`}}>
               <h4>{`${scrollTop}%`}</h4> 
           </div>
     </div>
    {listaComponentes}
    </div>;
}
