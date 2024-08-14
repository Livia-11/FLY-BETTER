import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
const About = () => {
    return (
        <div>
            <section className='sub-header'>
                <div>
                    <h1>About Us</h1>
                </div>
            </section>
                <section className="about-us">

                    <div class="row">
                        <div class="about-col">
                            <h1>FlyBetter: Where every flight becomes an exploration in seamless travel</h1>
                            <p>At FlyBetter, we transcend the ordinary, redefining air travel with a commitment to excellence. Each flight with us is an exploration in seamless travel, where comfort meets efficiency. As we soar into new horizons, we invite you to join the FlyBetter experience—where every journey is an extraordinary adventure.</p>
                            <a href="" class="hero-btn red-btn">EXPLORE NOW</a>
                        </div>
                        <div class="about-col">
                            <img src={about} />
                        </div>
                    </div>
                </section>
        </div>

    )
}

export default About