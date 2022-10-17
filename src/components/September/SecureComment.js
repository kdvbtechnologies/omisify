//import Auth from "../Auth";
import C1 from "./C1";
import UpdateComment from "./UpdateComment";

export default function SecureComment() {
  //const userId = localStorage.getItem("https://omisify.com/userId");
  //const shortname = localStorage.getItem("https://omisify.com/shortname");
  const pointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );
  return <>{pointtcommentlife ? <UpdateComment /> : <C1 />}</>;
}
