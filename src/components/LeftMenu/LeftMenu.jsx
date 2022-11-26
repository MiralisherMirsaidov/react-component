import "./LeftMenu.css";
import { BsHouse } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SlEarphonesAlt } from "react-icons/sl";
import { Link } from "react-router-dom";

import React from "react";
export default function LeftMenu() {
  return (
    <div>
      <div className="leftMenu">
        <ul className="list-unstyled menu">
          <Link className="yol" to={"/rightmenu"}>
            <li className="">
              <BsHouse className="me-4 mb-1" />
              Statistika
            </li>
          </Link>
          <Link className="yol" to={"/info"}>
            <li>
              <AiOutlineSetting className="me-4 mb-1" />
              Amallar
            </li>
          </Link>
          <Link className="yol" to={"/usersdata"}>
            <li>
              <GoPerson className="me-4 mb-1" />
              Ruxsatlar
            </li>
          </Link>
          <Link className="yol" to={"/"}>
            <li>
              <HiOutlineDocumentText className="me-4 mb-1" />
              Hisobotlar
            </li>
          </Link>
          <Link className="yol" to={"/"}>
            <li>
              <SlEarphonesAlt className="me-4 mb-1" />
              Call-markaz
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
