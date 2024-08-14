import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div>
        <section className='sub-service'>
            <div>
                <h1>Our Services</h1>
            </div>
        </section>
        <section class="service">
        <h1>Services We Offer</h1>
        <p>Explore the diverse capabilities of our application. From giving our users real-time flight updates to
            facilitating direct communication with airline quarters during your flight, we are dedicated to providing a
            user-centric experience. Our application is designed to meet your specific needs with efficiency and
            simplicity, ensuring you enjoy a seamless and tailored digital experience.</p>

        <div class="row">
            <div class="service-col">
                <h3>SwiftFly Navigator</h3>
                <p><i>Your Ticket to Effortless Travel:</i> SwiftFly Navigator provides a streamlined and user-friendly
                    platform for booking plane tickets. Enjoy a seamless booking experience, competitive prices, and
                    user-centric features that redefine the way you plan your journey.</p>
            </div>
            <div class="service-col">
                <h3>FlightTime Alert Pro</h3>
                <p><i>Stay Ahead of Your Journey:</i> Receive real-time flight updates, including boarding reminders,
                    delays, and precise arrival times. FlightTime Alert Pro keeps you informed, ensuring a stress-free
                    and punctual travel experience.
                </p>
            </div>

            <div class="service-col">
                <h3>AirCare Connect</h3>
                <p><i>In-Flight Support at Your Fingertips:</i> AirCare Connect facilitates direct communication with
                    airline quarters during your flight. Whether you have questions, need assistance, or want to report
                    an issue, our service ensures you're connected, enhancing your in-flight experience with peace of
                    mind.</p>
            </div>
        </div>

    </section>
    </div>
  )
}

export default Services