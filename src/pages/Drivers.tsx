import { useState } from "react";
import { Driver } from "../types/Driver";

const Drivers = () => {
  const [drivers] = useState<Driver[]>([
    { id: 1, name: "Ravi", licenseNumber: "DL12345" },
    { id: 2, name: "Kiran", licenseNumber: "DL67890" }
  ]);

  return (
    <div>
      <h2>Drivers</h2>
      <ul>
        {drivers.map(d => (
          <li key={d.id}>
            {d.name} - {d.licenseNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drivers;
