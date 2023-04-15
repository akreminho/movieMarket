import React from 'react'
import '../App.css'

const Moviecard = ({el}) => {
  return (
    <div>
                      <div >
                    <div class="flip-card-container" style={{hue: "220"}}>
                        <div class="flip-card">
                            <div class="card-front">
                                <figure>
                                    <div class="img-bg"></div>
                                    <img src={el.image} alt='404'/>
                                    <figcaption>{el.name}</figcaption>
                                </figure>

                                <ul className='date_type'>
                                    <li>{el.type}</li>
                                    <li>{el.date}</li>

                                </ul>
                            </div>

                            <div class="card-back">
                                <figure>
                                    <div class="img-bg"></div>
                                    <img src={el.image} alt='404'/>
                                </figure>

                                <button>Watch It</button>

                            </div>

                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Moviecard
