import React from 'react';
import './SearchNAv.css';
import { BsSearch } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";

export default function SearchNAv() {
  return (
   <div className='w-100'>
       <div className="my-5 d-flex">
         <div className="ms-5 ps-5">
           <input
             type="text"
             className="form-control search ms-5"
             placeholder="Search"
           />
           <BsSearch className="searchIcon" />
         </div>
         <div className="ms-5 mt-1">
           <BsBellFill className="me-5 fs-3 bell" />
           <div className="position-absolute translate-middle p-1 bg-danger border border-light rounded-circle"></div>
           <HiUserCircle className="me-5 fs-2 user" />
         </div>
       </div>
   </div>
  );
}
