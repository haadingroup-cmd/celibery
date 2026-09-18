"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-brand-700 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-20 mix-blend-overlay" />
          <div
            aria-hidden
            className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-brand-400/30 blur-3xl"
          />

          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-4">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Get 10% off your first order
            </h2>
            <p className="text-brand-100">
              Join the list for early access to new drops, restock alerts, and charging tips that
              actually help.
            </p>

            {submitted ? (
              <div className="mt-2 flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-medium text-white">
                <Check className="h-4 w-4" />
                You&apos;re in — check your inbox for the code.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="h-13 w-full flex-1 rounded-full border-0 bg-white px-5 text-sm text-ink-950 placeholder:text-ink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                />
                <button
                  type="submit"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-ink-950 px-6 text-sm font-medium text-white transition-colors hover:bg-ink-900"
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
            <p className="text-xs text-brand-200">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
