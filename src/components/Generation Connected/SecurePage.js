import Facebook from "./Facebook";
import PageGenerationConnected from "./PageGenerationConnected";

export default function SecurePage() {
  const resCompteLier = localStorage.getItem(
    "https://omisify.com/res-compte-lier"
  );

  return <>{resCompteLier ? <Facebook /> : <PageGenerationConnected />}</>;
}
