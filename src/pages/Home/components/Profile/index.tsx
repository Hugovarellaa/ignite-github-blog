import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Loading } from "../../../../components/Loading";
import { api } from "../../../../services/axios";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

const username = 'Hugovarellaa'

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: string
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])


  return (
    <ProfileContainer>
      {
        isLoading ? (
          <Loading />
        ) : (
          <>
            <ProfilePicture src={profileData.avatar_url} />

            <ProfileDetails>
              <header>
                <h1>{profileData.name}</h1>
                <ExternalLink text="Github" href={profileData.html_url} target='_blank' />
              </header>

              <p>
                {profileData.bio}
              </p>

              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                  <span>{profileData.login}</span>
                </li>
                {
                  profileData?.company && (
                    <li>
                      <FontAwesomeIcon icon={faBuilding} />
                      {profileData.company}
                    </li>
                  )
                }
                <li>
                  <FontAwesomeIcon icon={faUserGroup} />
                  {profileData.followers} seguidores
                </li>
              </ul>
            </ProfileDetails>
          </>
        )
      }
    </ProfileContainer>
  )
}