import React from 'react'
import {Card} from 'antd'
const OtherLinksComponent = () => {
  return (
    <section className="wrapper ol-section " >
        <div className="container-fluid py-5">
            <div className='row'>
                <div className='col-3'>
                    <Card className='ol-card ol-hos'
                    title={<b>Hospitals in Mauxi,Satari</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-white'>
                                <li>Health Centre Kopardem</li>
                                <li>Health Centre Zarme</li>
                                <li>Rural Medical Dispensary ;Keri</li>
                                <li>Community Health Centre, Valpoi</li>
                                <li>Valpoi Manipal Centre</li>
                                <li>Health Center Poriem</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-tur'
                    title={<b>Tourist Places Near By Mauxi</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-white'>
                                <li>Shivling Waterfall Pali</li>
                                <li>Bramha karmali waterfall</li>
                                <li>Zarme Waterfall</li>
                                <li>Dabem Waterfall</li>
                                <li>Ghodeshwar Waterfall </li>
                                
                                <br/>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-park'
                    title={<b>Local Parks in Mauxi,Satari</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-white'>
                                <li>Children's Park Rudreshwar Colony,Sanquelim</li>
                                <li>WaterFall Gho Gho</li>
                                <li>HBC Children Park</li>
                                <li>Laudato Si,Velus</li>
                                <li>BICHOLIM WALKING PARK</li>
                                <li>Chatrapati Shivaji Maharaj Park Valpoi</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-office'
                    title={<b>Government Offices near Mauxi</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-white'>
                                <li>BDO, Valpoi</li>
                                <li>Govt. Cattle Breeding Farm</li>
                                <li>GOA DAIRY MILK & MILK PRODUCTS</li>
                                <li>Zonal Agriculture office; Bicholim</li>
                                <li>The Goa State Agricultural Marketing</li>
                                <li>Village Panchayat Office Mauxi</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OtherLinksComponent