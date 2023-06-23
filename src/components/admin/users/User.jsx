import axios from "axios";
import React, { useEffect, useState } from "react";
// import { api } from "../../../api/Api.js";
import { Link } from "react-router-dom";

const User = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const feathData = async () => {
    // try {
    //   const res = await axios.get(`${api}/data-person`);
    //   console.log(res.data);
    //   setData(res.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleSearch = async (e) => {
    setText(e.target.value);

    // try {
    //  if(text ){
    //    const res = await axios.get(`${api}/search-person/?search=${text}`)
    //    setData(res.data)
    //  }else {
    //     feathData()
    //  }

    //     } catch (error) {
    //   console.log(error);
    // }
  };

  // useEffect(() => {
  //   feathData();
  // }, [text]);

  return (
    <div className="">
      {"test : " + text}
      <form className="flex items-center">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            onKeyUp={handleSearch}
          />
        </div>
      </form>

      {/* Table  */}

      <div className="relative overflow-x-auto  shadow-md sm:rounded-lg mt-10">
        <table className=" w-full text-sm text-left text-gray-800 dark:text-gray-400">
          <thead className="text-xs text-gray-800 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                ชื่อ
              </th>
              <th scope="col" className="px-6 py-3">
                clinic number
              </th>
              <th scope="col" className="px-6 py-3">
                เบอร์ติดต่อฉุกเฉิน
              </th>
              <th scope="col" className="px-6 py-3">
                เบอร์โทรศัพท์
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">ส่งตัวผู้ป่วย</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">รอตรวจ</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">สั่งซื้อสินค้า</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">ss</td>
              <td className="px-6 py-4">ss</td>
              <td className="px-6 py-4">ss</td>
              <td className="px-6 py-4">ss</td>
              <td className="px-6 py-4">ss</td>
              <td className="px-6 py-4">ss</td>
              <td className="px-6 py-4">ss</td>
            </tr>

            {/* 
            {data.map((data, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{`${data.firstname}`}</td>
                  <td className="px-6 py-4">{`${data.number}`}</td>
                  <td className="px-6 py-4">{`${data.tel_emergency}`}</td>
                  <td className="px-6 py-4">{`${data.tel}`}</td>
                  <td className="px-6 py-4">
                    <Link to='/sendUser'>
                      <button type="button" className="focus:outline-none text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">ส่งตัวผู้ป่วย</button>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <p className=" text-white text-center  bg-red-700  font-medium rounded-lg text-sm px-2 py-1.5 ">รอตรวจ</p>
                 

                  </td>
                  <td className="px-6 py-4">
                  <Link to='/shopUser'>
                      <button type="button" className="focus:outline-none text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">สั่งซื้อสินค้า</button>
                    </Link>
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
