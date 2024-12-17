interface QuestionInput {
  id: number;
  answer: number;
  options: string[];
  subject: string;
  test_id: string;
  statement: string;
  explanation: string;
}

interface InputData {
  id: string;
  category: string;
  title: string;
  attempts: number;
  created_at: string;
  last_changed: string;
  last_changed_by: string;
  published: boolean;
  questions: QuestionInput[];
}

interface TransformedQuestion {
  question: string;
  options: string[];
  answer: string;
  category: string;
  selectedOption: string;
}

interface TransformedData {
  subject: string;
  questions: TransformedQuestion[];
}

export function transformData(inputData: InputData): TransformedData[] {
  const groupedQuestions: { [key: string]: TransformedQuestion[] } = {};

  // Group questions by subject
  inputData.questions.forEach((question) => {
    const { subject, options, statement, answer } = question;

    if (!groupedQuestions[subject]) {
      groupedQuestions[subject] = [];
    }

    groupedQuestions[subject].push({
      question: statement,
      options: options,
      answer: options[answer], // Get the correct option
      category: "unattempted",
      selectedOption: "",
    });
  });

  // Convert the grouped data into an array of TransformedData
  const result: TransformedData[] = Object.keys(groupedQuestions).map(
    (subject) => ({
      subject,
      questions: groupedQuestions[subject],
    })
  );

  return result;
}
