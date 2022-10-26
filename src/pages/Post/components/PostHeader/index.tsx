import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          variant="iconLeft"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          onClick={goBack}
        />

        <ExternalLink text="Ver no github" href="#" />
      </header>

      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <span>Hugo Alves</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          <time>Há um dia</time>
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
