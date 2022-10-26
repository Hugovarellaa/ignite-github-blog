import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { SearchInputContainer } from "./styles";

const searchFormSchema = zod.object({
  query: zod.string()
})
interface SearchInputProps {
  postsLength: number
  getPosts: (query?: string) => Promise<void>
}

type SearchFormInput = zod.infer<typeof searchFormSchema>

export function SearchInput({ getPosts, postsLength }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)

  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </header>

      <input type='text' placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  )
}