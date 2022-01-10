DROP TABLE IF EXISTS quiz_results CASCADE;
CREATE TABLE quiz_results (
  id SERIAL PRIMARY KEY,
  quiz_id INTEGER REFERENCES quizzes(id),
  user_id INTEGER REFERENCES users(id),
  results VARCHAR (255) NOT NULL,
  time_completed TIMESTAMP
);
