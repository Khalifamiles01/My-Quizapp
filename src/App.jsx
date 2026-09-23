import { useState } from "react";
import Header from "./components/Header";
import QuizCraft from "./components/QuizCraft";
import ScoreSummary from "./components/ScoreSummary";
import { questions } from "./data/questions";

export default function App() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [warning, setWarning] = useState("");

  function restartQuiz() {
    setAnswers({});
    setCurrentQuestion(0);
    setIsSubmitted(false);
    setWarning("");
  }

  function handleSubmit() {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < questions.length) {
      setWarning(
        `Please answer all questions before submitting (${answeredCount}/${questions.length} answered).`,
      );
      return;
    }
    setWarning("");
    setIsSubmitted(true);
  }

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <QuizCraft
              answers={answers}
              setAnswers={setAnswers}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              isSubmitted={isSubmitted}
            />

            {warning && <div className="alert alert-warning">{warning}</div>}

            {isSubmitted && <ScoreSummary answers={answers} />}

            <div className="text-center mt-3 d-flex justify-content-center gap-2">
              {!isSubmitted && (
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit Quiz
                </button>
              )}
              <button className="btn btn-outline-danger" onClick={restartQuiz}>
                Restart Quiz
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
