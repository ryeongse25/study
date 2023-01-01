import { useEffect } from "react";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

const API_KEY = "f04a5456de0d0dec84fb8e5126c555dc";

export default function Detail({ params }) {
  const router = useRouter();
  console.log(router);
  console.log("params", params);
  // const [title, id] = router.query.params || [];
  const [title, id] = params;
  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export function getServerSideProps(ctx) {
  console.log(ctx);
  const {
    params: { params },
  } = ctx;
  return {
    props: { params },
  };
}
