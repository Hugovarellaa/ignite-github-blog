/* eslint-disable prettier/prettier */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Loading } from '../../../../components/Loading'
import { RelativeDateFormatted } from '../../../../utils/formatter'
import { IPost } from '../../../Home'
import { PostHeaderContainer } from './styles'

interface IPostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: IPostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = RelativeDateFormatted(postData?.created_at)

  return (
    <PostHeaderContainer>
      {
        isLoading ? (
          <Loading />
        ) : (
          <>
            <header>
              <ExternalLink
                as="button"
                variant="iconLeft"
                icon={<FontAwesomeIcon icon={faChevronLeft} />}
                text="Voltar"
                onClick={goBack}
              />

              <ExternalLink text="Ver no github" href={postData.html_url} />
            </header>

            <h1>{postData.title}</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                <span>{postData.user?.login}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendar} />
                <time>{formattedDate}</time>
              </li>
              <li>
                <FontAwesomeIcon icon={faComment} />
                <span>{postData.comments} comentários</span>
              </li>
            </ul>
          </>
        )
      }


    </PostHeaderContainer>
  )
}
