import React from 'react'

const ProfileComponent = () => {
  return (
    <>
    <section class="wrapper image-wrapper bg-image bg-overlay profile-section" >
      <div class="container py-12">
        <div class="row">
          <div class="col-lg-5">
            <div className='pf-img-block'>
                <img src='https://res.cloudinary.com/depg2aab2/image/upload/v1680159430/vp/mauxi/mauxipanchayat-removebg-preview_yxc9go.png' alt='mauxi map'/>
            </div>
            
          </div>
          <div className='col-7'>
            <div className='pf-content-block '>
            <h4 class="display-6 mb-0 text-white">Mauxi Profile</h4>
            <ul className='pf-ul text-white mt-3'>
              <li>Block / Taluka :
                <p>Sattari</p>
              </li>
              <li>District :
                <p>North Goa</p>
              </li>
              <li>State:
                <p>Goa</p>
              </li>
              <li>Pincode :
                <p>403506</p>
              </li>
            </ul>
            <ul className='pf-ul text-white mt-3'>
              <li>Area :
                <p>2795.34  Hac.</p>
              </li>
              <li>Population :
                <p>4533</p>
              </li>
              <li>Households :
                <p>970</p>
              </li>
              
            </ul>
            <ul className='pf-ul pf-other text-white text-center mt-3'>
              <li className='pf-bg-orange'>Assembly Constituency<p>Poriem</p></li>
              <li className='pf-bg-blue'>Parliament Constituency<p>North Goa</p></li>
              <li className='pf-bg-merun'>Nearest Town <p>MAUXI</p></li>
            
            </ul>  
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
    </>
  )
}

export default ProfileComponent