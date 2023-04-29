import React from 'react'
import Image from 'next/image';
import SocialLinkComponant from '../social/SocialLinkComponant'
import { Typography,Card,Divider } from 'antd';
//import s1 from '../../public/img/slider/slide1.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';
import SliderBottomBarComponent from './SliderBottomBarComponent';
import { getSliderHomeData } from '../../lib/api';

const {Title,Text}=Typography
SwiperCore.use([Pagination]);

// const Banner = ({sliderData,noticeData}) => {
const Banner = ({sliderData,noticeData}) => {
  console.log('sliderdata',sliderData)

  const [slData,setSldata]=React.useState(null)
   
  React.useEffect(()=>{
      //setLoading(true)
      let isApiSubscribed = true;
      async function fetchData() {
          
          const cData = await getSliderHomeData() //applo client   
          // 👇️ only update state if component is mounted
          if (isApiSubscribed) {
            console.log('cData',cData)
            setSldata(cData)
          }
        }
        
        fetchData()
        return () => {
          // cancel the subscription
          isApiSubscribed = false;
        };
  },[])
  //const Demo= sliderData.content.map(i=>i)
  console.log('slData',slData)
    return (
      <>
       <section className="wrapper ">
          <div className="container py-10 py-md-10 pb-md-10">
            <div className='row'>
              <div className='col-7'>
                <Card>
                <Swiper spaceBetween={30}  pagination={{
              "clickable": true
            }} className="mySwiper">
              {/*sliderData.map((i,index)=>
              <SwiperSlide key={index}>
                <img
                  alt="s1"
                  
                  src={i.image.url}
                />
                <div className="crousel_content container">
                  {/*<Title level={2} className="text-white">{i.caption_small}</Title>
                  <Title level={4} className="text-white mt-1">{i.caption_big}</Title>*
                </div>
              </SwiperSlide>
          )*/}
          {slData !==null ? slData.map((i, index) =>
          <SwiperSlide key={index}>
           <img
                  alt="s1"
                  
                  src={i.image !== null ? i.image.sourceUrl: <></>}
                />
          </SwiperSlide>
          
          ):<></>}
         
            </Swiper>
            <div className='slider-block mt-10'>
              <div class="caption1"><h1>Village Panchayat Mauxi</h1></div>
              <div className='slider-content'>
                <p>Mauxi village is located in Satari taluka of North Goa district in Goa, India. It is situated 3km away from sub-district headquarter Valpoi (tehsildar office) and 62km away from district headquarter Panaji. As per 2009 stats, Mauxi is the gram panchayat of Mauzi village.</p>
                <p>The total geographical area of village is 629.1 hectares. Mauxi has a total population of 1,375 peoples, out of which male population is 709 while female population is 666. Literacy rate of mauxi village is 73.75% out of which 81.95% males and 65.02% females are literate. There are about 295 houses in mauxi village. Pincode of mauxi village locality is 403506.</p>
                  <p>When it comes to administration, Mauxi village is administrated by a sarpanch who is elected representative of the village by the local elections. As per 2019 stats, Mauxi village comes under Poriem assembly constituency & North Goa parliamentary constituency. Satari is nearest town to mauzi village for all major economic activities.</p>
                  <p>The primary occupation of the locals in this area is agriculture. The main crop cultivated is paddy, while other crops such as bhat, nachani, kaji, keli, mirsang, supari, and coconut are also grown. The land is ploughed using draught cattle, which is a traditional method that has been used for generations.In addition to the main crops, there are also minor crops such as chillies, which make up about 10% of the total crops grown. Other vegetables such as red amaranth, radish, turnip, and ladies finger are also cultivated.</p>
              <Divider/>
              <div className='slider-help'>
                <div className='row'>
                  <div className='col-6'>
                    <h4>May I Help You</h4>
                    <a href="tel:+822374279" class="me-xl-8 text-c-blue"><i class="fa fa-mobile me-xl-1"></i>Call Us For Inquiry:  0832-2374279</a><br/>
                    <a href="mailto:hello@surety.com" class="me-xl-8 text-c-blue"><i class="fa fa-envelope-o me-xl-1"></i>Email:vpmauxisattarigoa@gmail.com</a>
                  </div>
                  <div className='col-6'>
                  <h4>Important Links</h4>
                  <ul class="icon-list bullet-theme">
                    <li><span><i class="uil uil-arrow-right"></i></span><span><a href="https://goaonline.gov.in" target=" ">Government of Goa</a></span></li>
                    <li><span><i class="uil uil-arrow-right"></i></span><span><a href="https://www.goa.gov.in/department/panchayats"target=" ">Directorate of Panchayat</a></span></li>
                    <li><span><i class="uil uil-arrow-right"></i></span><span><a href="gallery/photos-video?catCode=photos-video&desc=Photo’s+and+Video&title=Gallery&uri=%2Fphotos-and-video%2F&iscomplete=Yes"target=" ">Gallery</a></span></li>
                    <li><span><i class="uil uil-arrow-right"></i></span><span><a href="contact-us"target=" ">Contact Us</a></span></li>

                  </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
                </Card>
              
              </div>
              <div className='col-5'>
                <div className='pub-msg'>
                  <div className='pub-img'>
                    <img src='https://res.cloudinary.com/depg2aab2/image/upload/v1680153734/vp/mauxi/sarpimg2_xq9cnv.jpg' alt=''/>
                    <h1>Shri. Somnath Dhaktu Kale</h1>
                    <h4>The Sarpanch of Village Panchayat Mauxi</h4>
                  </div>
                  <div className='sar-msg'>
                  
                        <Card className='abt-card dev0-card ' 
                        title={
                        <>
                        <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1680691424/vp/mauxi/information-button_gugkdi.png'} alt='' height={35} width={35} />
                          <span className='abt-card-head-title text-white ps-3'>  Sarpanch message to the public</span>
                        </>}>
                            <p>Greetings to all members of the community,</p>

<p>As the Sarpanch of Mauxi Village Panchayat, I would like to take this opportunity to address the public and share some important information.</p>

<p>Firstly, I would like to remind everyone of the importance of following COVID-19 safety protocols. The pandemic is still ongoing, and it is crucial that we continue to wear masks, practice social distancing, and maintain good hygiene to prevent the spread of the virus.</p>

<p>Secondly, I would like to encourage all members of the community to participate in the upcoming local elections. Your vote is your voice, and it is essential that we elect leaders who will work towards the betterment of our village.</p>

<p>Lastly, I would like to remind everyone that my office is always open to hear your concerns and suggestions. Together, we can work towards creating a better and more prosperous community.</p>

<p>Thank you for your attention, and I wish you all good health and happiness.</p>

<p>Sincerely,</p>

<p>[Shri. Somnath Dhaktu Kale]</p>
                          </Card>
                        
                  </div>
                  

                </div>
              </div>
            </div>
            
          </div>
          
        </section>
        {/*<SliderBottomBarComponent noticeData={noticeData}/>*/}
      </>
    )
}

export default Banner
