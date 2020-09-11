import Link from "next/link";

const blogs = [
  { b: "techie", inf: "nextjs" },
  { b: "dev", inf: "javascript" },
  { b: "personal", inf: "travel" },
];

export default function Details() {
  return (
    <div>
      {blogs.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.b}/${e.inf}`} href="/[blogs]/[posts]">
            <a>
              Ir a post {e.inf} del blog {e.b}
            </a>
          </Link>
        </div>
      ))}

      <Link href="/news">
        <a>Ir a otro post pero estatico</a>
      </Link>
    </div>
  );
}

//https://api.giphy.com/v1/gifs/search?api_key=Q8PQId8sYOFRKMiQZQgQwLnE3DHWfDm7&q=matrix&limit=25&rating=G&lang=en
