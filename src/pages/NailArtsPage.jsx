import React from 'react'
import HeroNail from '../components/nailsalon/HeroNail'
import NailServices from '../components/nailsalon/NailServices'
import ServicesMenu from '../components/nailsalon/menu/ServicesMenu'
import Gallery from '../components/nailsalon/Gallery'
import DealsSection from '../components/deals/DealsSection'

const NailArtsPage = () => {
    return (
        <div className='w-full flex flex-col'>

            {/* hero section */}
            <HeroNail />

            {/* services */}
            <NailServices />

            {/* menu */}
            <ServicesMenu />

            {/* gallery  */}
            <Gallery />

            {/* <DealsSection /> */}


        </div>
    )
}

export default NailArtsPage