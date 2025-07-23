'use client';

import React from "react";
import "../css/main.css";
import MainBlocks from "./functionDiv";
import TableBlocks from "./tableDiv";
import PatientModal from "../modal/patient_modal";
import { Button } from "antd";



export type UserData = {
        username:string,
        password:string,
        useToken: string,
        level: number

    }
export default function Main() {


    const [patientIsOpen, setPatientOpen] = React.useState(false);
    const [formIsOpen, setFormOpen] = React.useState(false);
    const [isCloseLogin, setIsCloseLogin] = React.useState(() => () => setPatientOpen(false));
    const [domain, setDomain] = React.useState("localhost:8080");
    const [userData, setUserData] = React.useState<UserData>({
        username: "loveaoe33",
        password: "123",
        useToken: "1234567890abcdef",
        level: 1
    });
    return (
        <>
            <div className="infect-body">
                <div className="sidebar">
                    <h2>感染管制系統</h2>
                    <a href="#">總覽 Dashboard</a>
                    <a href="#">抗生素使用情形</a>
                    <a href="#">感染事件追蹤</a>
                    <a href="#">多重抗藥菌統計</a>
                    <a href="#">科別監測報表</a>
                    <a href="#">設定</a>
                </div>

                <div className="infect-main">
                    <div className="header">病人抗生素監控儀表板</div>
                    <div className="content">
                        <div className="card-grid">
                            <div className="card">
                                <h3>住院抗生素使用率</h3>
                                <p>目前抗生素使用率為 68%，相較上週上升 5%。</p>
                            </div>
                            <div className="card">
                                <h3>MRSA 感染率</h3>
                                <p>過去 7 天出現 2 例 MRSA 感染事件。</p>
                            </div>
                            <div className="card">
                                <h3>科別用藥異常警示</h3>
                                <p>ICU 部門發現異常抗生素組合 3 例。</p>
                            </div>
                            <div className="card">
                                <h3>耐藥菌趨勢圖</h3>
                                <p>請點擊以查看近 30 日趨勢分析。</p>
                            </div>
                        </div>
                    </div>
                    <MainBlocks />
                    <TableBlocks />

                </div>
            </div>
        </>
    )
}