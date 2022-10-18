import PanelNav from "./Navigation/PanelNav";

export default function HomePanel() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <PanelNav />
      <h3>Bienvenue sur le panneau d'administration d'Omisify</h3>
    </div>
  );
}
