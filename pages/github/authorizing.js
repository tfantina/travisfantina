import { useGithubAuthRedirect } from 'react-tinacms-github'

export default function Authorizing() {
  useGithubAuthRedirect()
  return <h2>Hello 👋, authorizing your account with GitHub, please wait...</h2>
}
