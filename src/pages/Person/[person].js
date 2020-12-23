import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
//import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Header from '../../../components/Header'
import { Image , Avatar} from "@chakra-ui/react"

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
            <Header />
            <Image
                borderRadius="half"
                boxSize="150px"
                src={user.avatar_url}
                alt={user.name}
            />
            <h1>{user.name}</h1>
            <h1>{user.location}</h1>
        </>
    )
}

export default Person;
