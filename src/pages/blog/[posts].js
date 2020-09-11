import { useRouter } from "next/router";
import Link from "next/link";

export default function Pages() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Esta pagina es parte de {router.query.blog}</h1>
      <h2>Este es un post de: {router.query.posts}</h2>
      <Link href="/Details">
        <a>Home</a>
      </Link>
    </div>
  );
}
