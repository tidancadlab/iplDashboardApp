import './index.css'

const LatestMatch = ({data}) => (
  <div className="match_card">
    <div className="card_left">
      <div>
        <p className="name">{data.competingTeam}</p>
        <p className="date">{data.date}</p>
        <p className="match_location">{data.venue}</p>
        <p className="match_status">{data.result}</p>
      </div>
      <img
        className="team_logo"
        src={data.competingTeamLogo}
        alt={`latest match ${data.competingTeam}`}
      />
    </div>
    <div className="card_right">
      <p className="name">First Innings</p>
      <p>{data.firstInnings}</p>
      <p className="name">Second Innings</p>
      <p>{data.secondInnings}</p>
      <p className="name">Man of the Match</p>
      <p>{data.manOfTheMatch}</p>
      <p className="name">Umpires</p>
      <p>{data.umpires}</p>
    </div>
  </div>
)

export default LatestMatch
