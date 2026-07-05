interface HighlightProps {
  text: string;
  highlight: string;
}

/** Renders `text`, wrapping the `highlight` substring in an italic gold accent. */
export default function Highlight({ text, highlight }: HighlightProps) {
  const index = text.indexOf(highlight);
  if (index === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, index)}
      <span className="accent-italic">{highlight}</span>
      {text.slice(index + highlight.length)}
    </>
  );
}
