import React from 'react'

function UserScore({ user }) {
    return (
        <div className="egg-top-detail">
            <div>{user.name}</div>
            <div>{user.score}</div>
        </div>
    )
}

export default UserScore
