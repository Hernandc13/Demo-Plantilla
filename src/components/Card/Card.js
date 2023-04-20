function Card() {
    return (
        <div className="contenedorPrincipal">
            <div className="contenedor-principal">
            <h1>Card</h1>

            <section className="containerCard">
                <div className="cardn">
                    <div className="image">
                        <img src={listImagesCard[0].imagen} alt="" />
                    </div>
                    <h3>{listImagesCard[0].title}</h3>
                    <p>{listImagesCard[0].texto}</p>
                </div>
                <div className="cardn">
                    <div className="image">
                        <img src={listImagesCard[1].imagen} alt="" />
                    </div>
                    <h3>{listImagesCard[1].title}</h3>
                    <p>{listImagesCard[1].texto}</p>
                </div>
                <div className="cardn">
                    <div className="image">
                        <img src={listImagesCard[2].imagen} alt="" />
                    </div>
                    <h3>{listImagesCard[2].title}</h3>
                    <p>{listImagesCard[2].texto}</p>
                </div>
                <div className="cardn">
                    <div className="image">
                        <img src={listImagesCard[3].imagen} alt="" />
                    </div>
                    <h3>{listImagesCard[3].title}</h3>
                    <p>{listImagesCard[3].texto}</p>
                </div>
            </section>

        </div>

        </div>
        
    );
}









