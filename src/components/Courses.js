// import React from 'react'
// import Navbar from './Navbar'
// import AllItems from './AllItems'
// import axios from 'axios';

// function Courses() {

//   const openInNewTab = url => {
//     window.open(url, '_blank', 'noopener,noreferrer');
//   };
//   const passValues=(id,Title)=>{
//      axios.get(`http://localhost:8017/courses/${localStorage.getItem('username')}/${Title}/${id}`).then((res)=>{
//             console.log(res);
//           }).catch(res=>{
//             console.log(res);
//           })

//         }   
     

  


//   return (
//             <div>

//               <Navbar/>
// <center>
//               <div style={{ display: 'flex',alignItems:'center',justifyContent:'center',alignContent:'center', }}><h1>Courses</h1></div>

//           <div className="courses"  style={{display:'flex',flexDirection:'column',marginLeft:'8rem'}}>
//             <div className="row "  style={{display:'flex',flexDirection:'row'}}>
//                     {
//                         AllItems.map(({id,Title,Img,url}, index) => {
                            
                           
//                             return (

//                                 <div    style={{height:'300px',margin:'1cm',width:'300px'}}  className="card col-lg-4 col-xl-3 col-md-6  mb-3" key={index}>
//                                     <img  onClick={()=>passValues(id,Title)} style={{height:'4cm',width:'100%',padding:'0.2cm',margin:'20'}}                      src={Img}  alt="Sorry! Image is not available at this time"/>
//                                     <div className="content">
//                                         <h5>{ Title}</h5>
//                                     </div>
//                                      <div className='btn btn-primary' style={{marginBottom:'1cm'}}  onClick={() => openInNewTab(url)}>Go To Course</div>
//                                 </div>
                  
//                             );
//                         })
//                     }
//                 </div>
//         </div>
//   </center>
//             </div>
          
//   )

//                   }
                
// export default Courses;