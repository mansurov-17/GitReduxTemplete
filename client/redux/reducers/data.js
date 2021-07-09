import axios from 'axios'

const initialState = {
  repos: [],
  user: {},
  readme: ''
}

const CET_REPOS = 'CET_REPOS'
const CET_USER = 'CET_USER'
const CET_README = 'CET_README'

export default function (state = initialState, action) {
  switch (action.type) {
    case CET_USER:
      return { ...state, user: action.user }
    case CET_REPOS:
      return { ...state, repos: action.repos }
    case CET_README:
      return { ...state, readme: action.readme }
    default:
      return state
  }
}

export function getRepos(userName) {
  return async (dispatch) => {
    const { data: repos } = await axios(`http://api.github.com/users/${userName}/repos`)
    dispatch({ type: 'CET_REPOS', repos })
  }
}

export const getUser = (userName) => {
  return async (dispatch) => {
    const { data: user } = await axios(`http://api.github.com/users/${userName}`)
    dispatch({ type: 'CET_USER', user })
  }
}

export const getReadme = (userName, repositoryName) => {
  return async (dispatch) => {
    const { data: readme } = await axios(
      `http://api.github.com/repos/${userName}/${repositoryName}/readme`,
      {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      }
    )
    dispatch({ type: 'CET_README', readme })
  }
}
