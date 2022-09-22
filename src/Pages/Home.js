import HomeAction from "../components/HomeAction";
import Navigation from "../components/Navigation";

export default function Home() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <HomeAction />
    </div>
  );
}
