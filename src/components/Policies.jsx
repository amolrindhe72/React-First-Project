import './Policies.css'

function Policies() {
  const employees = [
    { id: 1, name: "Amol", dept: "IT" },
    { id: 2, name: "Ashwini", dept: "HR" },
    { id: 3, name: "Rahul", dept: "Finance" },
  ];

  return (
    <div>
      <div>
      <h2 style={{ textAlign: 'center' }}>Policy Summary Screen</h2>
      <button  className='add-employee-button'  onClick={() => alert('Add')}>Add Policy</button>
      </div>
      <table className="employee-table">
        <thead>
          <th>
            Employee Id
          </th>
          <th>
            Employee Name
          </th>
          <th>
            Department Name
          </th>
          <th>
            Edit Employee
          </th>
        </thead>
        <tbody>
        {employees.map((emp) => (
            <tr>
              <td>
                {emp.id}
              </td>
              <td>
                {emp.name}
              </td>
              <td>
                {emp.dept}
              </td>
              <td>
                <a onClick={()=> alert('Edit')} href="">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Policies;