import React , { useState }  from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRegCertData } from '../../redux/menu/menuSelector';
import {Button,Typography,Tabs,Card } from 'antd';
import { Collapse } from 'antd';



import UploadUserNewModalComponent from '../modal/UploadUserNewModalComponent';
import UploadDocumentComponent from './UploadDocumentComponent';


const { Panel } = Collapse;

const { TabPane } = Tabs;

const CommitteeDetail = ({regCertData,cDetailData}) =>{
  console.log('cDetailData',cDetailData)
    const{members}=cDetailData
    const [show,setShow]=React.useState(false)
    const[regData,setRegData]=React.useState(null)
    const[tabLayout,setTablLayout]=React.useState(null)
    React.useEffect(()=>{
        //console.log('regData',regCertData)
        if(regCertData!==null){
            setRegData(regCertData.regStatus)
            
        }
        else{
            setRegData(null)
        }
        function handleResize() {
            if (window.matchMedia("(min-width: 1400px)").matches) {
              setTablLayout("right")
             
              // Viewport is less or equal to 700 pixels wide
              //console.log("min-width: 1400px")
            } else if(window.matchMedia("(min-width: 1200px)").matches) {
              setTablLayout("right")
             
              // Viewport is greater than 700 pixels wide
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 992px)").matches){
              setTablLayout("right")
              
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 768px)").matches){
              setTablLayout("top")
              
              //console.log("min-width: 768px")
            }else if(window.matchMedia("(min-width: 576px)").matches){
              setTablLayout("top")
              
              //console.log("min-width: 768px")
            }else{
              setTablLayout("top")
              
              //console.log("min-width: 576px")
            }
          
          }
          handleResize()
          window.addEventListener('resize', handleResize)
    },[regCertData])

    // console.log('members', members);
    
    const handleShow = () => {
        setShow(true)
    };
    const handleClose = () => {
      setShow(false)
      //setRegStatus(false)
    };   
  //console.log('cDetailData',cDetailData)
    // console.log('applicationTab.members',applicationTab.members)


  return (
      <>

        
        
          {/* <div className='facility-tab'>
              <Tabs tabPosition={tabLayout} className='sub-tab'>

                  <TabPane tab="Application" key="app"> */}
                      <div className='page-content'>
                      {/* <div dangerouslySetInnerHTML={{ __html:cDetailData.title!==null?cDetailData.title:<></>}} /> */}
                      <table>
                        <thead>
                          <tr>
                            <td className='fw-bolder fs-20'>Name</td>
                            <td className='text-center fw-bolder fs-20'>Designation</td>
                            <td className='text-center fw-bolder fs-20'>Contact No.

                            </td>
                          </tr>

                        </thead>
                        {cDetailData.members!==null ? cDetailData.members.map((m)=>
                          
                            <tbody>
                              <tr>
                                <td className='fs-15'>{m.name}</td>
                                <td className='px-10 fs-15'>{m.designation}</td>
                                <td className='text-centre fs-15'>{m.contactNo}</td>

                              </tr>
                            </tbody>
                         
                        ):<></>}
                         </table>
                
                        
                      </div>



                  
                  

          <UploadUserNewModalComponent
              show={show}
              onClick={handleClose}
              onHide={handleClose}
          />

      </>
  )
}
const mapStateToProps=createStructuredSelector({
    regCertData:selectRegCertData
})
export default connect(mapStateToProps) (CommitteeDetail)