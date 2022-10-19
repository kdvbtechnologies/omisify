import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../../Partenaire Omisify/Loader";
import { useDispatch, useSelector } from "react-redux";
import setApi from "../../../../../feature/panel/panelcomment.slice";

export default function PanelCommentOctober() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const api = useSelector((state) => state.panelcomment.panelcomment);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/panel/october/comment/`)
        .then((res) => {
          console.log(res);
          dispatch(setApi(res.data));
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {api?.map((api) => (
            <>
              <h3>Nombre de commentaires: {api.commentrecent}</h3>
              <p>Heure: {api.time}</p>
              <p>Date: {api.date}</p>
              <p>
                Nombre total des commentaires dans la vie :{" "}
                {api.numbertcommentlife}
              </p>
              <p>
                Nombre total des commentaires dans l'année 2022 :{" "}
                {api.numbertcomment2022}
              </p>
              <p>
                Nombre total des commentaires en Octobre 2022 :{" "}
                {api.numbertcommentoct2022}
              </p>
              <p>Noms Principal: {api.partnername}</p>
              <p>Noms Court: {api.shortname}</p>
              <p>Noms de naissance: {api.name}</p>
            </>
          ))}
        </>
      )}
    </>
  );
}
