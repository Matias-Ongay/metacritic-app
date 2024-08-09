// export interface Game {
//   description: string;
//   slug: string;
//   releaseDate: string;
//   image: string;
//   score: number;
//   title: string;
// }



interface Review {
  quote: string;
  score: number;
  date: string;
  publicationName: string;
  author: string;
}

interface Image {
  bucketType: string;
  bucketPath: string;
  typeName?: string; // Agregamos typeName opcional
}

interface CriticScoreSummary {
  score: number;
}

// interface Item {
//   description: string;
//   slug: string;
//   releaseDate: string;
//   image: Image;
//   criticScoreSummary: CriticScoreSummary;
//   title: string;
// }

type FetchedData = {
  data: {
    id: string;
    totalResults: number;
    items: Item[];
  };
};

type Item = {
  title: string,
  slug: string,
  releaseDate: string,
  image: { 
    bucketType: string,
    bucketPath: string,
  },
  criticScoreSummary: {
    score: number,
  },
  description: string,
}

type Game = {
    title: string,
    slug: string,
    releaseDate: string,
    image: string,
    score: number,
    description: string,
}

type GameDetails = {
  reviews: Review[];
} | Game

type Images = Image[]

interface Component {
  data: {
    item: Item & { images: Images };
  };
}

export async function getLatestGames(): Promise<Game[]> {
  const LATEST_GAMES =
    "https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u";
  const rawData = await fetch(LATEST_GAMES);
  const gamesData = await rawData.json() as FetchedData;
 
  const games = gamesData.data.items;
  return games.map((item) => {
    const { description, slug, releaseDate, image, criticScoreSummary, title } =
      item;
    const { score } = criticScoreSummary;

    // crea la imagen
    const { bucketType, bucketPath } = image;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    return {
      description,
      releaseDate,
      score,
      slug,
      title,
      image: img,
    };
  });
}
// https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/the-legend-of-zelda-ocarina-of-time/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u

export async function getGameDetails(slug: string): Promise<GameDetails> {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  const rawData = await fetch(GAME_DETAILS);
  const gameData = await rawData.json();

  
  const components = gameData.components as Component[];
const { title, description, criticScoreSummary, images, reviews: rawReviews } = components[0].data.item;

const { score } = criticScoreSummary;

// get the card image
const cardImage = images.find(
  (image: any) => image.typeName === "cardImage",
) as Image;
const { bucketType, bucketPath } = cardImage;
const image = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

// Ensure rawReviews is an array
const reviews = Array.isArray(rawReviews) ? rawReviews.map((review: Review) => {
  const { quote, score, date, publicationName, author } = review;
  return { quote, score, date, publicationName, author };
}) : [];

return {
  image,
  title,
  slug,
  description,
  score,
  reviews,
};
}