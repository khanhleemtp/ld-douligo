import React from 'react'
import topScore from '../../data/top.json';
import UserScore from './UserScore';

function TopScore({ hideModal }) {
    // console.log(board);
    const { users } = topScore;
    console.log(users)
    return (
        <div className="egg-top" onClick={hideModal}>
        <div className="egg-top-header">Top 6</div>
        <div className="egg-top-wrapper">
            <div className="egg-top-title">
                <div>Người chơi</div>
                <div className="egg-top-title-score">Điểm</div>
            </div>
            <div className="egg-top-detail-wrapper">
                {
                    users?.map(user => (
                        <UserScore
                            user={user}
                            key={user?.id}
                        />
                    ))
                }
            </div>
        </div>
    </div>
    )
}

export default TopScore
