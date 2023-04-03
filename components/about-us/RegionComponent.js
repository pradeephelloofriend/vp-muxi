import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
const RegionComponent = () => {
    const router=useRouter()
    //console.log(router)
  return (
    <div>
        <h1>VILLAGE MAP, MAUXI</h1>
        <div className='region-Image'>
            <Image src='https://res.cloudinary.com/depg2aab2/image/upload/v1680093647/vp/mauxi/mauxipanchayat_gnasid.jpg' alt='' height={1596} width={1920}/>
        </div>
        <h1>Ward Boundary Map</h1>
        <div className='region-Image'>
            <Image src='https://res.cloudinary.com/depg2aab2/image/upload/v1680093875/vp/mauxi/roadmap_ucplbb.jpg' alt='' height={1596} width={1920}/>
        </div>
      



    </div>
  )
}

export default RegionComponent