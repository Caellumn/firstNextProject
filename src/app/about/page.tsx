import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "this is my about page",
  openGraph: {
    title: "About",
    description: "this is my about page",
    images: [{ url: "/alien.jpg" }],
  },
};

const page = () => {
  return (
    <>
      <h1>About page</h1>
      <h2>{new Date().toLocaleString()}</h2>
      <p>we are about page</p>
      <p>we are about page</p>
      <p>we are about page</p>
      <p>we are about page</p>
    </>
  );
};
export default page;
