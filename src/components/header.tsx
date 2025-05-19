import Link from "next/link";

const header = () => {
  return (
    <header>
      <p>logo</p>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/cocktails">Cocktails</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/pokedex">Pokédex</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default header;
