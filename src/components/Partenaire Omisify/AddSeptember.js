import axios from "axios";

export default function AddSeptember() {
  const total = 0;

  const userId = localStorage.getItem("https://omisify.com/userId");

  axios({
    method: "post",
    url: "https://famous-peplum-dove.cyclic.app/api/point/add/tseptember",
    data: {
      userId,
      total,
    },
  })
    .then((res) => {
      console.log(res.data.message);
      const idtotal = res.data.message;
      localStorage.setItem("https://omisify.com/idtotal", idtotal);
    })
    .catch((err) => console.log(err));

  return (
    <>
      <h1>Add September</h1>
    </>
  );
}
