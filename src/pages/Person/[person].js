import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Header from '../../../components/Header'
import {Divider, Grid, Avatar, Paper} from '@material-ui/core';
import { Box } from "@chakra-ui/react"



const Person = () => {
    const [user, setUsers] = useState([]);   
    const router = useRouter();
    console.log('ROUTE', router.query)

    useEffect(() => {
        async function loadData() {
          const response = await fetch(
            `https://api.github.com/users/${router.query.person}`
          );
          const user = await response.json();
          setUsers(user);
        }
  
        loadData();
      }, []);
    return (
        <>
            {console.log(user)}
            
            <Grid container={true}>
                <Grid item sm={3}>
                    <Link as={'/'} href="/">
                        <a>
                            <Box bg="black" w="100%" p={4} color="white">
                                Back
                            </Box>
                        </a>
                    </Link>
                </Grid>
                <Grid item sm={9}>
                    <Header />
                </Grid>
            </Grid>

            <Divider spacing={3} />
            <div>
            <Grid item xs={12} sm={4} md={4} lg={6}>
                <Paper>
                    <Avatar alt={user.name} src={user.avatar_url} />   
                    <h2>{user.name}</h2>
                    <h4>{user.location}</h4>
                </Paper>
            </Grid>
            </div>
        </>
    )
}

export default Person;


