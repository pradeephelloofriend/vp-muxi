import React from 'react'
import { Card,Typography,Tabs,Button } from 'antd';
import { Tree, TreeNode } from 'react-organizational-chart';
import Image from 'next/image'
import t1 from '../../public/img/team/Dario.jpg'
const {Title,Text}=Typography
const PanchayatMemberComponent = () => {
  return (
      <>
          <div className='pm-block h-scroll'>
            <Tree label={<div>
                <Button className='team-level'>Directorate Of Panchayats</Button>
                    <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">Siddhi Halarnkar</p>
                                <p className="grey">
                                    Director  </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            }>
                <TreeNode label={<div>
                    <Button className='team-level'>Block Development Officer</Button>
                    <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">Suryajirao V. Rane</p>
                                <p className="grey">
                                    BDO  </p>
                            </div>
                        </div>
                    </div>
                    </div>
                }>
                    <TreeNode label={
                    <div>
                        <Button className='team-level'>Sarpanch</Button>
                        <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1680153734/vp/mauxi/sarpimg2_xq9cnv.jpg'} alt="Somnath Dhaktu Kale"  />
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">Somnath Dhaktu Kale</p>
                                <p className="grey">
                                Sarpanch  </p>
                            </div>
                        </div>
                    </div>
                    </div>
                }>
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 1</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1680153881/vp/mauxi/Sayaji_Pandurang_Sawant_sfruti.jpg'} alt="Sayaji Pandurang Sawant"  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Sayaji Pandurang Sawant</p>
                                        <p className="grey">
                                        Member </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 2</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1680153304/vp/mauxi/Radhiki_Krishna_Sawant_xag5px.jpg'} alt="Radhiki Krishna Sawant"  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Radhiki Krishna Sawant</p>
                                        <p className="grey">
                                        Dy Sarpanch  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>

                    
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 3</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={' https://res.cloudinary.com/depg2aab2/image/upload/v1680153970/vp/mauxi/Kanta_Laxman_Gawas_qvlyen.jpg'} alt="Kanta Laxman Gawas"  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Kanta Laxman Gawas</p>
                                        <p className="grey">
                                        Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>
                        
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 4</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1680154084/vp/mauxi/GurudasChandrakantGawas_t3ieia.jpg'} alt="Gurudas Chandrakant Gawas"  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Gurudas Chandrakant Gawas</p>
                                        <p className="grey">
                                        Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 5</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1680154378/vp/mauxi/Sulbha_Balkrishna_Desai_fegdbr.jpg'} alt="Sulbha Balkrishna Desai"  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Sulbha Balkrishna Desai</p>
                                        <p className="grey">
                                            Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>

                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 6</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1680154571/vp/mauxi/PritiPratapGaonkar_vmeim9.jpg'} alt="Priti Pratap  Gaonkar"  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Priti Pratap  Gaonkar</p>
                                        <p className="grey">
                                            Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode> 

                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 7</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1680153734/vp/mauxi/sarpimg2_xq9cnv.jpg'} alt="Somnath Dhaktu Kale"  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Somnath Dhaktu Kale </p>
                                        <p className="grey">
                                            Sarpanch </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>

                      {/** <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 8</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671104553/vp/dongrim/team/image_5_lwsguv.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Sonia Santosh Gaonkar</p>
                                        <p className="grey">
                                            Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>

                    */ }
                    </TreeNode>
                    <TreeNode label={
                    <div>
                        <Button className='team-level'>Secretary</Button>
                        <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">Sandeep Halyali </p>
                                <p className="grey">
                                Secretary  </p>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                }>
                        <TreeNode label={<div><Button>Staffs</Button></div>}>
                            
                            </TreeNode>
                    </TreeNode>
                </TreeNode>
                
            </Tree>
             
          </div>
      </>
  )
}

export default PanchayatMemberComponent