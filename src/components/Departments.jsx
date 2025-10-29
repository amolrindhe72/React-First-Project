function Departments() {
  const departments = ["IT", "HR", "Finance", "Marketing"];

  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map((dept, i) => (
          <li key={i}>{dept}</li>
        ))}
      </ul>
    </div>
  );
}

export default Departments;