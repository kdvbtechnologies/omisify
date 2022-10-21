import InitializeNewPointLikesComment from "./InitializeNewPointLikesComment";
import UpdateLikesComment from "./UpdateLikesComment";

export default function SecureUpdateLikesComment() {
  const getoldpointtlikescommentoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikescommentoct2022"
  );
  return (
    <>
      {getoldpointtlikescommentoct2022 ? (
        <UpdateLikesComment />
      ) : (
        <InitializeNewPointLikesComment />
      )}
    </>
  );
}
