import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default function List() {
  
    // const [user, setUsers] = useState([]);

    const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

    // useEffect(() => {
    //   async function loadData() {
    //     const response = await fetch(
    //       "https://api.github.com/users/GrahamCampbell"
    //     );
    //     const user = await response.json();
    //     setUsers(user);
    //   }

    //   loadData();
    // }, []);

  return (
    <div>
      <h1>Top 5 GitHub Users</h1>
      <h2>Tap the username to see more information</h2>
      {topFive.map((user, index) => (
        <div key={index}>
          <Link as={`/Person/${user}`} href="/Person/[person]">
            <a>
              {user}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

// List.getInitialProps = async () => {
//   const response = await fetch(
//     "https://api.github.com/users/"
//   );
//   const giflist = await response.json();
//   return { giflist };
// };
