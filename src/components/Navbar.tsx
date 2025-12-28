type Props = { onLogout: () => void };

export default function Navbar({ onLogout }: Props) {
  return (
    <div style={{
      padding: "10px 16px",
      borderBottom: "1px solid #ddd",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <strong>Admin Dashboard</strong>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

