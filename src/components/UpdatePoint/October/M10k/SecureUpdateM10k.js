import InitializeNewPointM10k from "./InitializeNewPointM10k";
import UpdateM10k from "./UpdateM10k";

export default function SecureUpdateM10k() {
  const getoldpointtm10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtm10koct2022"
  );
  return (
    <>{getoldpointtm10koct2022 ? <UpdateM10k /> : <InitializeNewPointM10k />}</>
  );
}
