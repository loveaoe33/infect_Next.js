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
const modalView = ({ isClose, isOpen, title, domain }: LoginAccount) => {

    const [selectedTemplate, setSelectedTemplate] = useState('dashboard');
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
                    top: '-5px',
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
            
         
                        <div className="form-body">
                            <form>
                                <label htmlFor="template">選擇模板：</label>
                                <select
                                    id="template"
                                    value={selectedTemplate}
                                    onChange={(e) => setSelectedTemplate(e.target.value)}
                                >
                                    <option value="dashboard">📊 Dashboard</option>
                                    <option value="user">👤 User</option>
                                    <option value="report">📈 Report</option>
                                </select>
                            </form>

                            <div className="template-content-container">
                                {selectedTemplate === 'dashboard' && (
                                    <div className="template-content content-dashboard">
                                        <h2>📊 Dashboard Template</h2>
                                        <p>這裡是 Dashboard 相關的元件展示區塊。</p>
                                    </div>
                                )}

                                {selectedTemplate === 'user' && (
                                    <div className="template-content content-user">
                                        <h2>👤 User Template</h2>
                                        <p>這裡是 User 管理頁的模組展示。</p>
                                                                                <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>
                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>

                                        <p>這裡是 User 管理頁的模組展示。</p>
                                        

                                    </div>
                                )}

                                {selectedTemplate === 'report' && (
                                    <div className="template-content content-report">
                                        <h2>📈 Report Template</h2>
                                        <p>這裡是報表頁面的設計模板。</p>
                                    </div>
                                )}
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
