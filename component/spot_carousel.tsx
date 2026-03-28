'use client'
import { useState } from 'react';
import SpotCard from './spot_card';

export default function SpotCarousel() {
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 260; // mais consistente com o card real
  const GAP = 12; // gap menor (antes era 16)
  const STEP = CARD_WIDTH + GAP;

  const spots = [
    { id: 1, name: "Shopping Interlagos", time: "Seg-Sex - 10h-18h", price: "R$ 120/Diária" },
    { id: 2, name: "Parking Center", time: "24h", price: "R$ 80/Diária" },
    { id: 3, name: "Estaciona SP", time: "Seg-Sáb - 8h-20h", price: "R$ 100/Diária" },
    { id: 4, name: "Smart Park", time: "24h", price: "R$ 90/Diária" },
    { id: 5, name: "Royal Parking", time: "Seg-Dom - 6h-22h", price: "R$ 110/Diária" },
  ];

  const visibleCards = 3;
  const maxIndex = spots.length - visibleCards;

  const next = () => index < maxIndex && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <div className="relative w-full overflow-hidden py-4">

      {/* Slides */}
      <div
        className="flex gap-3 transition-transform duration-300"
        style={{ transform: `translateX(-${index * STEP}px)` }}
      >
        {spots.map((spot) => (
          <div key={spot.id} className="min-w-[260px]">
            <SpotCard spot={spot} />
          </div>
        ))}
      </div>

      {/* Botão Esquerda */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="
          absolute left-1 top-1/2 -translate-y-1/2
          w-10 h-10
          flex items-center justify-center
          bg-white/90 backdrop-blur
          rounded-full
          shadow-md
          text-lg
          hover:scale-110 hover:bg-white
          transition
          disabled:opacity-30
        "
      >
        ‹
      </button>

      {/* Botão Direita */}
      <button
        onClick={next}
        disabled={index === maxIndex}
        className="
          absolute right-1 top-1/2 -translate-y-1/2
          w-10 h-10
          flex items-center justify-center
          bg-white/90 backdrop-blur
          rounded-full
          shadow-md
          text-lg
          hover:scale-110 hover:bg-white
          transition
          disabled:opacity-30
        "
      >
        ›
      </button>

    </div>
  );
}