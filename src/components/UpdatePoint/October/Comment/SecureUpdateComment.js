import InitializeNewPointComment from "./InitializeNewPointComment";
import UpdateComment from "./UpdateComment";

export default function SecureUpdateComment() {
  const getoldpointtcommentoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtcommentoct2022"
  );
  return (
    <>
      {getoldpointtcommentoct2022 ? (
        <UpdateComment />
      ) : (
        <InitializeNewPointComment />
      )}
    </>
  );
}
