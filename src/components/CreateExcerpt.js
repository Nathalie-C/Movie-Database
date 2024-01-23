//The excerpt modified from https://medium.com/@paulohfev/problem-solving-how-to-create-an-excerpt-fdb048687928

export default function CreateExcerpt({ content }) {
  const trailingIndicator = "...";
  const maxNumberOfWords = 40;
  const listOfWords = content.trim().split(" ");
  const truncatedContent = listOfWords.slice(0, maxNumberOfWords).join(" ");
  const excerpt = truncatedContent + trailingIndicator;
  const output = listOfWords.length > maxNumberOfWords ? excerpt : content;

  return (
    <div>
      <p>{output}</p>
    </div>
  );
}
