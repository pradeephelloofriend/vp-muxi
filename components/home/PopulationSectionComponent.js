import React from 'react'
import Image from 'next/image'
import pic from '../../public/img/population/population.jpg'
const PopulationSectionComponent = () => {
  return (
      <>
          <section className="wrapper pop-section image-wrapper bg-auto no-overlay bg-image text-center" >
          <div className={'image-container'}>
          <Image className='image' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069502/vp/nagoa/population-min_gajuy7.jpg'} alt='' layout='fill' />
          </div>
            
              <div className="container-fluid pop-content">
                  <div className="row">
                      <div className="col-lg-6 col-xl-6 mx-auto">
                          {/*<h2 className="display-4 mb-3 text-center">Join Our Community</h2>*/}
                          <p className="mb-0 px-md-16 px-lg-3 text-black no-padding">"The voice of the people may be said to be God's voice, the voice of the Panchayat.When the panchayat raj is established, public opinion will do what violence can never do"</p>
                          <p className='mb-0'>--Mahatma Gandhi</p>
                      </div>
                      
                  </div>
                  <div className="row">
                    <div className="col-md-10 col-lg-9 col-xl-7 mx-auto">
                        <div className="row align-items-center counter-wrapper">
                            <div className="col-md-6 text-center mb-1">
                                <h3 className="counter counter-lg link-c-blue">7</h3>
                                <p>Wards</p>
                            </div>
                            
                            <div className="col-md-6 text-center mb-5">
                                <h3 className="counter counter-lg link-c-blue">4533</h3>
                                <p>Total Population</p>
                            </div>
                            
                            
                        
                        </div>
                            
                    </div>     
         
                </div>
              </div>
          </section>
      </>
  )
}

export default PopulationSectionComponent