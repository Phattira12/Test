import React from "react";
import "../Css/header.css"

export default class header extends React.Component {
   render() {
     return (
       <div>
         <nav className="navbar navbar-expand-lg navbar-blue bg-light">
           <div className="container-fluid container">
             <div className="collapse navbar-collapse">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                 <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">
                      ประวัติ COD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   </a>
                 </li>
                 <li className="nav-item ">
                 <a className="nav-link active" aria-current="page" href="#">
                     จัดการ COD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   </a>
                 </li>
                 
                 <li className="nav-item ">
                 <a className="nav-link active" aria-current="page" href="#">
                     ตั้งค่า&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   </a>
                 </li>

                 <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="#">
                    นางสาวทดลอง&nbsp;&nbsp;<i class="fas fa-sort-down"></i>
                   </a>
                 </li>
               </ul>

                 <button className="btn btn-primary" type="submit">
                   ออกจากระบบ
                 </button>

             </div>
           </div>
         </nav>
       </div>
     );
   }
}