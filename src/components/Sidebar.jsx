import { useState } from "react";

function Sidebar({ setActivePage }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      className={`sidebar ${collapsed ? "collapsed" : ""}`}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <ul>
        <li onClick={() => setActivePage("employees")}>👨‍💼 Employees</li>
        <li onClick={() => setActivePage("departments")}>🏢 Departments</li>
        <li onClick={() => setActivePage("addresses")}>📍 Addresses</li>
      </ul>
    </aside>
  );
}

export default Sidebar;