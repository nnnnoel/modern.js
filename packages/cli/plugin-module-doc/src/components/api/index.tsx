import ReactMarkdown from 'react-markdown';
import { PropsMarkdownMap } from '../../constants';

export default (props: { propsMd: string }) => {
  const md = PropsMarkdownMap.get(props.propsMd);
  return md ? <ReactMarkdown>{md}</ReactMarkdown> : null;
};
