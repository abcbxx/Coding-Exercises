const studentScores = [
  { name: 'Amy', subject: 'Math', score: 95 },
  { name: 'Bob', subject: 'Science', score: 88 },
  { name: 'Amy', subject: 'Science', score: 92 },
  { name: 'Bob', subject: 'Math', score: 75 },
  { name: 'Charlie', subject: 'Math', score: 81 },
];

const groupScoresByStudent = (scores) => {
  return scores.reduce((acc, currentScore) => {
    const studentName = currentScore.name;

    // Create the subject/score object to be stored
    const scoreData = {
      subject: currentScore.subject,
      score: currentScore.score,
    };

    // If the student doesn't exist in the accumulator, initialize an array
    if (!acc[studentName]) {
      acc[studentName] = [];
    }

    // Push the current score data into the student's array
    acc[studentName].push(scoreData);

    return acc;
  }, {}); // Initial accumulator is an empty object
};

// console.log(groupScoresByStudent(studentScores));