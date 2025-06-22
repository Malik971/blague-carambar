import React from "react";
import { motion } from "framer-motion"; // animation smooth

interface ToggleSoundButtonProps {
  enabled: boolean;
  onToggle: () => void;
}

const ToggleSoundButton: React.FC<ToggleSoundButtonProps> = ({
  enabled,
  onToggle,
}) => {
  return (
    <motion.button
      onClick={onToggle}
      className="absolute top-4 right-4 p-2 rounded-full bg-white shadow border border-gray-400 hover:bg-gray-100 transition"
      whileTap={{ scale: 0.9, rotate: -15 }}
      aria-label="Activer/Désactiver le son"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {enabled ? (
          // 🔊 Icône haut-parleur activé
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5l-6 6h-2v2h2l6 6V5zm4.5 4.5a5 5 0 010 5m2-8a9 9 0 010 11"
          />
        ) : (
          // 🔇 Icône haut-parleur coupé
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5v14m0-7h.01M21 21l-6-6m0 0l6-6"
          />
        )}
      </motion.svg>
    </motion.button>
  );
};

export default ToggleSoundButton;
