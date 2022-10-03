import SimoHeader from "./SimoHeader";
import SimoNav from "./SimoNav";

export default function SimoRandy() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <SimoNav />
      <div>
        <SimoHeader />
      </div>
    </div>
  );
}
