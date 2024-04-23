// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({data}) => (
  <Link to={`/team-matches/${data.id}`} className="card-link">
    <div className="card-container">
      <img src={data.teamImageUrl} alt={data.name} />
      <p>{data.name}</p>
    </div>
  </Link>
)

export default TeamCard
