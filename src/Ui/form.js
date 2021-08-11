import React from "react";
import "../Css/form.css"

export default class Porfile extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header .header">
          <haeder/>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">จัดการ COD</h5>
              <div className="form-group row">
                <div className="col-md-3">
                  <select id="disabledSelect" class="form-select">
                    <option>ประเภทลูกค้า</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="สาขา"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="ค้นหาบาร์โค้ด"
                  />
                </div>
                <div className="col-md-3">
                  <select id="disabledSelect" class="form-select">
                    <option>ทั้งหมด</option>
                  </select>
                </div>
                <br/><br/><br/>
                <div className="col-md-12">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="ค้นหาบัตรประชาชน/ค้นหาจากเบอร์โทรศัพท์"
                  />
                </div>
               </div>
                <br/>
               <div className="form-group row">
                  <p className="col-md-5 text-center">ตั้งแต่วันที่เปิดบิล</p>
                  <p className="col-md-3 text-center">ตั้งแต่วันที่ปิดบิล</p>
                  <p className="col-md-4"></p>
               <div className="col-md-2">
                  <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1"/>
                  <label className="form-check-label" htmlFor="defaultCheck1">
                  &nbsp;วันที่ปัจจุบัน
                  </label>
               </div>
               <div className="col-md-1">
                  <select id="disabledSelect" class="form-select">
                    <option>ปี</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <select id="disabledSelect" class="form-select">
                    <option>เดือน</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <select id="disabledSelect" class="form-select">
                    <option>วันที่</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <select id="disabledSelect" class="form-select">
                    <option>ปี</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <select id="disabledSelect" class="form-select">
                    <option>เดือน</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <select id="disabledSelect" class="form-select">
                    <option>วันที่</option>
                  </select>
                </div>
               </div>
               <br/>
               <div className="B">
                  <button type="button" class="btn btn-primary center"><i class="fas fa-search"></i>&nbsp;ค้นหา</button>
                  &nbsp;&nbsp;
                  <button type="button" class="btn btn-secondary"><i class="fas fa-redo-alt"></i>&nbsp;ล้างค่า</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
