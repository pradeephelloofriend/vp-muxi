import React from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import { setTabKey } from '../../redux/menu/menuAction'
import {useRouter} from 'next/router'
import Image from 'next/image'
import moment from 'moment';
import RecentDevelopmentComponent from './RecentDevelopmentComponent'
const NewsSectionComponent = ({newsData,setTabKey,devData}) => {
  const router=useRouter()
  function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
    //alert(pathId)
    
            setTabKey(uri)
            router.push({
                pathname: `/${pathId}/`,
                query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
            })
}
  //console.log('newsData',newsData)
  return (
      <>
          <section className="wrapper bg-light-orange">
              <div className="container py-10 py-md-10 pb-md-10">
                  <div className="row">
                      <div className="col-md-12 col-xl-5">
                          <div className='vil-info'>
                              <Card className='abt-card ' 
                              title={
                                <>
                                  <span className='abt-card-head-title text-white'>Villages in Mauxi Gram Panchayat </span>
                                  <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1670307442/vp/dongrim/map-min_vkmwjd.png'} alt='' height={35} width={35} />
                                </>
                              }>
                                <div className='vil-card-block'>
                                  <ul className='text-c-blue'>
                                    <li>Kopardem</li>
                                    <li>Indiranagar, Dhangar wada, & Harijanwada Kopardem</li>
                                    <li>Dabem</li>
                                    <li>Zarme</li>
                                    <li>Panchayatwada, Chinchmal,Warchawada, Desai wada Mauxi</li>
                                    <li>Deulwada, & Panvelakarwada Mauxi</li>
                                    <li>Nagvem</li>
                        
                                  </ul>
                                </div>
                                {/*<div className="mb-3" dangerouslySetInnerHTML={{ __html: "villageData.acf.desc" }} />*/}
                              </Card>
                            
                          </div>
                      </div>
                      <div className="col-md-12 col-xl-7">
                        <div className='dev-card'>
                        <Card className='abt-card dev0-card bg-c-blue' 
                        title={
                        <>
                        <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070682/vp/nagoa/social_gbnief.png'} alt='' height={35} width={35} />
                          <span className='abt-card-head-title text-white'> Recent development works</span>
                        </>}>
                            {/*<RecentDevelopmentComponent devData={devData}/>*/}
                          </Card>
                        </div>
                          
                        </div>
                  </div>
              </div>
          </section>
      </>
  )
}
const mapDispatchToProps=dispatch=>({
  setTabKey:data=>dispatch(setTabKey(data))
})
export default connect(null,mapDispatchToProps)(NewsSectionComponent)