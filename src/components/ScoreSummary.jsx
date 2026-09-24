import { questions } from '../data/questions';

export default function ScoreSummary({ answers }) {
  const total = questions.length;
  const score = questions.reduce(
    (count, q, i) => (answers[i] === q.answer ? count + 1 : count),
    0,
  );
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="alert alert-success">
      <strong>
        Score: {score} / {total}
      </strong>
      <div className="mt-2 text-muted">
        {answeredCount} of {total} answered
      </div>
    </div>
  );
}