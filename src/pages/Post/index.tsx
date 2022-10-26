import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/axios'
import { IPost } from '../Home'
import { PostHeader } from './components/PostHeader'
import { PostContainer } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

const id = ''

export function Post() {
  const [postData, setPostData] = useState({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPostDetails()
  }, [postData])

  return (
    <PostContainer>
      <PostHeader />
    </PostContainer>
  )
}
