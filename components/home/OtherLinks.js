import React from 'react'
import Marquee from "react-fast-marquee";
import { getPublicNoticeData } from '../../lib/api';

// const OtherLinks = ({ noticeData }) => {
const OtherLinks = ({ noticeData }) => {
    //console.log('noticedata1',noticeData)
    const [nData,setNdata]=React.useState(null)
    
    React.useEffect(()=>{
        //setLoading(true)
        let isApiSubscribed = true;
        async function fetchData() {
            
            const cData = await getPublicNoticeData() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
              console.log('cData',cData)
               setNdata(cData)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])

    return (
        <section className='slider-bottom-bar bg-light-orange'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='marquee-box'>
                            <div className="row text-center">
                                
                                <div className="col-md-12">

                                    <Marquee
                                        gradient={false}
                                        speed={50}
                                    >
                                        {/* {noticeData.map((data, index) =>
                                            <a key={index} className="text-black ms-7">{data.acf.title
                                            }</a>
                                        )} */}
                                         {nData!==null?nData.map((data, index) =>
                                            <a key={index} className="text-black ms-7">{data.notices.title
                                            }</a>
                                        ):<></>}
                                    </Marquee>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
       
         
    )
}
    
export default OtherLinks
