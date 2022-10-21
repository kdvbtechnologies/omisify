import InitializeNewPointE10k from "./InitializeNewPointE10k";
import UpdateE10k from "./UpdateE10k";

export default function SecureUpdateE10k() {
  const getoldpointte10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointte10koct2022"
  );
  return (
    <>{getoldpointte10koct2022 ? <UpdateE10k /> : <InitializeNewPointE10k />}</>
  );
}
