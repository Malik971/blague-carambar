import { useState } from "react";
import "./index.css";
import { clickSound } from "./sounds/soundManager";
import ToggleSoundButton from "./components/ToggleSoundButton";
import { fetchRandomJoke } from "./components/BlaguesAPI";
import { fetchRandomBlague } from "./utils/api";

function App() {
  const [blague, setBlague] = useState<{
    question: string;
    reponse: string;
  } | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [source, setSource] = useState<"api" | "perso">("api");

  const handleClick = async () => {
    if (soundEnabled) clickSound.play();

    try {
      const data =
        source === "api" ? await fetchRandomJoke() : await fetchRandomBlague();
      setBlague(data);
    } catch (error) {
      console.error(error);
      setBlague({
        question: "Impossible de charger une blague 😢",
        reponse: "Vérifie ta connexion ou ton token.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center px-4 text-center font-sans">
      <ToggleSoundButton
        enabled={soundEnabled}
        onToggle={() => setSoundEnabled(!soundEnabled)}
      />
      <header className="mb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-600 drop-shadow mb-2">
          😄 Blagues Carambar & Co
        </h1>
        <p className="text-lg text-gray-700">Une blague à chaque clic !</p>
        {/* Choix de la source */}
        <div className="mt-4 flex gap-4 justify-center">
          <button
            onClick={() => setSource("api")}
            className={`px-4 py-1 rounded-full font-medium transition ${
              source === "api" ? "bg-blue-500 text-white" : "bg-white border"
            }`}
          >
            blague en ligne
          </button>
          <button
            onClick={() => setSource("perso")}
            className={`px-4 py-1 rounded-full font-medium transition ${
              source === "perso" ? "bg-green-500 text-white" : "bg-white border"
            }`}
          >
            📁 Blagues perso
          </button>
        </div>
      </header>

      <main className="w-full max-w-md">
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-200 mb-6"
        >
          Nouvelle blague
        </button>

        {blague && (
          <div className="bg-white rounded-2xl shadow-lg p-6 border-4 border-pink-300">
            <p className="text-lg font-medium text-gray-800 mb-2">
              {blague.question}
            </p>
            <p className="text-md italic text-pink-600">{blague.reponse}</p>
          </div>
        )}
      </main>

      <footer className="mt-10 text-xs text-gray-600">
        &copy; 2025 - Projet CDA - Malik Ibo
      </footer>
    </div>
  );
}

export default App;
