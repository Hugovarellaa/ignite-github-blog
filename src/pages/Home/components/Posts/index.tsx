import { IPost } from "../..";
import { PostsContainer } from "./styles";

interface IPostProps {
  post: IPost
}

export function Posts({ post }: IPostProps) {
  return (
    <PostsContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <time>{post.created_at}</time>
      </div>

      <p>
        {post.body}
      </p>

    </PostsContainer>
  )
}