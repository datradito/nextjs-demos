import Link from "next/link";

export default function News() {
  return (
    <>
      <h1>Desde News</h1>
      <Link href="/Details">
        <a>Home</a>
      </Link>
    </>
  );
}
