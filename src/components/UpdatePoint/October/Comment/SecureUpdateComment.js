import InitializeNewPointComment from "./InitializeNewPointComment";
import UpdateComment from "./UpdateComment";

export default function SecureUpdateComment() {
  const pointtcommentoct2022 = localStorage.getItem(
    "https://omisify.com/pointtcommentoct2022"
  );
  return (
    <>
      {pointtcommentoct2022 ? <UpdateComment /> : <InitializeNewPointComment />}
    </>
  );
}

/*

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


*/
