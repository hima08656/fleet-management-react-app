import React from "react";
import type { Fleet } from "../types/fleet";

type Props = {
  fleet: Fleet;
  onUpdateDriver: (id: string, name: string) => void;
  onToggleAvailability: (id: string) => void;
  onDelete: (id: string) => void;
};

function FleetCardBase({ fleet, onUpdateDriver, onToggleAvailability, onDelete }: Props) {
  function handleUpdateDriver() {
    const name = prompt("Enter new driver name:");
    if (name && name.trim()) {
      onUpdateDriver(fleet.id, name.trim());
    } else {
      // Optional alert: alert("Invalid driver name");
    }
  }

  function handleToggleAvailability() {
    onToggleAvailability(fleet.id);
  }

  function handleDelete() {
    if (confirm("Are you sure you want to delete this vehicle?")) {
      onDelete(fleet.id);
    }
  }

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 6,
      padding: 10,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }}>
      <img src="https://via.placeholder.com/280x140?text=Vehicle" alt="vehicle" style={{ width: "100%", borderRadius: 4 }} />
      <div><strong>Reg No:</strong> {fleet.regNo}</div>
      <div><strong>Category:</strong> {fleet.category}</div>
      <div><strong>Driver:</strong> {fleet.driverName}</div>
      <div><strong>Status:</strong> {fleet.available ? "Available" : "Unavailable"}</div>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button onClick={handleUpdateDriver}>Update Driver</button>
        <button onClick={handleToggleAvailability}>
          {fleet.available ? "Mark Unavailable" : "Mark Available"}
        </button>
        <button onClick={handleDelete} style={{ color: "white", background: "crimson" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

const FleetCard = React.memo(FleetCardBase);
export default FleetCard;
