const API_URL = "https://blague-back.onrender.com/api/v1/blagues";

export async function fetchRandomBlague() {
  const res = await fetch(`${API_URL}/random`);
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération de la blague");
  }
  return res.json();
}