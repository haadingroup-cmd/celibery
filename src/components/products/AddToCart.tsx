"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AddToCart({ colorways }: { colorways: string[] }) {
  const [color, setColor] = useState(colorways[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {colorways.length > 1 && (
        <div>
          <p className="mb-2 text-sm font-medium text-ink-800">
            Color: <span className="text-ink-500">{color}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {colorways.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  color === c
                    ? "border-ink-950 bg-ink-950 text-white"
                    : "border-ink-200 text-ink-700 hover:border-ink-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex h-13 items-center rounded-full border border-ink-200">
          <button
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-full w-11 items-center justify-center text-ink-600 hover:text-ink-950"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center text-sm font-medium text-ink-950">{qty}</span>
          <button
            aria-label="Increase quantity"
            onClick={() => setQty((q) => Math.min(9, q + 1))}
            className="flex h-full w-11 items-center justify-center text-ink-600 hover:text-ink-950"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <Button
          variant={added ? "outline" : "accent"}
          size="lg"
          className="flex-1"
          onClick={() => {
            setAdded(true);
            setTimeout(() => setAdded(false), 2200);
          }}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" /> Added to bag
            </>
          ) : (
            <>
              <ShoppingBag className="h-4 w-4" /> Add to bag
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
