//The excerpt modified from https://medium.com/@paulohfev/problem-solving-how-to-create-an-excerpt-fdb048687928

export default function CreateExcerpt({ content, maxNumberOfWords }) {
  const trailingIndicator = "...";
  const listOfWords = content.trim().split(" ");
  const truncatedContent = listOfWords.slice(0, maxNumberOfWords).join(" ");
  const excerpt = truncatedContent + trailingIndicator;
  const output = listOfWords.length > maxNumberOfWords ? excerpt : content;

  return (
    <div className="excerpt">
      <p>{output}</p>
    </div>
  );
}
