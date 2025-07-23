"use client";


export default function MainBlocks() {
   const addPatient=():void=>{

   }
    return (
        <>
            <h2>出院準備服務病人評估表</h2>

            <div className="info-row">
                <label>
                    醫院名稱
                    <input type="text" className="hospitalName" />
                </label>
                <label>
                    醫事機構代碼
                    <input type="text" className="hospitalCode" />
                </label>
                <label>
                    稽核日期
                    <input type="date" className="auditDate" />
                </label>
                <label>
                    稽核起止日期
                    <input type="text" className="auditRange" placeholder="例：2025/07/01 - 2025/07/10" />
                </label>
                <label>
                    稽核員
                    <input type="text" className="auditor" />
                </label>
            </div>

            <button className="add-btn" onClick={addPatient}>➕ 新增病人</button>
            <button className="add-btn" onClick={addPatient}>➕ 傳送表單</button>

            <div id="patient-container"></div>

        </>
    )
}