import BeforeCalculComment from "./BeforeCalculComment";
import InitializeNewPointComment from "./InitializeNewPointComment";

export default function SecureUpdateComment() {
  const pointtcommentoct2022 = localStorage.getItem(
    "https://omisify.com/pointtcommentoct2022"
  );

  return (
    <>
      {pointtcommentoct2022 ? (
        <BeforeCalculComment />
      ) : (
        <InitializeNewPointComment />
      )}
    </>
  );
}
