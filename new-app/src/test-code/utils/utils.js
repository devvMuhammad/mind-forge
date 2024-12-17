export const calculateScore = (mcqArray) => {
  let score = 0;
  let subjectScoresArray = [];
  let wrongQuestionsIndices = [];
  mcqArray.forEach((subject) => {
    let subjectScore = 0;
    let wrongIndices = [];
    subject.questions.forEach((mcq, index) => {
      if (mcq.answer === mcq.selectedOption && mcq.category !== "unattempted") {
        score++;
        subjectScore++;
      } else {
        wrongIndices.push(index);
      }
    });
    wrongQuestionsIndices.push({ subject: subject.subject, wrongIndices });
    subjectScoresArray.push({
      subject: subject.subject,
      score: subjectScore,
      total: subject.questions.length,
    });
  });
  console.log(wrongQuestionsIndices);
  return [subjectScoresArray, wrongQuestionsIndices];
};
