function Employees() {
  const employees = [
    { id: 1, name: "Amol", dept: "IT" },
    { id: 2, name: "Ashwini", dept: "HR" },
    { id: 3, name: "Rahul", dept: "Finance" },
  ];

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            <strong>{emp.name}</strong> — {emp.dept}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;