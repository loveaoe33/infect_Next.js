"use client";

import { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import "../css/infect_patient.css";
import { ToastContainer, toast } from 'react-toastify';
import { UserData } from "../Infect/main";
// import User from "../main/User";
// If you have a User type or class, import it from the correct path, for example:



// 修正拼寫為 ModalViewProps，並添加 children（可選）
interface LoginAccount {
    isClose: () => void;
    isOpen: boolean;
    domain: string;
    title: string;
    userData: UserData;
}



// ModalView 組件
const modalView = ({ isClose, isOpen, title,domain }: LoginAccount) => {


    if (!isOpen) return null;

    // 可選擇性地在 Modal 打開時調用 viewAlert
    // viewAlert(); // 如果你希望每次 Modal 打開時彈出 alert，取消這行註解


    const errorAlert = (message: string): void => {
        toast.error(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    };


    const successAlert = (message: string): void => {
        toast.success(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={isClose}
            contentLabel={title}
            ariaHideApp={false} // 在Next.js中，使用此配置来避免错误
            preventScroll={false}
            className="patient-modal"
            overlayClassName="patient-overlay"


          style={{
                content: {
                    width: '110vw',       // 最大佔螢幕寬度的90%
                    maxWidth: '800px',   // 最大寬度600px
                    height: 'auto',
                    maxHeight: '80vh',   // 高度最大是視窗的80%
                    margin: 'auto',
                    overflow: 'auto',
                    padding: '20px',
                    borderRadius: '12px',
                },
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
            }}        >
            <button
                onClick={isClose}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}
            >
                ×
            </button>
        <div className="patient-body">
            <div className="patient-form-wrapper ">
                <h2>新增病人資料表單</h2>

                 <form>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="recordNo">病歷號碼</label>
          <input type="text" id="recordNo" name="recordNo" required />
        </div>

        <div className="form-field">
          <label htmlFor="name">病人姓名</label>
          <input type="text" id="name" name="name" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="birthday">病人生日</label>
          <input type="date" id="birthday" name="birthday" required />
        </div>

        <div className="form-field">
          <label htmlFor="healthCard">健保卡號碼</label>
          <input type="text" id="healthCard" name="healthCard" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="gender">病人性別</label>
          <select id="gender" name="gender" required>
            <option value="">請選擇</option>
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="other">其他</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="createDate">建立日期</label>
          <input type="date" id="createDate" name="createDate" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="createEmp">建立員工</label>
          <input type="text" id="createEmp" name="createEmp" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field" style={{ flex: '1 1 100%' }}>
          <label htmlFor="note">病人註記</label>
          <textarea id="note" name="note" rows={4}></textarea>
        </div>
      </div>

      <button type="submit" className="submit-button">
        送出
      </button>
    </form>
            </div>

            <ToastContainer />
        </div>
        </Modal>
    );
};


// export default function view_modal(){
// const [isModalOpen,setModalOpen]=useState(false);
// return( 
//     <div classNameName="flex flex-col items-center justify-center min-h-screen">
//       <button 
//         classNameName="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" 
//         onClick={() => setModalOpen(true)}
//       >
//         打開 Modal
//       </button>
//       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="彈出視窗">
//         <p>這是彈出視窗的內容。</p>
//       </Modal>
//     </div>

// )

// }


export default modalView;
