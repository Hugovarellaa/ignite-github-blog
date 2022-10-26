import { PostContentContainer } from './styles';

interface IPostContentProps {
  content: string;
}

export function PostContent({ content }: IPostContentProps) {
  return (
    <PostContentContainer>
      {content}
    </PostContentContainer>
  )
}
