DROP TABLE IF EXISTS quiz_results CASCADE;
CREATE TABLE quiz_results (
  id SERIAL PRIMARY KEY,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  results VARCHAR (255) NOT NULL,
  time_completed DATE
);
