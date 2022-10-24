import LoginNav from "../Auth/LoginNav";
import PanelNav from "./Navigation/PanelNav";
import TotalPointPanel from "./UpdatePoint/TotalPointPanel";

export default function HomePanel() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <PanelNav />
      <div className="panel-main">
        <div className="panel">
          <h3>Bienvenue sur le panneau d'administration d'Omisify</h3>
          <TotalPointPanel />
        </div>
      </div>
    </div>
  );
}
