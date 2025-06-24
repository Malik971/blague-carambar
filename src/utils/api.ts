const API_URL = "http://localhost:3000/api/v1/blagues";

export async function fetchRandomBlague() {
  const res = await fetch(`${API_URL}/random`);
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération de la blague");
  }
  return res.json();
}