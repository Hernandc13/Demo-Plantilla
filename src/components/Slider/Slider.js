function Slider() {
    return (
     <div className=" contenedorPrincipal">
             <div className="contenedor-principal">
            <h1>Slider</h1>
            <section className="wrapper">
                <i className="fa-solid fa-arrow-left button" id="prev"></i>
                <div className="image-container">
                    <div className="carousel">
                        <img src="https://www.subitus.com/wp-content/uploads/2019/07/blond-cellphone-coffee-1076814.jpg" alt="" />
                        <img src="https://www.subitus.com/wp-content/uploads/2020/04/e-learning_servicios.jpeg" alt="" />
                        <img src="https://www.biossmann.com/statics/images/recursos_humanos1.jpg" alt="" />
                        <img src="https://www.biossmann.com/statics/images/proposito.jpg" alt="" />
                    </div>
                    <i className="fa-solid fa-arrow-right button" id="next"></i>
                </div>
            </section>
        </div>
     </div>
       

    );
}





