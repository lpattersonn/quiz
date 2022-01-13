
$(document).ready(function() {

  console.log(this)
    $(".pupr_button").on('click', function(event) {
      // prevent form submission
      event.preventDefault();

     // const value = this.value;


      const valueArr = this.value.split(",");
      let public = true;
      if (valueArr[0] === "true") {
        console.log("THIS is value array", valueArr[0]);
        public = false;
      }

      const quizid = parseInt(valueArr[1]);

      console.log("public, id", public, quizid);

      $.post( "/myquiz/public", { public, quizid })
          .done(function( data ) {
            location.reload();
            return false;
        });

      console.log(valueArr);
      if(valueArr[0] === 'true') {
        $(this).html("Private");
        //$(this).css('background-color','red');
        //valueArr[0] = false
        console.log(this.value);
      }

      if(valueArr[0] === 'false') {
        $(this).html("Public");
        //$(this).css('background-color','green');
        //this.value = 'true'
        console.log(this.value);
      }
    });
  });
