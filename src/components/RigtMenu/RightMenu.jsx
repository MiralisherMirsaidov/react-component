import React from "react";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { MdOutlineDateRange } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { MdPersonalInjury } from "react-icons/md";
import { GrUserPolice } from "react-icons/gr";
import { BsFolder2 } from "react-icons/bs";
import "./RightMenu.css";

export default function RightMenu() {
  return (
    <div className="RightMenu w-100 pb-5">
      <div className="ms-5 d-flex">
        <button className="btn btn-primary py-3 me-4 hammasi">Hammasi</button>
        <button className="sana px-3 me-3">
          <FcPrevious className="oldingi" />
        </button>
        <button className="sana px-3 me-3">
          Sen <br /> 26
        </button>
        <button className="sana px-3 me-3">
          Sen <br /> 27
        </button>
        <button className="sana px-3 me-3">
          Sen <br /> 28
        </button>
        <button className="sana px-3 me-3">
          Sen <br /> 29
        </button>
        <button className="sana px-3 me-3">
          Sen <br /> 30
        </button>
        <button className="sana px-3 me-3">
          Sen <br /> 31
        </button>
        <button className="sana px-3 me-3">
          Sen <br /> 31
        </button>
        <button className="sana px-3 me-3">
          Okt <br /> 1
        </button>
        <button className="sana px-3 me-3">
          Okt <br /> 2
        </button>
        <button className="sana px-3 me-3">
          Okt <br /> 3
        </button>
        <button className="sana px-3 me-3">
          <FcNext className="oldingi" />
        </button>
        <button className="sana px-3 me-3">
          <MdOutlineDateRange className="date fs-4" />
        </button>
      </div>
      <div>
        <h5 className="mt-4 ms-5 ps-5">Ro’yxatdan o’tanlar</h5>
        <div className="card box ms-5 py-3">
          <div className="d-flex foydalanuvchilar align-items-center justfy-content-space-between px-5">
            <div>
              <HiOutlineUsers className="fs-1 text-primary" />
            </div>
            <div>
              <h1 className="countUser">1 712 001</h1>
            </div>
            <div className="ogohlik fs-3">i</div>
          </div>
        </div>

        <div className="row" style={{width:"95vw"}}>
          <div className="col-3 mt-5 ms-5">
            <div className="card cardUsers p-3 shadow">
              <div className="d-flex justify-content-between pt-2">
                <h5>Faol foydalanuvchilar</h5>
                <HiOutlineUsers className="text-primary fs-1 me-3" />
              </div>
              <div className="text-center">
                <h1 className="fw-bold textActive my-4 mt-4">1.5 mln</h1>
              </div>
              <div className="d-flex justify-content-between pt-4">
                <div className="ms-2  text-success">
                  <BsFillArrowUpRightCircleFill className="fs-4 me-1" />{" "}
                  <span className="fw-bold">+15%</span>
                </div>
                <a href="#">
                  <h4 className="me-3">Batafsil</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="col-3 mt-5 ms-5">
            <div className="card cardUsers p-3 shadow">
              <div className="d-flex justify-content-between pt-2">
                <h5>Shaxsini tasdiqlagan</h5>
                <BsFileEarmarkPerson className="text-success fs-1 me-3" />
              </div>
              <div className="text-center">
                <h1 className="fw-bold textActive my-4 mt-4">625.1k</h1>
              </div>
              <div className="d-flex justify-content-between pt-4">
                <div className="ms-2 text-success">
                  <BsFillArrowUpRightCircleFill className="fs-4 me-1" />
                  <span className="fw-bold">+15%</span>
                </div>
                <a href="#">
                  <h4 className="me-3">Batafsil</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="col-3 mt-5 ms-5">
            <div className="card cardUsers p-3 shadow">
              <div className="d-flex justify-content-between pt-2">
                <h5>Shubhali foydalanuvchi</h5>
                <MdPersonalInjury className="text-danger fs-1 me-3" />
              </div>
              <div className="text-center">
                <h1 className="fw-bold textActive my-4 mt-4">5.1k</h1>
              </div>
              <div className="d-flex justify-content-between pt-4">
                <div className="ms-2 text-danger">
                  <BsArrowDownLeftCircleFill className="fs-4 me-1" />
                  <span className="fw-bold">-3.5%</span>
                </div>
                <a href="#">
                  <h4 className="me-3">Batafsil</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="col-3 mt-5 ms-5">
            <div className="card cardUsers p-3 shadow">
              <div className="d-flex justify-content-between pt-2">
                <h5>Faol bo’lmagan </h5>
                <HiOutlineUsers className="text-info fs-1 me-3" />
              </div>
              <div className="text-center">
                <h1 className="fw-bold textActive my-4 mt-4">25.1k</h1>
              </div>
              <div className="d-flex justify-content-between pt-4">
                <div className="ms-2 text-success">
                  <BsFillArrowUpRightCircleFill className="fs-4 me-1" />
                  <span className="fw-bold">+15%</span>
                </div>
                <a href="#">
                  <h4 className="me-3">Batafsil</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="col-3 mt-5 ms-5">
            <div className="card cardUsers p-3 shadow">
              <div className="d-flex justify-content-between pt-2">
                <h5>Soliq xodimlari</h5>
                <GrUserPolice className="text-primary fs-1 me-3" />
              </div>
              <div className="text-center">
                <h1 className="fw-bold textActive my-4 mt-4">2.1k</h1>
              </div>
              <div className="d-flex justify-content-between pt-4">
                <div className="ms-2 text-success">
                  <BsFillArrowUpRightCircleFill className="fs-4 me-1" />
                  <span className="fw-bold">+5%</span>
                </div>
                <a href="#">
                  <h4 className="me-3">Batafsil</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="col-3 mt-5 ms-5">
            <div className="card cardUsers p-3 shadow">
              <div className="d-flex justify-content-between pt-2">
                <h5>Yuklab olingan</h5>
                <BsFolder2 className="text-secondary fs-1 me-3" />
              </div>
              <div className="text-center">
                <h1 className="fw-bold textActive my-4 mt-4">1.7 mln</h1>
              </div>
              <div className="d-flex justify-content-between pt-4">
                <div className="ms-2 text-success">
                  <BsFillArrowUpRightCircleFill className="fs-4 me-1" />
                  <span className="fw-bold">+5%</span>
                </div>
                <a href="#">
                  <h4 className="me-3">Batafsil</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
