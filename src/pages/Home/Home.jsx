import React from 'react'
import CTA from '../CTA/CTA'
import { Link } from 'react-router-dom'
import KCC from '../../assets/KCC.jpeg'
import Bugesera from '../../assets/Bugesera.png'
import Nyabihu from '../../assets/Nyabihu.jpg';
import about from '../../assets/about.jpg';
import JH from '../../assets/ball.png'
import Prince from '../../assets/Prince_R.png'

import './Home.css'

const Home = () => {
  return (
    <>
      <div className='header'>
        <div className="text-box">
          <h1>Transforming Your Journey, Every Flight</h1>
          <p>Embark on a seamless and transformative travel experience with our FlyBetter application,<br />every flight
            becomes a catalyst for positive change.</p>
          <p><Link to="" className="hero-btn">Visit The Application To Know More</Link></p>
        </div>
      </div>
      <section class="headquarter">
        <h1>Our Headquarters</h1>
        <h3>Kigali, Rwanda</h3>
        <p>FlyBetter, a cutting-edge aviation solutions company, has established its headquarters in Kigali, Rwanda.
          Nestled in the heart of East Africa, Kigali provides an ideal hub for FlyBetter's operations, fostering
          innovation and growth in the aviation sector. The choice of this strategic location reflects the company's
          commitment to contributing to the region's aviation landscape and leveraging the vibrant business
          environment in Rwanda. With its headquarters in Kigali, FlyBetter is poised to propel advancements in air
          travel, demonstrating the potential for technological excellence and global collaboration in the heart of
          Africa.</p><br />
        <h3>Our other quarters</h3>
        <p>FlyBetter application has expanded its presence with additional quarters in Bugesera and Nyabihu, Rwanda.
          This strategic move reflects the company's commitment to reaching diverse regions and communities, providing
          enhanced accessibility to its services. With offices now established in Bugesera and Nyabihu, FlyBetter aims
          to not only broaden its geographical footprint but also to better understand and cater to the unique needs
          and preferences of residents in these areas. The expansion aligns with FlyBetter's mission to seamlessly
          connect people and places, fostering convenience and efficiency in air travel across Rwanda.</p>

        <div class="row">
          <div class="headquarter-col">
            <img src={KCC} />
            <div class="layer">
              <h3>KIGALI</h3>
            </div>
          </div>
          <div class="headquarter-col">
            <img src={Bugesera} />
            <div class="layer">
              <h3>BUGESERA</h3>
            </div>
          </div>
          <div class="headquarter-col">
            <img src={Nyabihu} />
            <div class="layer">
              <h3>NYABIHU</h3>
            </div>
          </div>
        </div>

      </section>
      <section className=''>
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
      </section>
      <section class="testimonials">
        <h1>What People Say</h1>
        <p>Explore what our users are saying about the FlyBetter application. Real experiences, genuine reviews—your
          journey, our story.</p>

        <div class="row">
          <div class="testimonial-col">
            <img src={Prince} />
            <div>
              <p>"Seeing the FlyBetter project prosper, was really exciting. The concept, a good idea that I had
                once, has come to life as a nice project. Initially, it was something I was planning to do, and
                now witnessing it in action, I must say, it's quite good. FlyBetter is more than just an idea;
                it's a realization, a testament to the potential I envisioned once."</p>
              <h3>@Prince_R</h3>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
          <div class="testimonial-col">
            <img src={JH} />
            <div>
              <p>"FlyBetter transformed my travel experience to Europe, saving me money with excellent flight
                options. The app's real-time tracking and user-friendly interface streamlined everything on my
                phone. No drawbacks—smooth and exceptional. Four stars for FlyBetter's outstanding service!"</p>
              <h3>@JH</h3>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </section>
      <section class="cta">
        <h1>Use Our Services<br />Wherever You Are In The world</h1>
        <a href="contact.html" class="hero-btn">CONTACT US</a>

      </section>
    </>
  )
}

export default Home