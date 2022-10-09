import { useDispatch, useSelector } from "react-redux";
import YetcheHeader from "./YetcheHeader";
import axios from "axios";
import { setPosts } from "../../feature/posts.slice";

export default function PostProps() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const id = "634340e0476255949f2992a3";

  async function GetPost() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/post/${id}`)
      .then((res) => dispatch(setPosts(res.data)));
  }
  GetPost();

  return (
    <>
      <div>
        {posts?.map((post, id) => (
          <YetcheHeader key={id} post={post} />
        ))}
      </div>
    </>
  );
}
