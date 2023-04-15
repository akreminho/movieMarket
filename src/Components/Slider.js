import React from 'react'
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import play from '../play.png'
import img1 from '../wickslide.jpg';
import img2 from '../penguinslide.jpg';
import img3 from '../marvelsslide.jpg';
import wick from '../wick.jpg'
import penguin from '../penguin.jpg'
import marvels from '../marvels.jpg'
const Slider = () => {
    return (
        <div className='slidesection'>
            <div className='slides'>
                <Carousel>
                    <Carousel.Item>
                        <img className='slide_img'
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Wick 4</h3>
                            <p>John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.

                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='slide_img'
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>The Penguin</h3>
                            <p>It follows the transformation of Oswald Cobblepot from a disfigured nobody to a noted Gotham gangster.

                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='slide_img'
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <div>
                            <h3>The Marvels</h3>
                            <p>
                                Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.
                            </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <h1 className='next_Movie'>Next</h1>
                <div className='movies_cards'>
                    <div className='card'>
                        <img className='card_img' src={wick} alt='404'/>
                        <div className='description'>
                            <img className='play' src={play} alt='404'/>
                            <span>2:50</span>
                            <h2 className='title_mov'>Wick 4</h2>
                            <p>watch the teaser</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card_img' src={penguin} alt='404' />
                        <div className='description'>
                            <img className='play' src={play} alt='404'/>
                            <span>3:00</span>
                            <h2 className='title_mov'>The penguin</h2>
                            <p>watch the teaser</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card_img' src={marvels} alt='404' />
                        <div className='description'>
                            <img className='play' src={play} alt='404'/>
                            <span>1:50</span>
                            <h2 className='title_mov'>Marvels</h2>
                            <p>watch the teaser</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Slider
