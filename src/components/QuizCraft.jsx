import { questions } from '../data/questions';

export default function QuizCraft({
  answers,
  setAnswers,
  currentQuestion,
  setCurrentQuestion,
  isSubmitted,
}) {
  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion] ?? null;

  function handleSelect(option) {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  }

  function handleNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  return (
    <div className="card shadow-sm mb-4">
      <div className="container py-4">
        <div className="text-center mb-4">
          <h2>{question.question}</h2>
        </div>

        <div className="d-grid gap-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === question.answer;
            let className = 'btn text-start p-3 ';

            if (isSubmitted) {
              if (isCorrect) className += 'btn-success';
              else if (isSelected) className += 'btn-danger';
              else className += 'btn-outline-secondary';
            } else if (isSelected) {
              className += 'btn-primary';
            } else {
              className += 'btn-outline-primary';
            }

            return (
              <button
                key={option}
                className={className}
                onClick={() => handleSelect(option)}
                disabled={isSubmitted}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-3 mt-4 mb-4">
        <button
          className="btn btn-outline-secondary"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          &lt;
        </button>
        <span>
          {currentQuestion + 1} / {questions.length}
        </span>
        <button
          className="btn btn-outline-secondary"
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
