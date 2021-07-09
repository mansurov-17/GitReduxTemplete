import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const SearchUser = ({ userName }) => {
  const [userLogin, setUserLogin] = useState('')
  const history = useHistory()
  return (
    <div>
      {!!userName || (
        <div className="shadow-sm w-full h-screen flex items-center bg-indigo-700 justify-center">
          <input
            type="text"
            name="price"
            className="w-1/4 placeholder-pink-100 outline-none rounded-l-lg p-2 bg-blue-400"
            placeholder="Please enter user name"
            value={userLogin}
            onKeyPress={(e) => e.key === 'Enter' && history.push(`/${userLogin}`)}
            onChange={(e) => setUserLogin(e.target.value)}
          />
          <Link to={`/${userLogin}`} className="bg-blue-500 p-2 text-white rounded-r-lg">
            Search{' '}
          </Link>
        </div>
      )}
    </div>
  )
}

export default SearchUser
