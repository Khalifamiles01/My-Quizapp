import { useState } from 'react';
import Header from "./components/Header";
import QuizCraft from "./components/QuizCraft";
import ScoreSummary from "./components/ScoreSummary";

export default function App() {
  return (
    <div className="big-light min-vh-100">
      <Header />
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <QuizCraft />
            <ScoreSummary />
            </div>
          </div>
      </main>
        </div>

  );
}