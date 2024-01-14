const NavigateToAdminPanel = () => {
  const navigate = useNavigate();
  const adminUrl = import.meta.env.VITE_API_ORIGIN + "/admin/";
  useEffect(() => {
    const adminWindow = window.open(adminUrl);
    if (adminWindow) {
      navigate("/");
    }
  }, []);
  return (
    <div className="container">
      <a
        href={adminUrl}
        style={{
          fontSize: "50px",
          textAlign: "center",
          fontWeight: "bold",
          display: "block",
          padding: "50px 0",
        }}
        target="_blank"
      >
        Admin Panel
      </a>
    </div>
  );
};

export default NavigateToAdminPanel;
