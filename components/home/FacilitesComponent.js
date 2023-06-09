import React from 'react'
import { Tabs, Card } from 'antd';
const { TabPane } = Tabs;
const { Meta } = Card;
import Image from 'next/image'
import lib from '../../public/img/facility/lib.jpg'
import news from '../../public/img/facility/news.jpg'

import sports from '../../public/img/about/ground.jpg'


import Com from '../../public/img/about/nagoa.jpg'
const FacilitesComponent = () => {
    const [tabLayout, setTablLayout] = React.useState(null)
    const [imgWidth, setImgWidth] = React.useState(270)
    React.useEffect(() => {
        function handleResize() {
            if (window.matchMedia("(min-width: 1400px)").matches) {
                setTablLayout("left")
                setImgWidth(350)
                // Viewport is less or equal to 700 pixels wide
                //console.log("min-width: 1400px")
            } else if (window.matchMedia("(min-width: 1200px)").matches) {
                setTablLayout("left")
                setImgWidth(350)
                // Viewport is greater than 700 pixels wide
                //console.log("min-width: 1200px")
            } else if (window.matchMedia("(min-width: 992px)").matches) {
                setTablLayout("left")
                setImgWidth(350)
                //console.log("min-width: 1200px")
            } else if (window.matchMedia("(min-width: 768px)").matches) {
                setTablLayout("top")
                setImgWidth(360)
                //console.log("min-width: 768px")
            } else if (window.matchMedia("(min-width: 576px)").matches) {
                setTablLayout("top")
                setImgWidth(360)
                //console.log("min-width: 768px")
            } else {
                setTablLayout("top")
                setImgWidth(380)
                //console.log("min-width: 576px")
            }

        }
        handleResize()
        window.addEventListener('resize', handleResize)

    })
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-10 py-md-10 pb-md-10">
                    <div className="row">
                        <div className="col-md-12 col-lg-10 col-xl-10 mx-auto text-center">
                            <h4 className="display-6 mb-0 link-c-blue">Village Infrastructure</h4>
                            <p className="lead mb-5 px-md-16 px-lg-3">Developing, Strengthening the capacities and provide essential services to promote vibrant culture and tradition of community. Some of them are.</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className='facility-tab'>
                                <Tabs tabPosition={tabLayout}>
                                    <TabPane tab="Biodiversity" key="3">
                                        <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682593002/vp/mauxi/Jackfruit-min_alkz23.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-justify'> Goa Flora</h4>
                                                    <p className='mb-0'>The biodiversity of Goa's flora and fauna is truly remarkable. The region boasts a plethora of deciduous vegetation, including teak, sal, cashew, and mango trees. Additionally, the area is home to a variety of delicious fruits, such as jackfruits, mangos, pineapples, and blackberries. It's truly a sight to behold!</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682593049/vp/mauxi/Gaur-min_gai3wp.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-justify'> Goa Fauna</h4>
                                                    <p className='mb-0'>Foxes, wild boars, Gaurs, cheetal or spotted axis deer, sambar, barking deer, striped hyena, jackal, wild dog, mongoose, Leopard, sloth Bear, Indian porcupine, pangolin, slender loris and migratory birds are found in the jungles of Goa. The avifauna includes kingfishers, mynas and parrots </p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682593139/vp/mauxi/leopard-min_oiq3yp.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-justify'> Mhadei  Wildlife Sanctuary</h4>
                                                    <p className='mb-0'>The Mhadei Wildlife Sanctuary is a natural wonder that offers a unique opportunity to experience the beauty of India's wildlife. Its located in the Western Ghats, coupled with its rich biodiversity, makes it a must-visit destination for anyone seeking an unforgettable adventure.  </p>
                                                </Card>
                                            </div>
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122314/vp/nagoa/Education2-min_oukcj1.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> School</h4>
                                                    <p className='mb-0'>It gives me immense pleasure providing facilities of School for the Childrens of Nagoa.  
I appeal to all people to utilize services optimally. </p>
                                                </Card>
                                            </div> */}
                                        </div>
                                    </TabPane>

                                    <TabPane tab="Conservation Programme" key="4">
                                        <div className='row'>
                                            <div className='col-md-4 col-12 '>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682678547/vp/mauxi/bear_pcbweq.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Wildlife Conservation</h4>
                                                    <p className='mb-0'>Conservation of the rare and exotic fauna of the forest, sloth Bear, tigers, leopards, sambar, spotted deers, indian civet are some of the most popular species.</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682678548/vp/mauxi/waterbody_wrlidp.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Cleaning of waterfall and springs</h4>
                                                    <p className='mb-0'>Activities such as cleaning, desilting and restoring of water bodies were carried out.</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682678547/vp/mauxi/govan_mi7myk.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Govan</h4>
                                                    <p className='mb-0'>GoVan” is a brand developed by Goa State Biodiversity Board (GSBB) under its project with the 
                                                    aim of “Conservation of Biodiversity through livelihood interventions”
                                                 promoting traditional and  sustainable practices to protect the environment to promote sustainable development.</p>
                                                </Card>
                                            </div>
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161106/Untitled-3_mamr67.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>GYMNASIUM</h4>
                                                    <p className='mb-0'> well equipped gym with Proper Equipments so the people of nagoa take up Exercise as prime factor.</p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666243484/Untitled-7_gg9geh.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Sports Complex</h4>
                                                    <p className='mb-0'>Football playing field was recently constructed, to encourage people to take up health as a prime factor</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666243486/Untitled-6_spvb78.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Flood Lights</h4>
                                                    <p className='mb-0'>Flood Lights for Evening Football Games</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1668424356/vp/nagoa/Education%20facility/DSC_0124_njxx4g.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>GYM Equipments </h4>
                                                    <p className='mb-0'>well equipped gym with Proper Equipments so the people of nagoa take up Exercise as prime factor.</p>
                                                </Card>
                                            </div> */}
                                        </div>
                                    </TabPane>

                                    <TabPane tab="Education" key="5">
                                        <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671779413/vp/dongrim/facility/faclity3_wvv71n.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Govt. Primary School Mauxi</h4>
                                                    <p className='mb-0'>Provides education to children from the surrounding villages and is committed to providing quality education to all students. The school has a team of dedicated teachers who work tirelessly to ensure that every child receives the best possible education.</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682676897/vp/mauxi/mauxi-school-min_jmv5lr.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Govt. Primary School At Nagvem Village</h4>
                                                    <p className='mb-0'>It gives us immense pleasure providing facilities of School for the Childrens of Mauxi. I appeal to all people to utilize services optimally. </p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682676896/vp/mauxi/dabem-school-min_rnjyf8.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Govt. High School in Dabem Village</h4>
                                                    <p className='mb-0'>Committed to provide a top-notch education to all students inorder to achieve their goals and succeed in life. </p>
                                                </Card>
                                            </div>
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122314/vp/nagoa/Education2-min_oukcj1.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> School</h4>
                                                    <p className='mb-0'>It gives me immense pleasure providing facilities of School for the Childrens of Nagoa.  
