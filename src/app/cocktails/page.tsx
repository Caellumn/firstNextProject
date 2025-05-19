import Link from "next/link";
import { Metadata } from "next";
import { slugit } from "../helpers";
export const metadata: Metadata = {
  title: "Cocktails",
  description: "this is my lemon cocktails overview",
  openGraph: {
    title: "Lemon Cocktails",
    description:
      "these are all my sour lemon cocktails happy drinking you drunkard",
    images: [{ url: "/alien.jpg" }],
  },
};

const page = async () => {
  const resp = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon"
  );

  interface Cocktail {
    idDrink: string;
    strDrink: string;
    strInstructions: string;
    strDrinkThumb: string;
  }
  const data = await resp.json();
  return (
    <>
      <h1>Cocktails page</h1>
      <ul className="cocktails-list">
        {data.drinks.map((drink: Cocktail) => (
          <li key={drink.idDrink}>
            <Link
              href={`/cocktails/${drink.idDrink}/${slugit(drink.strDrink)}`}
            >
              <div>
                <h2>{drink.strDrink}</h2>
                <p>{drink.strInstructions}</p>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default page;
