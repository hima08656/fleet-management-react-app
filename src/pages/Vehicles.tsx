import { useState } from "react";
import { Vehicle } from "../types/Vehicle";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 1, name: "Truck 1", number: "AP09AB1234", status: "Active" },
    { id: 2, name: "Van 1", number: "TS08CD5678", status: "Inactive" }
  ]);

  return (
    <div>
      <h2>Vehicles</h2>
      <ul>
        {vehicles.map(v => (
          <li key={v.id}>
            {v.name} - {v.number} - {v.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehicles;
