var answer;
var score = 0;
var backgroundImage = [];

function nextQuestion() {
  const n1 = Math.floor(Math.random() * 5); // 0-4
  document.getElementById("n1").innerHTML = n1;

  const n2 = Math.floor(Math.random() * 6); // 0-5
  document.getElementById("n2").innerHTML = n2;
  answer = n1 + n2;
}

function checkAnswer(userAnswer) {
  const prediction = predictImage();
  console.log(`Predicted Value: ${prediction}, Actual Value: ${answer}`);

  if (prediction == answer) {
    score++;
    console.log("Correct Answer!. score: ", score);
    if (score <= 5) {
      backgroundImage.push(`url('images/background${score}.svg')`);
      document.body.style.backgroundImage = backgroundImage;
    } else {
      Swal.fire({
        icon: "success",
        title: "Well Done!",
        text: "Your math garden is in full bloom! Want to play again?",
        showCancelButton: true,
        confirmButtonText: "Yes, play again!",
        cancelButtonText: "No, I’m done",
      }).then((result) => {
        if (result.isConfirmed) {
          score = 0;
          backgroundImage = [];
          document.body.style.backgroundImage = backgroundImage;
        } else {
          console.log("Game completed. Thank you for playing!");
        }
      });
    }
  } else {
    if (score != 0) {
      score--;
    }

    console.log(
      `Incorrect Answer. The correct answer is ${answer}. score: `,
      score
    );

    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Check your calculation and try writing the number neater next.",
      confirmButtonText: "Got it",
    }).then(() => {
      setTimeout(function () {
        backgroundImage.pop();
        document.body.style.backgroundImage = backgroundImage;
      }, 1000);
    });
  }
}
