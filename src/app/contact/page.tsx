import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "this is my contact page",
  openGraph: {
    title: "Contact",
    description: "this is my contact page",
    images: [{ url: "/alien.jpg" }],
  },
};

const page = () => {
  return (
    <>
      <h1>Contact page</h1>
      <p>we are contact page</p>
      <p>we are contact page</p>
      <p>we are contact page</p>
      <p>we are contact page</p>
    </>
  );
};
export default page;
