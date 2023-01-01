import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

const API_KEY = "f04a5456de0d0dec84fb8e5126c555dc";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_API_KEY);
  }, []);

  return (
    <div>
      <Seo title="Title" />
      {!movies && <h4>Loading...</h4>}
      {results?.map((movie) => {
        return (
          <div
            key={movie.id}
            onClick={() => onClick(movie.id, movie.original_title)}
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width="100"
              />
            </div>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
              legacyBehavior
            >
              <a>{movie.original_title}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  const { results } = await response.json();
  return {
    props: { results },
  };
}
