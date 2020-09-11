import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default function List(gifList) {
  //   const [gifList, setGiflist] = useState([]);
  //   useEffect(() => {
  //     async function loadData() {
  //       const response = await fetch(
  //         "https://api.giphy.com/v1/gifs/search?api_key=Q8PQId8sYOFRKMiQZQgQwLnE3DHWfDm7&q=matrix&limit=25&rating=G&lang=en"
  //       );
  //       const gifList = await response.json();
  //       setGiflist(gifList);
  //     }

  //     loadData();
  //   }, []);

  return (
    <div>
      {console.log(gifList)}
      {gifList.giflist.data.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.title}/${e.id}`} href="/[blog]/[posts]">
            <a>
              Ir al gif: {e.title} con el siguiente ID: {e.id}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

List.getInitialProps = async () => {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=Q8PQId8sYOFRKMiQZQgQwLnE3DHWfDm7&q=matrix&limit=25&rating=G&lang=en"
  );
  const giflist = await response.json();
  return { giflist };
};
