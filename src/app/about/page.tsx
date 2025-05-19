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
      <p>
        The Dorgenark is a legendary pirate ship that sails not the seas, but
        the vast cosmic ocean between worlds. With its imposing hull adorned
        with fierce dragon motifs and powerful energy cannons, this vessel
        strikes fear in the hearts of the Longardian Empire forces. The
        ship&apos;s unique design allows it to traverse both atmospheric
        conditions and the void of space, making it the perfect vessel for
        galactic piracy.
      </p>

      <p>
        At the helm of this magnificent ship stands the boisterous and
        larger-than-life Captain Dorgengoa. Known throughout the galaxy for his
        tremendous appetite that matches his ambition, Dorgengoa leads his crew
        with a mixture of intimidation and fatherly guidance. Though fearsome in
        appearance with his massive frame and booming voice, the captain harbors
        a deep sense of justice and fights against the oppressive Longardian
        Empire while searching for the legendary planet known as Eden.
      </p>

      <p>
        Jaster Rogue, a young man from the desert planet Rosa, never imagined
        his destiny would be among the stars. Raised by a priest in the quiet
        town of Salgin, Jaster&apos;s life changed forever when he was mistaken
        for the legendary bounty hunter Desert Claw. After helping defend his
        town from beast attacks, Jaster was invited to join the Dorgenark&apos;s
        crew. What he didn&apos;t realize was that he possessed the
        extraordinary power of the Star King—a power that would make him central
        to the battle for the galaxy&apos;s future.
      </p>

      <p>
        Armed with the legendary sword known as the Desert Seeker, Jaster
        embarks on an epic journey across planets as diverse as the jungle world
        of Juraika and the frozen Alistia. As he unravels mysteries of his own
        origin and confronts the machinations of the sinister Daytron Company,
        Jaster grows from a simple desert boy into a true hero worthy of his
        unexpected legacy, discovering that his destiny is tied to the very fate
        of the cosmos itself.
      </p>
    </>
  );
};
export default page;
