import InitializeNewPointComment from "./InitializeNewPointComment";
import UpdateComment from "./UpdateComment";

export default function SecureUpdateComment() {
  const pointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );
  return (
    <>{pointtcommentlife ? <UpdateComment /> : <InitializeNewPointComment />}</>
  );
}
