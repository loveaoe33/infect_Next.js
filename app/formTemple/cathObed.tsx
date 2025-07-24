"use client";

import { useEffect, useState } from "react";
import '../css/cathObed.css'
type hospital = {   //titile data
    name: string;
    code: string;
    auditDate: string;
    auditRange: string;
    auditor: string;
    formCode: string;
}

type patient = {   //patient data
    id: number;
    name?: string | null;
    birthDate?: string | null;
    icCard?: string | null;
    gender?: string | null;
    formData?: patientForm | null;
}

type patientForm = {   //form check data
    id: number;
    hashCode: string;
    title: string;
    jsonString: string;
    createDate: string;
}



export default function MainBlocks() {
    const [patients, setPatients] = useState<patient[]>([]);



    const addPatient = (): void => {
        setPatients((prev) => [...prev, {
            id: Date.now(),
        }]);
    }

    const removePatient = (id: number): void => {
      setPatients((prev) => prev.filter((patient) => patient.id !== id));
    }
   
    const updatePatietnt = (id: number, key: keyof patient, value: string | null): void => {   //update form json data



    }


    useEffect(() => {



    },
        []);

    return (
        <>
            <h2>出院準備服務病人評估表</h2>

            <div className="obed-body">
                <button onClick={addPatient}>➕ 新增病人</button>
                <div id="patient-container">
                    {patients.map((patient) => (
                        <details key={patient.id} open>
                            <button onClick={() => removePatient(patient.id)}>➖ 刪除病人</button>

                            <summary>病人 {patient.id}</summary>
                            <div className="patient-info">
                                <label>
                                    病歷號碼
                                    <input type="text" name={`recordNo-${patient.id}`} />
                                </label>
                                <label>
                                    病人姓名
                                    <input type="text" name={`name-${patient.id}`} />
                                </label>
                                <label>
                                    生日
                                    <input type="date" name={`birth-${patient.id}`} />
                                </label>
                                <label>
                                    健保卡號
                                    <input type="text" name={`card-${patient.id}`} />
                                </label>
                                <label>
                                    性別
                                    <input type="text" name={`gender-${patient.id}`} />
                                </label>
                            </div>

                            <table className="obed-table">
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>符合(○)</th>
                                        <th>部分符合(△)</th>
                                        <th>不符合(×)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>病人是否符合評估資格</td>
                                        <td>
                                            <input
                                                type="radio"
                                                name={`qualify-${patient.id}`}
                                                value="O"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="radio"
                                                name={`qualify-${patient.id}`}
                                                value="△"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="radio"
                                                name={`qualify-${patient.id}`}
                                                value="X"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>有無書面紀錄</td>
                                        <td>
                                            <input
                                                type="radio"
                                                name={`document-${patient.id}`}
                                                value="O"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="radio"
                                                name={`document-${patient.id}`}
                                                value="△"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="radio"
                                                name={`document-${patient.id}`}
                                                value="X"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </details>
                    ))}
                </div>
            </div>

        </>
    )
}