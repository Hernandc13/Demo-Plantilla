
function App() {
  const components = [
    {
      component: <ListaDeCursos />,
      id: 1,
      titulo: 'Mis Cursos'
    },
    {
      component: <Preguntas />,
      id: 2,
      titulo:'Curso React'
    }
  ];

  return (
    <div>
    {components.map((component) => ( 
       <React.Fragment key={component.id}>
      <div className="aplicacion-cursos">
      <div className='cursos-lista-principal'>
   <h1> {component.titulo}</h1>
   {component.component}
 </div>
</div>
</React.Fragment>
    ))}
    </div>



  
  );
}
