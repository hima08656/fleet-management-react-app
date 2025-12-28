import { useState } from "react";
import type { Fleet } from "../types/fleet";

type Props = {
  onAddFleet: (fleet: Fleet) => void;
};

export default function Sidebar({ onAddFleet }: Props) {
  const [regNo, setRegNo] = useState("");
  const [category, setCategory] = useState<Fleet["category"]>("Auto");
  const [driverName, setDriverName] = useState("");
  const [available, setAvailable] = useState(true);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!regNo.trim() || !driverName.trim()) {
      alert("Vehicle Registration Number and Driver Name are required.");
      return;
    }

    const newFleet: Fleet = {
      id: crypto.randomUUID(),
      regNo: regNo.trim(),
      category,
      driverName: driverName.trim(),
      available,
    };

    onAddFleet(newFleet);

    // Clear form
    setRegNo("");
    setCategory("Auto");
    setDriverName("");
    setAvailable(true);
  }

  return (
    <aside style={{ width: 280, borderRight: "1px solid #ddd", padding: 12 }}>
      <h3>Add Fleet</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vehicle Registration Number</label><br />
          <input value={regNo} onChange={(e) => setRegNo(e.target.value)} />
        </div>

        <div style={{ marginTop: 10 }}>
          <label>Category</label><br />
          <select value={category} onChange={(e) => setCategory(e.target.value as Fleet["category"])}>
            <option>Auto</option>
            <option>Car</option>
            <option>Truck</option>
            <option>Bus</option>
          </select>
        </div>

        <div style={{ marginTop: 10 }}>
          <label>Driver Name</label><br />
          <input value={driverName} onChange={(e) => setDriverName(e.target.value)} />
        </div>

        <div style={{ marginTop: 10 }}>
          <label>Availability Status</label><br />
          <select value={available ? "Available" : "Unavailable"} onChange={(e) => setAvailable(e.target.value === "Available")}>
            <option>Available</option>
            <option>Unavailable</option>
          </select>
        </div>

        <button type="submit" style={{ marginTop: 12 }}>Add Fleet</button>
      </form>
    </aside>
  );
}
