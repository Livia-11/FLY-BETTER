import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <section class="footer">
        <h4>About Us</h4>
        <p>Stay in the loop with FlyBetter by following us on our social media platforms! <br />We're excited to share
            updates, exclusive offers, and engaging content with our fantastic community. <br />Connect with us to be a
            part of our journey in revolutionizing air travel. Your support means the world to us,<br />and we can't wait
            to soar to new heights together!</p>
        <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
        <p>Made with <i class="fa-solid fa-heart"></i> by BetFlights</p>
    </section>
    </div>
  )
}

export default Footer