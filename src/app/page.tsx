import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "this is my home page",
  openGraph: {
    title: "Home",
    description: "this is my home page",
    images: [{ url: "/alien.jpg" }],
  },
};

const page = () => {
  return (
    <>
      <h1>Home</h1>
      <p>we are home page</p>
      <p>we are home page</p>
      <p>we are home page</p>
      <p>we are home page</p>
      <p>we are home page</p>
    </>
  );
};
export default page;
