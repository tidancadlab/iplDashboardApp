// Write your code here
import './index.css'

const MatchCard = ({data}) => (
  <li className="match_card2">
    <img
      src={data.competingTeamLogo}
      alt={`latest match ${data.competingTeam}`}
    />
    <p>{data.competingTeam}</p>
    <p>{data.result}</p>
    <p className={data.matchStatus === 'Won' ? 'green' : 'red'}>
      {data.matchStatus}
    </p>
  </li>
)

export default MatchCard
