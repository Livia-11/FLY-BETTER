import React from 'react'
import './Headqts.css'
import KCC from '../../assets/KCC.jpeg'
import Bugesera from '../../assets/Bugesera.png'
import Nyabihu from '../../assets/Nyabihu.jpg'

const Headqts = () => {
  return (
    <div>
        <section class="headquarter">
        <h1>Our Headquarters</h1>
        <h3>Kigali, Rwanda</h3>
        <p>FlyBetter, a cutting-edge aviation solutions company, has established its headquarters in Kigali, Rwanda.
            Nestled in the heart of East Africa, Kigali provides an ideal hub for FlyBetter's operations, fostering
            innovation and growth in the aviation sector. The choice of this strategic location reflects the company's
            commitment to contributing to the region's aviation landscape and leveraging the vibrant business
            environment in Rwanda. With its headquarters in Kigali, FlyBetter is poised to propel advancements in air
            travel, demonstrating the potential for technological excellence and global collaboration in the heart of
            Africa.</p><br/>
        <h3>Our other quarters</h3>
        <p>FlyBetter application has expanded its presence with additional quarters in Bugesera and Nyabihu, Rwanda.
            This strategic move reflects the company's commitment to reaching diverse regions and communities, providing
            enhanced accessibility to its services. With offices now established in Bugesera and Nyabihu, FlyBetter aims
            to not only broaden its geographical footprint but also to better understand and cater to the unique needs
            and preferences of residents in these areas. The expansion aligns with FlyBetter's mission to seamlessly
            connect people and places, fostering convenience and efficiency in air travel across Rwanda.</p>

        <div class="row">
            <div class="headquarter-col">
                <img src={KCC}/>
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
    </div>
  )
}

export default Headqts