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

export const revalidate = 86400; //once a day

/**
 *
 * only lemon cocktails are prebuilt
 * the rest are fetched from the api
 */

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) => {
  const { search } = await searchParams;
  const resp = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search || ""}`
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
      <h1>search for your favorite cocktails</h1>

      <form action="">
        <input
          type="text"
          name="search"
          placeholder="Search the galaxy..."
          defaultValue={search}
        />
        <button type="submit">Search</button>
      </form>

      {Array.isArray(data?.drinks) && data?.drinks.length > 0 && (
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
      )}
    </>
  );
};
export default page;
