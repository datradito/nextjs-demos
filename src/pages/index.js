import Link from "next/link";
import {Grid, Button} from '@material-ui/core';
import Header from '../../components/Header';

export default function List() {

    const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

  return (
    <div>
      <Header />
      <h1>Top 5 GitHub Users</h1>
      <h2>Tap the username to see more information</h2>
      <Grid container spacing={1}>
      {topFive.map((user, index) => (
        <Grid item xs={6} md={6} key={index}>
          <Link as={`/Person/${user}`} href="/Person/[person]">
            <Button variant="contained" color="primary" href="/Person/[person]">
              {user}
            </Button>
          </Link>
        </Grid>
      ))}
      </Grid>
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
