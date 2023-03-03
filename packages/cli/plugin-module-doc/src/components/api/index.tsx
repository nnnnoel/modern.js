import ReactMarkdown from 'react-markdown';

export default (props: { key: string }) => {
  const md = PropsMarkdownMap.get(props.key);
  return md ? <ReactMarkdown>{md}</ReactMarkdown> : null;
};

export const PropsMarkdownMap = new Map<string, string>();
