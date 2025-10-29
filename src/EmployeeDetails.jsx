import { useState } from "react";

import DepartmentDetails from './Department.jsx'
import Locations from "./Locations.jsx";
import Skills from "./Skiils.jsx";

function GetEmployees(){

    const [employeeNm, setEmployeeNm] = useState("Amol");
    const [employeeAg, setEmployeeAg] = useState("35");
    const locations = ["Toronto", "Pune"];

    let departmentDetail = {
        deptId: 1,
        deptName: "Software",
        deptLocation: "Toronto"
    }

    function setEmployeeName(){
        if(employeeNm == "Amol"){
            setEmployeeNm("Ashwini");
        }else{
             setEmployeeNm("Amol");
        }
       
    }

    return(
        <>
        <div>
        <h1>Employee Details</h1>
        <h2>{employeeNm}</h2>
        <button onClick={setEmployeeName}>Change Employee Name</button>
        <h1>{employeeAg}</h1>
        <button onClick={() => employeeAg == 35? setEmployeeAg("36") :setEmployeeAg("35")}>Change Employee Age</button>
        </div>
        <hr></hr>
        <DepartmentDetails departmentDetail={departmentDetail}/>
        <hr></hr>
        <Locations locations={locations}/>
        <hr></hr>
        <Skills>
        <ol>
            <li>
                Java
            </li>
            <li>
                Microservices
            </li>
            <li>
                React
            </li>
        </ol>
        </Skills>
        </>
    )
}

export default GetEmployees