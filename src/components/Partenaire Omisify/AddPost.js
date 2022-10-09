import axios from "axios";
import { useState } from "react";

export default function AddPost() {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [desc, setDesc] = useState("");

  async function AddThePost(e) {
    e.preventDefault();
    await axios({
      method: "post",
      url: "",
      data: {
        userId,
        username,
        desc,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        name="userId"
        onChange={(e) => setUserId(e.target.value)}
      />

      <input
        type="text"
        placeholder="username"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="desc"
        value={desc}
        name="desc"
        onChange={(e) => setDesc(e.target.value)}
      />

      <button onClick={AddThePost}>Valider</button>
    </>
  );
}
