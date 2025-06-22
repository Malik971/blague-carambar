import BlaguesAPI from "blagues-api";
const blagues = new BlaguesAPI(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzA5NDMxNzQxMjk4OTAxMDUyIiwibGltaXQiOjEwMCwia2V5Ijoia3NubkhJTzIyTFZYaUtrVzFzRGZlMUU2ZUlmQnNsOUZYRlJDa1RGWENlUXNBa1B2ejYiLCJjcmVhdGVkX2F0IjoiMjAyNS0wNi0yMlQxNjo0ODo0MyswMDowMCIsImlhdCI6MTc1MDYxMDkyM30.QU7mAyNdy_RiZNq-3LxjZE9hr7mxEw4UU1R0MzvptKI"
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
