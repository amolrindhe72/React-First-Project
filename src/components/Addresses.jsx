function Addresses() {
  const addresses = [
    { id: 1, city: "Toronto", country: "Canada" },
    { id: 2, city: "Pune", country: "India" },
    { id: 3, city: "New York", country: "USA" },
  ];

  return (
    <div>
      <h2>Addresses</h2>
      <ul>
        {addresses.map((addr) => (
          <li key={addr.id}>
            {addr.city}, {addr.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Addresses;