import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { VehiclePerson } from "../../api/VehiclePerson";

//TODO convencion {nombrecomponente}{Props}
export interface ListProps {
  ownersList: VehiclePerson[] | undefined;
}

export default function List({ ownersList }: ListProps) {
  return (
    <>
      {ownersList?.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicule]/[person]">
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </>
  );
}

List.getInitialProps = async () => {
  const res = await fetch("http://localhost:4001/vehicles");
  const ownersList: VehiclePerson | undefined = await res.json();
  return { ownersList: ownersList };
};
