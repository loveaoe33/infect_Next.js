'use client';
import "../css/infect_function.css"

import PatientModal from "../modal/patient_modal";
import { UserData } from "../Infect/main";
import FormModal from "../modal/formSelect_modal";


import React from 'react';
export default function MainBlocks() {
    const [patientIsOpen, setPatientOpen] = React.useState(false);
    const [formIsOpen, setFormOpen] = React.useState(false);
    const isPaCloseLogin = () => setPatientOpen(false);
    const isFoCloseLogin = () => setFormOpen(false);

    const [domain, setDomain] = React.useState("localhost:8080");
    const [userData, setUserData] = React.useState<UserData>({
        username: "loveaoe33",
        password: "123",
        useToken: "1234567890abcdef",
        level: 1
    });
    return (
        <>
            <div className='function-body'>
                <div className="function-panel">
                    <button className="btn btn-default" onClick={() => setPatientOpen(true)}>➕ 新增病歷</button>
                    <button className="btn btn-sucess" onClick={() => setFormOpen(true)}>➕ 新增表單資料</button>
                    <button className="btn btn-secondary">✏️ 編輯表單</button>
                    {/* <button className="btn btn-danger">🗑️ 刪除</button> */}
                    <button className="btn btn-outline">📤 匯出</button>
                    <button className="btn btn-ghost">🔄 重新整理</button>
                </div>
                                {< FormModal isClose={isFoCloseLogin} isOpen={formIsOpen} title="選擇表單模板" domain={domain} userData={userData} />}

                {<PatientModal isClose={isPaCloseLogin} isOpen={patientIsOpen} title="登入" domain={domain} userData={userData} />}
            </div>
        </>
    )
};
