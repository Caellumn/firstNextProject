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
      <h2>Dorgenark Crew Contact Directory</h2>

      <div className="crew-contact">
        <div className="contact-card">
          <h3>Captain Dorgengoa</h3>
          <p>Position: Captain of the Dorgenark</p>
          <p>Space Transmitter: DRGNRK-CAPTAIN-001</p>
          <p>Orbital Frequency: 142.857 MHz</p>
          <p>
            Note: For emergencies only. Likely to respond only during meal
            times.
          </p>
        </div>

        <div className="contact-card">
          <h3>Jaster Rogue</h3>
          <p>Position: Desert Claw / Star King</p>
          <p>Space Transmitter: DSRT-CLW-7734</p>
          <p>Orbital Frequency: 118.331 MHz</p>
          <p>Location: Last seen on planet Rosa. May be exploring Juraika.</p>
        </div>

        <div className="contact-card">
          <h3>Kisala</h3>
          <p>Position: Princess / Navigator</p>
          <p>Space Transmitter: KSAL-PRNCSS-925</p>
          <p>Orbital Frequency: 103.578 MHz</p>
          <p>
            Note: Often accompanies Jaster on missions. Expert in defensive
            tactics.
          </p>
        </div>

        <div className="contact-card">
          <h3>Simon Wicard</h3>
          <p>Position: Engineer / Inventor</p>
          <p>Space Transmitter: SMWCRD-TECH-421</p>
          <p>Orbital Frequency: 97.113 MHz</p>
          <p>
            Note: Available for weapon modifications and technical support.
            Often in the engine room.
          </p>
        </div>

        <div className="contact-card">
          <h3>Zegram Ghart</h3>
          <p>Position: Mercenary / Tactician</p>
          <p>Space Transmitter: ZGRM-MERC-666</p>
          <p>Orbital Frequency: 89.997 MHz</p>
          <p>
            Note: Not likely to respond unless payment is involved. Expert in
            combat strategy.
          </p>
        </div>

        <div className="contact-card">
          <h3>Lilika Rhyza</h3>
          <p>Position: Warrior / Hunter of Juraika</p>
          <p>Space Transmitter: LLKA-JRKA-352</p>
          <p>Orbital Frequency: 76.221 MHz</p>
          <p>
            Note: Expert tracker and marksman. Can arrange supplies on Juraika.
          </p>
        </div>

        <div className="contact-card">
          <h3>Steve</h3>
          <p>Position: Insectron Champion / Battle Mentor</p>
          <p>Space Transmitter: STEVE-CHAMP-159</p>
          <p>Orbital Frequency: 64.882 MHz</p>
          <p>
            Note: Available for Insectron battle training and tournament
            guidance.
          </p>
        </div>

        <div className="contact-card">
          <h3>MIO</h3>
          <p>Position: Ship&apos;s AI / Navigation System</p>
          <p>System Access: DORGENARK-MIO-SYSTEM</p>
          <p>Broadcast Frequency: Always online</p>
          <p>
            Note: Primary contact for ship status, star charts, and cosmic
            anomalies.
          </p>
        </div>
      </div>
    </>
  );
};
export default page;
