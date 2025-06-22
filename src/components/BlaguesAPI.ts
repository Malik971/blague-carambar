import BlaguesAPI from "blagues-api";
const blagues = new BlaguesAPI(
  import.meta.env.VITE_API_TOKEN!
);

export async function fetchRandomJoke() {
  const blague = await blagues.random({
    disallow: [blagues.categories.DARK, blagues.categories.LIMIT],
  });
  return {
    question: blague.joke,
    reponse: blague.answer,
  };
}