I appeal to all people to utilize services optimally. </p>
                                                </Card>
                                            </div> */}
                                        </div>
                                    </TabPane>


                                    <TabPane tab="Community Services" key="1">
                                        <div className='row'>

                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682675192/vp/mauxi/mahadev-min_dpwizv.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> Mahadev Temple Of Mauxi</h4>
                                                    <p className='mb-0'>We want people of Mauxi to help hear God and develop an intimate Love Relationship with God. </p>
                                                </Card>
                                            </div>
                                            {/* <div className='col-md-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122315/vp/nagoa/Community_Services1-min_finaoy.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Community Services</h4>
                                                    <p className='mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122314/vp/nagoa/community_services_8-min_k0lu6x.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Wheelchair facilities</h4>
                                                    <p className='mb-0'>It gives us immense pleasure providing facilities of Wheelchair to the Disabled people of Nagoa.  </p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122313/vp/nagoa/community_services-min_wcu1hb.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Nagoa Church</h4>
                                                    <p className='mb-0'>We want people of Nagoa to help hear God and develop an intimate Love Relationship with Jesus Christ. </p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122313/vp/nagoa/community_services2-min_ofjlfd.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Nagoa Village Panchayat Parking Area</h4>
                                                    <p className='mb-0'>A Parking Lot is provided outside the nagoa village panchayat</p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161092/Untitled-1_uac0rk.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Health care center</h4>
                                                    <p className='mb-0'>A Sub Health centre for immediate medical attention was also inaugurated on the 12th of December 2013.</p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161091/Untitled-5_rnekch.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> LIBRARY</h4>
                                                    <p className='mb-0'>It gives us immense pleasure providing facilities of Library to the people of Nagoa.  
I appeal to all people to utilize services optimally. 
</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161096/Untitled-2_fymdb2.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Fair price shop</h4>
                                                    <p className='mb-0'>Village Panchayat Fair Price shop is put up so that people of nagoa get the essentials at very low price</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161100/Untitled-4_uyk1fv.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Panchayat LIBRARY</h4>
                                                    <p className='mb-0'>It gives me immense pleasure providing facilities of Library to the people of Nagoa.  
I appeal to all people to utilize services optimally. 
</p>
                                                </Card>
                                            </div> */}
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682675193/vp/mauxi/tali-min_bb9hfe.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Tali Of Zarme Village </h4>
                                                    <p className='mb-0'>Constructed to provide clean and Pure Drinking water to the people of Zarme
                                                    </p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682675192/vp/mauxi/toilet-min_kfolmm.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>DOP Community Toilet </h4>
                                                    <p className='mb-0'> DOP Community toilets helps to promote hygiene, sanitation, inclusivity and equity within a community.
                                                    </p>
                                                </Card>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Waste Management" key="2">
                                        <div className='row'>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682669907/vp/mauxi/bins_3_cqhnxg.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Waste Disposal</h4>
                                                    <p className='mb-0'>The Village Panchayat of Mauxi has recently acquired a Waste Collection Vehicle to efficiently gather waste from various villages within the panchayat. This initiative aims to promote cleanliness and hygiene in the area, while also reducing the negative impact of waste on the environment. </p>
                                                </Card>
                                            </div>

                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682669906/vp/mauxi/door-door_collection_o7rdcs.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Door to Door Garbage collection</h4>
                                                    <p className='mb-0'>Village Panchayat Mauxi- regular collection of waste from individual households from different villages of the panchayat to ensure that waste is disposed of in a safe and environmentally friendly manner.</p>
                                                </Card>
                                            </div>

                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1682669906/vp/mauxi/bins_1_wwqayh.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Waste Segregation </h4>
                                                    <p className='mb-0'>Village Panchayat Mauxi  Collect garbage into dry and wet waste from different villages of the panchayat</p>
                                                </Card>
                                            </div>






                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1668423456/vp/nagoa/Education%20facility/Biogas-3_oaz2km.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Bio Gas</h4>
                                                    <p className='mb-0'>A biogas plant is facilited to people of Nagoa that treats farm wastes or house wastes Material. This will produce Bio-Gas using anaerobic digesters.</p>
                                                </Card>
                                            </div> */}
                                        </div>
                                    </TabPane>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FacilitesComponent