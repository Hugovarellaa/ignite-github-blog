import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { HomeContainer } from "./styles";

interface IPost {
  title: string
}

export function Home() {

  return (
    <>
      <Profile />
      <SearchInput />

      <HomeContainer>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </HomeContainer>
    </>
  )
}