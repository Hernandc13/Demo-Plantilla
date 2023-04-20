const d = document;
const $q = d.querySelectorAll.bind(d);
const $g = d.querySelector.bind(d);
const $prev = $g(".prev");
const $next = $g(".next");
const $list = $g(".carousel__list");
let auto;
let pauser;

const getActiveIndex = () => {
    const $active = $g("[data-active]");
    return getSlideIndex($active);
}

const getSlideIndex = ($slide) => {
    return [...$q(".carousel__item")].indexOf( $slide );
}

const prevSlide = () => {
    const index = getActiveIndex();
    const $slides = $q(".carousel__item");
    const $last = $slides[$slides.length-1];
    $last.remove();
    $list.prepend($last);
    activateSlide( $q(".carousel__item")[index] );
}
const nextSlide = () => {
    alert('entre');
    const index = getActiveIndex();
    const $slides = $q(".carousel__item");
    const $first = $slides[0];
    $first.remove();
    $list.append($first);
    activateSlide( $q(".carousel__item")[index] );
}

const chooseSlide = (e) => {
    const max = (window.matchMedia("screen and ( max-width: 600px)").matches) ? 5 : 8;
    const $slide = e.target.closest( ".carousel__item" );
    const index = getSlideIndex( $slide );
    if ( index < 3 || index > max ) return;
    if ( index === max ) nextSlide();
    if ( index === 3 ) prevSlide();
    activateSlide($slide);
}

const activateSlide = ($slide) => {
    if (!$slide) return;
    const $slides = $q(".carousel__item");
    $slides.forEach(el => el.removeAttribute('data-active'));
    $slide.setAttribute( 'data-active', true );
}

const autoSlide = () => {
    nextSlide();
}

const pauseAuto = () => {
    clearInterval( auto );
    clearTimeout( pauser );
}

const handleNextClick = (e) => {
    pauseAuto();
    nextSlide(e);
}
const handlePrevClick = (e) => {
    pauseAuto();
    prevSlide(e);
}
const handleSlideClick = (e) => {
    pauseAuto();
    chooseSlide(e);
}

const startAuto = () => {
    auto = setInterval( autoSlide, 3000 );
}

startAuto();

$next.addEventListener( "click", handleNextClick );
$prev.addEventListener( "click", handlePrevClick );
$list.addEventListener( "click", handleSlideClick );
$list.addEventListener( "pointerover", pauseAuto );
$list.addEventListener( "pointerout", startAuto );

function SliderColor() {
  return (
    <div className="contenedorPrincipal">
      <main id="appColor">
        <section class="carouselColor">
          <ul class="carousel__list">
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Anthony Lee</h2>
                  <h3 class="user__title">
                    Archetypal Professor of Recognition
                  </h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Alicia Chevalier</h2>
                  <h3 class="user__title">Corporate Usability Analyst</h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Nate Boucher</h2>
                  <h3 class="user__title">Customer Impact Officer</h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Leah Harris</h2>
                  <h3 class="user__title">Designer and Bandit</h3>
                </div>
              </div>
            </li>
            <li class="carousel__item" data-active="data-active">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1536766768598-e09213fdcf22?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Angelina Laurent</h2>
                  <h3 class="user__title">Oracle for Inspiration</h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Gal Gadot</h2>
                  <h3 class="user__title">Acting Designer and Consultant</h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Albert Sørensen</h2>
                  <h3 class="user__title">Neural Big Shot of Anticipation</h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1553514029-1318c9127859?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Candice Marchand</h2>
                  <h3 class="user__title">Mindful Realist of Motion Laws </h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1596813362035-3edcff0c2487?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Jennifer Salazar</h2>
                  <h3 class="user__title">Design Habitué</h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Antonin Dufour</h2>
                  <h3 class="user__title">Human-Centered Designer</h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Melissa Simon</h2>
                  <h3 class="user__title">
                    International Infrastructure Analyst
                  </h3>
                </div>
              </div>
            </li>
            <li class="carousel__item">
              <div class="carousel__box">
                <div class="carousel__image">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&amp;h=720&amp;q=80"
                    width="480"
                    height="720"
                  />
                </div>
                <div class="carousel__contents">
                  <h2 class="user__name">Brandon Murray</h2>
                  <h3 class="user__title">Central Functionality VP</h3>
                </div>
              </div>
            </li>
          </ul>
          <div class="carousel__nav"></div>
        </section>
      </main>
    </div>
  );
}
