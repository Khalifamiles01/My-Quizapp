# QuizCraft

A small React quiz app built with Vite and Bootstrap. Shows one question
at a time, tracks answers, and scores the quiz on submission.

## What's on this branch

This branch (`tunjis-own`) is a cleaned-up version of the original project:

- Removed unused files (`index.css`, unused images) that weren't
  actually being used anywhere
- Fixed a button in the score summary that didn't do anything when clicked
- Fixed a loose equality check (`==`) in the scoring logic, changed to `===`
- Fixed a broken CSS class name in the header

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Project structure

- `src/data/questions.js` — the question bank
- `src/components/QuizCraft.jsx` — displays one question, handles
  selecting an answer and moving between questions
- `src/components/ScoreSummary.jsx` — calculates and displays the final
  score after submission
- `src/App.jsx` — owns all the state (current question, answers, whether
  the quiz has been submitted) and wires the components together

  <img width="466" height="434" alt="image" src="https://github.com/user-attachments/assets/77f2ee56-a0c4-43c4-98d4-e95585e470e3" />
