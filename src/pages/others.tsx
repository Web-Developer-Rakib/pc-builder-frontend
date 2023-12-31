import ProductCard from "@/components/ProductCard";
import Head from "next/head";
import { IProduct, baseURL } from "../../constants";

export default function Others({ data }: any) {
  return (
    <>
      <Head>
        <title>Others</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 20,
          gap: 10,
        }}
      >
        {data.map((product: IProduct) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    `${baseURL}/products/get-products-by-category/Others`
  );
  const data: IProduct = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
