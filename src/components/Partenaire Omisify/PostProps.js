import { useDispatch, useSelector } from "react-redux";
import YetcheHeader from "./YetcheHeader";
import axios from "axios";
import { setPosts } from "../../feature/posts.slice";

export default function PostProps() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  async function GetPost() {
    await axios
      .get(
        `https://famous-peplum-dove.cyclic.app/api/post/634340e0476255949f2992a3`
      )
      .then((res) => dispatch(setPosts(res.data)));
  }
  GetPost();
  console.log(posts);

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
