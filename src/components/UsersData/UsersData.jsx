import React, { useEffect, useState } from "react";
import "./UserData.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "./Menu";
export default function UserData() {
  const [user, setUser] = useState([]);
  const [searchss, setSearchss] = useState([]);
  const [classname, setClassname] = useState("bg-dager");
  const [Qidiruv, setQidiruv] = useState(null);

  const [makeData, setmakeData] = useState([
    {
      username: "Ra'no",
      id: 111,
      telefon: "+998935851594",
      Jshshir: "31511962610021",
      qurilma: "Iphone",
      status: true,
    },
    {
      username: "Kamola",
      id: 112,
      telefon: "+998999891523",
      Jshshir: "31511962610022",
      qurilma: "Samsung",
      status: true,
    },
    {
      username: "Durdona",
      id: 113,
      telefon: "+998996666666",
      Jshshir: "31511962610023",
      qurilma: "Iphone",
      status: false,
    },
    {
      username: "Azizxon",
      id: 114,
      telefon: "+998935856405",
      Jshshir: "31511962610024",
      qurilma: "Iphone",
      status: true,
    },
    {
      username: "Saida",
      id: 115,
      telefon: "+998935851905",
      Jshshir: "31511962610025",
      qurilma: "Iphone",
      status: false,
    },
    {
      username: "Ziyoda",
      id: 116,
      telefon: "+998935851545",
      Jshshir: "31511962610026",
      qurilma: "Iphone",
      status: false,
    },
    {
      username: "Gulnoza",
      id: 117,
      telefon: "+998935857305",
      Jshshir: "31511962610027",
      qurilma: "Iphone",
      status: false,
    },
  ]);
  const [searchData , setSearchData] = useState([...makeData])

    function SearchId() {
      console.log(Qidiruv.length);
      if (Qidiruv.length == 0 ) {
        setmakeData(searchData);
      }
      else {
        let Data1 = searchData.filter((arr) => {
          return arr.id === Number(Qidiruv);
        });
  
        console.log(Data1, "mamamam");
        setmakeData(Data1);
      }
    }

    function blocklash(params) {
      let currentData = [...makeData];
      currentData[params].status = false;
      setmakeData([...currentData])
    }

  function UnBlock(params) {
    let currentData = [...makeData];
    currentData[params].status = true;
    setmakeData([...currentData]);
  }
    function deletefunc(i) {
      let currentdata = [...makeData];
      currentdata.splice(i, 1);
      setmakeData([...currentdata]);
    }

    return (
      <div className="w-100">
        <div className="d-flex ms-5">
          <div className="w-50 me-3">
            <h4>ID orqali qidirish</h4>
            <input
              onInput={(item) => {
                setQidiruv(item.target.value);
              }}
              type="text"
              className="form-control py-2 searchId"
              placeholder="ID"
            />
          </div>
          <div className="mt-3">
            <button
              onClick={SearchId}
              className="bnt btn-primary rounded-pill py-2 mt-3 px-5"
            >
              Qidirish
            </button>
          </div>
        </div>

        <table className=" my-5 ms-5 ps-3 text-center" style={{ width: "75vw" }}>
          <thead>
            <tr className="border ms-3">
              <th className="py-2">
                <input type="checkbox" />
              </th>
              <th>ID</th>
              <th>User</th>
              <th>Telefon</th>
              <th>JShShIR</th>
              <th>Qurilma</th>
            </tr>
          </thead>
          {makeData.map((arr, index) => {
            return (
              <>
                {arr.status ? (
                  <>
                    <tbody className="w-100">
                      <tr className="w-100 nomlari">
                        <td className="py-4">
                          <input type="checkbox" />
                        </td>
                        <td>{arr.id}</td>
                        <td>{arr.username}</td>
                        <td>{arr.telefon}</td>
                        <td>{arr.Jshshir}</td>
                        <td>{arr.qurilma}</td>
                        <td>{arr.status}</td>
                        <td>
                          <div
                            style={{
                              border: "none",
                              position: "relative",
                            }}
                            className="threedotted"
                          >
                            <BsThreeDotsVertical />
                            <div className="menuu">
                              <Menu
                                onClick={{
                                  blocklash: blocklash,
                                  unBlock: UnBlock,
                                  deletefunc:deletefunc,
                                  i: index,
                                }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </>
                ) : (
                  <>
                    <tbody className="w-100 bg-danger">
                      <tr className="w-100 nomlari">
                        <td className="py-4">
                          <input type="checkbox" />
                        </td>
                        <td>{arr.id}</td>
                        <td>{arr.username}</td>
                        <td>{arr.telefon}</td>
                        <td>{arr.Jshshir}</td>
                        <td>{arr.qurilma}</td>
                        <td>{arr.status}</td>
                        <td>
                          <div
                            style={{
                              border: "none",
                              background: "white",
                              position: "relative",
                            }}
                            className="threedotted"
                          >
                            <BsThreeDotsVertical />
                            <div className="menuu">
                              <Menu
                                onClick={{
                                  blocklash: blocklash,
                                  i: index,
                                    unBlock: UnBlock,
                                  deletefunc: deletefunc
                                }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </>
                )}
              </>
            );
          })}
        </table>
      </div>
    );
  
}
