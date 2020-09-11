import { useRouter } from "next/router";

export default function Persona() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Pagina de {router.query.persona}</h1>
    </div>
  );
}
