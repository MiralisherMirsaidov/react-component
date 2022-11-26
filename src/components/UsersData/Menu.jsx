import React from 'react';
import { AiFillLock } from 'react-icons/ai';
import { AiFillUnlock } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import {RiEditBoxFill} from 'react-icons/ri'
const Menu = (props) => {
    return (
      <div>
        <div
          className="bg-light mt-5 p-3"
          style={{ width: "250px", height: "180px", borderRadius: "20px" }}
        >
          <div className="d-flex align-content-center text-danger">
            <AiFillLock className=" fs-3 me-3" />
            <h5
              className="mt-1"
              onClick={() => {
                props.onClick.blocklash(props.onClick.i);
              }}
            >
              Bloklash
            </h5>
          </div>
          <div className="d-flex align-content-center text-success">
            <AiFillUnlock className=" fs-3 me-3" />
            <h5
              className="mt-1"
              onClick={() => {
                props.onClick.unBlock(props.onClick.i);
              }}
            >
              Blokdan chiqarish
            </h5>
          </div>
          <div className="d-flex align-content-center" style={{ color: "red" }}>
            <TiTick className=" fs-3 me-3" />
            <h5
              className="mt-1"
              onClick={() => {
                props.onClick.deletefunc(props.onClick.i);
              }}
            >
              Sessiyani tugatish
            </h5>
          </div>
          <div className="d-flex align-content-center text-primary">
            <RiEditBoxFill className=" fs-3 me-3" />
            <h5 className="mt-1">Taxrirlash</h5>
          </div>
        </div>
      </div>
    );
}

export default Menu;
