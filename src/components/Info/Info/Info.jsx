import React from 'react';
import './Info.css'
import {SlReload} from 'react-icons/sl'


export default function Info() {
  return (
    <div className="ms-5 info mb-5">
      <div className="d-flex justify-content-between">
        <h4>Push jo’natish</h4>
        <div className="d-flex mt-1 text-primary">
          <SlReload className="fs-3 me-3 text-primary" />
          <h5 className='me-5 pe-4'>Tarix</h5>
        </div>
      </div>
      <div className="row" style={{ width: "70vw"}}>
        <div className="col-lg-12 col-md-8">
          <div className="card infoUsers p-5">
            <div>
              <h5 className="ms-4">
                Sarlavha <span className="text-danger">*</span>
              </h5>
              <input type="text" className="form-control inputUser py-3" />
            </div>
            <div className="mt-5 pt-5">
              <h5 className="ms-4">
                Tekst <span className="text-danger">*</span>
              </h5>
              <input type="text" className="form-control inputUser py-5" />
            </div>
            <div className="d-flex mt-3">
              <div className="d-flex me-5 pe-5">
                <input
                  className="me-2 mb-2 form-check-input "
                  type="radio"
                  for="flexRadioDefault1"
                />
                <h5>Bitta foydalanuvchiga yuborish</h5>
              </div>
              <div className="d-flex ms-2">
                <input
                  className="me-2 mb-2 form-check-input"
                  type="radio"
                  for="flexRadioDefault1"
                />
                <h5>Hamma foydalanuvchiga yuborish</h5>
              </div>
            </div>
            <div className="text-center mt-5">
              <button className="btn btn-primary px-5 py-2 jonatishBtn">
                Jo'natish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
