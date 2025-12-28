import { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";
import type { Fleet } from "../types/fleet";

type Props = {
  logout: () => void;
};

export default function Admin({ logout }: Props) {
  const [fleets, setFleets] = useState<Fleet[]>([]);

  const handleAddFleet = useCallback((fleet: Fleet) => {
    setFleets((prev) => [fleet, ...prev]);
  }, []);

  const handleUpdateDriver = useCallback((id: string, name: string) => {
    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, driverName: name } : f))
    );
  }, []);

  const handleToggleAvailability = useCallback((id: string) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, available: !f.available } : f
      )
    );
  }, []);

  const handleDelete = useCallback((id: string) => {
    setFleets((prev) => prev.filter((f) => f.id !== id));
  }, []);

  return (
    <div>
      <Navbar onLogout={logout} />
      <div style={{ display: "flex", minHeight: "calc(100vh - 48px)" }}>
        <Sidebar onAddFleet={handleAddFleet} />
        <main style={{ flex: 1, padding: 16 }}>
          <h3>Fleet List</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 12
            }}
          >
            {fleets.map((fleet) => (
              <FleetCard
                key={fleet.id}
                fleet={fleet}
                onUpdateDriver={handleUpdateDriver}
                onToggleAvailability={handleToggleAvailability}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
