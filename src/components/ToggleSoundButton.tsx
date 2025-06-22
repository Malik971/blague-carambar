import React from "react";
import { motion } from "framer-motion";

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
      className={`fixed top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow transition
        ${enabled ? 'bg-green-100 text-green-800 border border-green-300 hover:bg-green-200' : 'bg-red-100 text-red-800 border border-red-300 hover:bg-red-200'}`}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {enabled ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5l-6 6h-2v2h2l6 6V5zm4.5 4.5a5 5 0 010 5m2-8a9 9 0 010 11"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 9.172a4 4 0 000 5.656m5.656-5.656a4 4 0 010 5.656M15 12h1.5a2.5 2.5 0 010 5H15m-6-9.5v11l5-5.5-5-5.5z"
          />
        )}
      </svg>
      <span>{enabled ? "Son activé" : "Son coupé"}</span>
    </motion.button>
  );
};

export default ToggleSoundButton;
