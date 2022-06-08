function randomQuestion() {
  let x = Math.floor(10 * Math.random());
  let y = Math.floor(10 * Math.random());
  let operator = ["+", "-", "*", "/"];
  let randomIndex = Math.floor(4 * Math.random());
  let randomOperator = operator[randomIndex];
  let randomQues = x + randomOperator + y;
  let correctAns = eval(x + randomOperator + y);
  let QnA = [randomQues, correctAns];
  console.log(QnA);
  return QnA;
}

function userInput() {
  let quesCount = prompt("how many questions do u want?");
  let marks = 0;
  for (var i = 1; i <= quesCount; i++) {
    let [randomQues, correctAns] = randomQuestion();
    let userAns = prompt(randomQues);
    if (parseInt(userAns) === parseInt(correctAns)) {
      alert("Your answer (" + userAns + ") is correct");
      console.log("Your answer (" + userAns + ") is correct");
      marks = marks + 1;
    } else {
      alert(
        "Your answer (" +
          userAns +
          ") is incorrect. Correct answer is " +
          correctAns
      );
      console.log(
        "Your answer (" +
          userAns +
          ") is incorrect. Correct answer is " +
          correctAns
      );
      marks = marks + 0;
    }
  }
  let score = (marks * 100) / quesCount;
  alert(
    "Total questions: " +
      quesCount +
      "." +
      " Total corrected: " +
      marks +
      "." +
      " Your score: " +
      score+"%"
  );
}
userInput();

