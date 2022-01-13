// JQuery for increasing counter on create question page
const counter = 1;
$(document).ready(function() {
    $(".create_question").on('click', function(event) {
      // event.preventDefault();
      // location.reload();
      // $("#value").val(counter + 1)
      // console.log(this.value)
      // // $(".create_reset").click();
      // $.post('/createquestion', (req, res) => {
      //   db.query(
      //     `
      //       INSERT INTO questions (quiz_id, question, answer)
      //       VALUES ($1, $2, $3) RETURNING *;`,
      //     [req.body.quizid, req.body.question, req.body.answer]
      //   )
      // })
      // $.post( "/myquiz/public", { public, quizid })
      //     .done(function( data ) {
      //       location.reload();
      //       return false;
      //   });
    });
  });
