import ClaudiaHeader from "./ClaudiaHeader";
import ClaudiaNav from "./ClaudiaNav";

export default function ClaudiaEsperanceAction() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <ClaudiaNav />
      <div>
        <ClaudiaHeader />
      </div>
    </div>
  );
}
