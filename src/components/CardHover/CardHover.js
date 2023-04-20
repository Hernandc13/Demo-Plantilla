function CardHover() {
    return (
        
        <div className="contenedorPrincipal">
          <ul class="cardsw">
  <li>
    <a href="" class="cardw">
      <img src={listCardHover[0].imagen} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={listCardHover[0].imagen} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{listCardHover[0].name}</h3>            
            <span class="card__status">{listCardHover[0].time}</span>
          </div>
        </div>
        <p class="card__description">{listCardHover[0].texto}</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="cardw">
      <img src={listCardHover[1].imagen} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src={listCardHover[1].imagen} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{listCardHover[1].name}</h3>
            <span class="card__status">{listCardHover[1].time}</span>
          </div>
        </div>
        <p class="card__description">{listCardHover[1].texto}</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="cardw">
      <img src={listCardHover[2].imagen} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={listCardHover[2].imagen} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{listCardHover[2].name}</h3>
               <span class="card__status">{listCardHover[2].time}</span>
          </div>
        </div>
        <p class="card__description">{listCardHover[2].texto}</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="cardw">
      <img src={listCardHover[3].imagen} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src={listCardHover[3].imagen} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{listCardHover[3].name}</h3>
            <span class="card__status">{listCardHover[3].time}</span>
          </div>          
        </div>
        <p class="card__description">{listCardHover[3].texto}</p>
      </div>
    </a>
  </li>    
</ul>
        </div>

    );
}
