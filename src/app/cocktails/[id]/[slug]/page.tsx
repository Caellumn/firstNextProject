import { slugit } from "@/app/helpers";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
interface PageParams {
  id: string;
  slug: string;
}

//generate metadata for the page
export const generateMetadata = async ({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> => {
  const { id } = await params;
  const resp = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await resp.json();
  return {
    title: data.drinks[0].strDrink,
    description: data.drinks[0].strInstructions,
    alternates: {
      canonical: `/cocktails/${id}/${slugit(data.drinks[0].strDrink)}`,
    },
    openGraph: {
      title: data.drinks[0].strDrink,
      description: data.drinks[0].strInstructions,
      images: [{ url: data.drinks[0].strDrinkThumb }],
    },
  };
};
//voor type safety but better to set on true default = true
//door true ongekende url worden toch statisch opgebouwd on first request
// export const dynamicParams = false;

const page = async ({ params }: { params: Promise<PageParams> }) => {
  const { id } = await params;
  const resp = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await resp.json();
  return (
    <>
      <h1>{data.drinks[0].strDrink}</h1>
      {/*backlink to cocktails page*/}
      <Link href="/cocktails">Back to cocktails</Link>
      <p>{data.drinks[0].strInstructions}</p>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={data.drinks[0].strDrinkThumb}
          alt={data.drinks[0].strDrink}
          width={700}
          height={700}
        />
      </div>
    </>
  );
};
interface Cocktail {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
}
export async function generateStaticParams(): Promise<PageParams[]> {
  const resp = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon`
  );
  const data = await resp.json();
  return data.drinks.map((drink: Cocktail) => ({
    id: drink.idDrink,
    slug: slugit(drink.strDrink),
  }));
}

export default page;
