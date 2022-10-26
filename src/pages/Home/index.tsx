import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/axios";
import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { HomeContainer } from "./styles";


const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;


export interface IPost {
  title: string
  body: string;
  created_at: string
  number: number;
  html_url: string
  comments: number;
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`
        );
        setPosts(response.data.items);
      } finally {
        setIsLoading(false)
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput getPosts={getPosts} postsLength={posts.length} />

      <HomeContainer>
        {
          posts.map((post: IPost) => (
            <Posts key={post.number} post={post} />
          ))
        }
      </HomeContainer>
    </>
  )
}