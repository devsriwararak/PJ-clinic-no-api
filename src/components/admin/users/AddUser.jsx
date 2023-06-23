import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import {api} from '../../../api/Api.js'

const AddUser = () => {
  const [sendData, setSendData] = useState({
    firstname: "",
    lastname: "",
    tel: "",
    id_person: "",
    address_current: "",
    tel_emergency: "",
    sickdisease: "",
    sex: "",
    date: "",
    drug_allergy: "",
    career: "",
    name_company: "",
    Company: "",
    note: "",
  });

  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSendData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangeImg = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    // setFile(e.target.files[0])
  };

  const handleClick = async () => {
    alert('POST ')
    // const data = {
    //   ...sendData,
    //   image_sick: file,
    // };

    // try {
    //   const res = await axios.post(`${api}/add-person`, data);
    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "บันทึกข้อมูล สำเร็จ !",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });

    //   setTimeout(() => {
    //     navigate("/user");
    //   }, 1500);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
        <form >

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {/* Gid 1 */}
        <div>
          <h1 className="text-2xl">ข้อมูลทั่วไป</h1>
          <br />
          <p className="text-mg">Clinic Number : 123456789</p>

          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ชื่อ
            </label>
            <input
              type="text"
              name="firstname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your first name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              นามสกุล
            </label>
            <input
              type="text"
              name="lastname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your last name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              เบอร์โทรศัพท์
            </label>
            <input
              type="number"
              name="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Telephone Number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              เลขบัตรประชาชน
            </label>
            <input
              type="number"
              name="id_person"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Netional Number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ที่อยู่ปัจจุบัน
            </label>
            <input
              type="text"
              name="address_current"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Address"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              เบอร์โทรศัพท์ติดต่อฉุกเฉิน
            </label>
            <input
              type="number"
              name="tel_emergency"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Emergency Telephone number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              โรคประจำตัว
            </label>
            <input
              type="text"
              name="sickdisease"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your congenital disease"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Gid 2 */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <div className="">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  อัพโหลดรูป
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  name="image"
                  onChange={handleChangeImg}
                  accept=".png, .jpg"
                />
                {/* <input
                  type="file"
                  name="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={handleChangeImg}
                /> */}
              </div>
            </div>
            <div>
              {file && (
                <figure className="max-w-lg">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={file}
                    alt="image description"
                  />
                </figure>
              )}
            </div>
          </div>

          <div className="mt-2">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              เพศ
            </label>
            <select
              onChange={handleChange}
              name="sex"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Select gender</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              วัน/เดือน/ปี
            </label>
            <input
              type="date"
              name="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your congenital disease"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              แพ้ยา
            </label>
            <input
              type="text"
              name="drug_allergy"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Medical condition"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              อาชีพ
            </label>
            <input
              type="text"
              name="career"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your career"
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ชื่อสถานที่ทำงาน/บริษัท
            </label>
            <input
              type="text"
              name="name_company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your employer"
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              หมายเหตุ
            </label>
            <input
              type="text"
              name="note"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter P.S. "
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="text-white    bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleClick}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              บันทึก
            </button>
          </div>
        </div>
      </div>

        </form>

    </div>
  );
};

export default AddUser;
