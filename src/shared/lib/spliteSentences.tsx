export const splitSentences = (text: string) => {
  return text.split('. ').map((sentence, index, array) => (
    <span key={index}>
      {sentence.trim()} {index < array.length - 1 ? '.' : ''}
      <br />
    </span>
  ));
};
