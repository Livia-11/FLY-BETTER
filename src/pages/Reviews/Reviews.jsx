import React from 'react'
import './Reviews.css'
import Prince from '../../assets/Prince_R.png'
import JH from '../../assets/ball.png'

const Reviews = () => {
  return (
    <div>
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

    </div>
  )
}

export default Reviews