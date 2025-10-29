
function DepartmentDetails({departmentDetail}){
return(
    <>
    <h1>Department Details</h1>
    <h2>Employee Department ID is : {departmentDetail.deptId}</h2>
    <h2>Employee Department Name is : {departmentDetail.deptName}</h2>
    <h2>Employee Department Location is : {departmentDetail.deptLocation}</h2>
    </>
)

}

export default DepartmentDetails;