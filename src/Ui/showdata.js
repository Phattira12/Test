import React from "react";
import "../Css/showdata.css"

export default class showdata extends React.Component{
   render(){
      return (
        <div className="container">
          <div className="form-group row">
            <div className="col-md-6">
            <button type="button" class="btn btn-primary ">
              จัดการสถานะหลายรายการ
            </button>
            </div>
           <div className="col-md-6">
           <button type="button" class="btn btn-secondary ">
              รวม: 5
            </button>
           </div>
          </div>
          <br/>
          <div className="table text-center">
            <table class="table table-bordered">
              <thead className="thead">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">พนักงานโอนเงินเข้าแล้ว</th>
                  <th scope="col">หมายเลขโทรศัพท์</th>
                  <th scope="col">ข้อมูลผู้ส่ง</th>
                  <th scope="col">เลขพัสดุ</th>
                  <th scope="col">จำนวนเงินCOD</th>
                  <th scope="col">สถานะCOD</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><i class="far fa-square"></i></th>
                  <td><button class="btn btn-success bt">
                     <td><i class="fas fa-check-circle"></i></td>
                  </button></td>
                  <td>123254050</td>
                  <td>
                     ชื่อบัญชี<br/>
                     หมายเลขบัญชี<br/>
                     ธนาคาร
                  </td>
                  <td>71252536</td>
                  <td>500 บาท</td>
                  <td><button class="btn btn-success">
                     <td>โอนแล้ว</td>
                  </button></td>
                  <td><button class="btn btn-primary">
                     <td>จัดการ</td>
                  </button></td>
                </tr>
                <tr>
                  <th scope="row"><i class="far fa-square"></i></th>
                  <td><button class="btn btn-danger bt">
                     <i class="fas fa-times-circle"></i>
                  </button></td>
                  <td>123254050</td>
                  <td>
                     Porlor Express<br/>
                     62515225235<br/>
                     ธนาคารไทยพาณิชย์
                  </td>
                  <td>71252536</td>
                  <td>500 บาท</td>
                  <td><button class="btn btn-warning">
                     ถึงกำหนดโอน
                  </button></td>
                  <td><button class="btn btn-primary">
                    จัดการ
                  </button></td>
                </tr>
                <tr>
                  <th scope="row"><i class="far fa-square"></i></th>
                  <td><button class="btn btn-success bt">
                    <i class="fas fa-check-circle"></i>
                  </button></td>
                  <td>123254050</td>
                  <td>
                     Porlor Express<br/>
                     62515225235<br/>
                     ธนาคารไทยพาณิชย์
                  </td>
                  <td>71252536</td>
                  <td>500 บาท</td>
                  <td><button class="btn btn-danger">
                     ยังไม่ได้โอน
                  </button></td>
                  <td><button class="btn btn-primary">
                    จัดการ
                  </button></td>
                </tr>
                <tr>
                  <th scope="row"><i class="far fa-square"></i></th>
                  <td><button class="btn btn-danger bt">
                     <i class="fas fa-times-circle"></i>
                  </button></td>
                  <td>123254050</td>
                  <td>
                     Porlor Express<br/>
                     62515225235<br/>
                     ธนาคารไทยพาณิชย์
                  </td>
                  <td>71252536</td>
                  <td>500 บาท</td>
                  <td><button class="btn btn-success">
                     <td>โอนแล้ว</td>
                  </button></td>
                  <td><button class="btn btn-primary">
                    จัดการ
                  </button></td>
                </tr>
                <tr>
                  <th scope="row"><i class="far fa-square"></i></th>
                  <td><button class="btn btn-success bt">
                    <i class="fas fa-check-circle"></i>
                  </button></td>
                  <td>123254050</td>
                  <td>
                     Porlor Express<br/>
                     62515225235<br/>
                     ธนาคารไทยพาณิชย์
                  </td>
                  <td>71252536</td>
                  <td>500 บาท</td>
                  <td><button class="btn btn-danger">
                     ยังไม่ได้โอน
                  </button></td>
                  <td><button class="btn btn-primary">
                    จัดการ
                  </button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
   }
}