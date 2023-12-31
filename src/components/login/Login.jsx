import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { api } from "../../api/Api";

const Login = () => {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handelChange = (e) => {
    setDataLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("login", 0);


    if(dataLogin.username == "admin" || dataLogin.password == "admin"){
           Swal.fire({
        position: "center",
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ !",
        showConfirmButton: false,
        timer: 2000,
       });
             localStorage.setItem("statusLogin", 1);
        setInterval(() => {
          window.location.assign("/admin"), 1500;
        });

    }  else if (dataLogin.username == "doctor" || dataLogin.password == "1234") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ !",
        showConfirmButton: false,
        timer: 2000,
       });
             localStorage.setItem("statusLogin", 2);
        setInterval(() => {
          window.location.assign("/doctor"), 1500;
        });
    } 
    
    
    else {

            Swal.fire({
        title: "Username/Password ไม่ถูกต้อง!",
        text: "กรุณาลองใหม่อีกครั้ง",
        icon: "error",
        confirmButtonText: "ยืนยัน",
      });

      setDataLogin({
        username: "",
        password: "",
      });
    }


// API
    // try {
    //   const res = await axios.post(`${api}/login`, dataLogin);
    //   if (res.data.accessToken === "") return;
    //   localStorage.setItem("accessToken", res.data.accessToken);

    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "เข้าสู่ระบบสำเร็จ !",
    //     showConfirmButton: false,
    //     timer: 2000,
    //   });

    //   localStorage.setItem("login", 0);

    //   if (res.data.check === "1") {
    //     localStorage.setItem("statusLogin", 1);
    //     setInterval(() => {
    //       window.location.assign("/admin"), 1500;
    //     });
    //   } else {
    //     localStorage.setItem("statusLogin", 2);
    //     setInterval(() => {
    //       window.location.assign("/doctor"), 1500;
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    //   Swal.fire({
    //     title: "Username/Password ไม่ถูกต้อง!",
    //     text: "กรุณาลองใหม่อีกครั้ง",
    //     icon: "error",
    //     confirmButtonText: "ยืนยัน",
    //   });

    //   setDataLogin({
    //     username: "",
    //     password: "",
    //   });
    // }
  };

  return (
    <div className="">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png"
              alt="logo"
            />
            ระบบคลินิก
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                เข้าสู่ระบบ
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Username
                  </label>
                  <input
                    value={dataLogin.username}
                    onChange={handelChange}
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    value={dataLogin.password}
                    onChange={handelChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  เข้าสู่ระบบ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
