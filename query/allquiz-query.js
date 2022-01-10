// Receive all quiz from quizzes table in database

const receiveAllQuiz = function(db) {
return db.query(`SELECT * FROM quizzes`)
.then((res) => res.row)
.catch((err) => {console.log(err.message)})
};

module.exports = { receiveAllQuiz }
