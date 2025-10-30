import { useState } from "react";

function Sidebar({ setActivePage }) {

  return (
   <aside className="sidebar">
      <ul>
        <li onClick={() => setActivePage("policies")}>👨‍💼 Policies</li>
      </ul>
    </aside>
  );
}

export default Sidebar;