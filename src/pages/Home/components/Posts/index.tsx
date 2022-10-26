import { IPost } from "../..";
import { RelativeDateFormatted } from "../../../../utils/formatter";
import { PostsContainer } from "./styles";

interface IPostProps {
  post: IPost
}

export function Posts({ post }: IPostProps) {
  const formattedDate = RelativeDateFormatted(post.created_at)

  return (
    <PostsContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <time>{formattedDate}</time>
      </div>

      <p>
        {post.body}
      </p>

    </PostsContainer>
  )
}