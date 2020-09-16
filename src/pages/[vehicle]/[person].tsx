import { NextPageContext } from "next";
import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { VehiclePerson } from "../../../api/VehiclePerson";

export interface PersonProps {
  ownersList?: VehiclePerson[];
}

export default function Person({ ownersList }: PersonProps) {
  const router = useRouter();

  const [owners, setOwners] = useState(ownersList);
  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        "http://localhost:4001/vehicles?ownerName=" +
          router.query.person +
          "&vehicle=" +
          router.query.vehicle
      );
      const ownersList = await res.json();
      setOwners(ownersList);
    }
    if (ownersList?.length == 0) {
      loadData();
    }
  }, []);

  if (!owners?.[0]) {
    return <>Loading...</>;
  }

  return <pre>{owners[0]?.details}</pre>;
}

//TODO override of query params in NextPageContext
interface CustomNextPageContext extends NextPageContext {
  query: {
    person: string;
    vehicle: string;
  };
}

Person.getInitialProps = async (ctx: CustomNextPageContext) => {
  if (!ctx.req) {
    return { ownersList: [] };
  }

  const { query } = ctx;

  const res = await fetch(
    "http://localhost:4001/vehicles?ownerName=" +
      query.person +
      "&vehicle=" +
      query.vehicle
  );
  const ownersList: VehiclePerson[] | undefined = await res.json();
  return { ownersList: ownersList };
};
