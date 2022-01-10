DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  quiz_id INTEGER REFERENCES quizzes(id),
  question TEXT NOT NULL,
  answer TEXT NOT NULL
);
