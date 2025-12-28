type Props = {
  logout: () => void;
};

export default function Admin({ logout }: Props) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <p>This page is protected. You can only see it after logging in.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
