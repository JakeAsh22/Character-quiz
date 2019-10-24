$(function()
{
  $("form#quizForm").submit(function(event)
  {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=a1]:checked").val());
    var answer2 = parseInt($("input:radio[name=a2]:checked").val());
    var answer3 = parseInt($("input:radio[name=a3]:checked").val());
    var result=answer1+answer2+answer3;
    $(".endings").hide();
    if (result>0)
      {
        $("#donkey").show();
      }
      else {
        $("#lord").show();
      }
  });


})
