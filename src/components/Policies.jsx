import './Policies.css'

import { useState } from "react";

function Policies() {
  const [policies, updatePolicies] = useState([
    { policyNumber: "POL1", policyEffDate: "23-12-2024", policyExpDate: "23-12-2025" , totalPremium: 2000.0},
    { policyNumber: "POL2", policyEffDate: "24-12-2024", policyExpDate: "24-12-2025" , totalPremium: 3000.0},
    { policyNumber: "POL3", policyEffDate: "25-12-2024", policyExpDate: "25-12-2025" , totalPremium: 4000.0},
    { policyNumber: "POL4", policyEffDate: "26-12-2024", policyExpDate: "26-12-2025" , totalPremium: 5000.0},
    { policyNumber: "POL5", policyEffDate: "27-12-2024", policyExpDate: "27-12-2025" , totalPremium: 6000.0},
    { policyNumber: "POL6", policyEffDate: "28-12-2024", policyExpDate: "28-12-2025" , totalPremium: 7000.0},
    { policyNumber: "POL7", policyEffDate: "29-12-2024", policyExpDate: "29-12-2025" , totalPremium: 8000.0},
    { policyNumber: "POL8", policyEffDate: "30-12-2024", policyExpDate: "30-12-2025" , totalPremium: 9000.0},
    { policyNumber: "POL9", policyEffDate: "31-12-2024", policyExpDate: "31-12-2025" , totalPremium: 10000.0},
    { policyNumber: "POL10", policyEffDate: "01-01-2025", policyExpDate: "01-01-2026" , totalPremium: 11000.0}
  ]);

  const [showPopup, setShowPopup] = useState(false);

  const [add, setAdd] = useState(false);

  const [policy, setPolicy] = useState({ policyNumber: "", policyEffDate: "", policyExpDate: "", totalPremium:0.0});

   // Handle form input change
  const handleChange = (p) => {
    console.log(p.target.name);
    console.log(p.target.value);
    const { name, value} = p.target;
    setPolicy((prev) => ({ ...prev, [name]: value }));
  };

  // Save handler
  const handleSave = () => {
    console.log("Policy Saved:", policy);
    setShowPopup(false); // close popup
    
    setTimeout(() => {
    {add ? updatePolicies((prevPolicies) => [...prevPolicies,{policyNumber: policy.policyNumber, policyEffDate: policy.policyEffDate, policyExpDate: policy.policyExpDate, totalPremium: policy.totalPremium}
    ]) : updatePolicies((prev) =>
      prev.map((p) => (p.policyNumber === policy.policyNumber ? {policyNumber: policy.policyNumber, policyEffDate: policy.policyEffDate, policyExpDate: policy.policyExpDate, totalPremium: policy.totalPremium} : {policyNumber: p.policyNumber, policyEffDate: p.policyEffDate, policyExpDate: p.policyExpDate, totalPremium: p.totalPremium}))
    );}
    
    
  }, 2000);

     

    console.log("Policies Saved:", policies)
    setPolicy({ policyNumber: "", policyEffDate: "", policyExpDate: "", totalPremium:0.0 }); // clear form
  };

   // Open popup and pre-fill fields for editing
  const handleEdit = (policy) => {
    console.log("Policy Number: ", policy.policyNumber);
    setPolicy(policy); // set the policy to edit
    setPolicy({ policyNumber: policy.policyNumber, policyEffDate: policy.policyEffDate, policyExpDate: policy.policyExpDate, totalPremium: policy.totalPremium}); // clear form
    setShowPopup(true);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Policy Summary Screen</h2>
      <button  className='add-employee-button'  onClick={() => {setShowPopup(true); setAdd(true); setPolicy({ policyNumber: "", policyEffDate: "", policyExpDate: "", totalPremium:0.0 });}}>Add Policy</button>
      <table className="employee-table">
        <thead>
          <tr>
          <th>
           Policy Number#
          </th>
          <th>
            Policy Effective Date
          </th>
          <th>
           Policy Expiration date
          </th>
          <th>
           Total Premium
          </th>
          <th>
            Edit Policy
          </th>
          </tr>
        </thead>
        <tbody>
        {policies.map((policy) => (
            <tr key={policy.policyNumber}>
              <td>
                {policy.policyNumber}
              </td>
              <td>
                {policy.policyEffDate}
              </td>
              <td>
                {policy.policyExpDate}
              </td>
              <td>
                {policy.totalPremium}
              </td>
              <td>
                <a onClick={()=>  handleEdit(policy)} href="#">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            {add? <h2>Add Policy</h2> : <h2>Edit Policy</h2>}
            <input
              type="text"
              name="policyNumber"
              placeholder="Enter Policy Number"
              value={policy.policyNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="policyEffDate"
              placeholder="Enter Policy Effective date"
              value={policy.policyEffDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="policyExpDate"
              placeholder="Enter Policy Expiration Date"
              value={policy.policyExpDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="totalPremium"
              placeholder="Enter Total Premium"
              value={policy.totalPremium}
              onChange={handleChange}
            />
            <div className="popup-buttons">
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="close-btn" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        )}
    </div>
  );
}

export default Policies;