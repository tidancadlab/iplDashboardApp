// Write your code here
// Write your code here
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = ({match}) => {
  const {id} = match.params
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const getData = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const v = await response.json()
    const dataCamelCase = {
      teamBannerUrl: v.team_banner_url,
      latestMatchDetails: {
        umpires: v.latest_match_details.umpires,
        result: v.latest_match_details.result,
        manOfTheMatch: v.latest_match_details.man_of_the_match,
        id: v.latest_match_details.id,
        date: v.latest_match_details.date,
        venue: v.latest_match_details.venue,
        competingTeam: v.latest_match_details.competing_team,
        competingTeamLogo: v.latest_match_details.competing_team_logo,
        firstInnings: v.latest_match_details.first_innings,
        secondInnings: v.latest_match_details.second_innings,
        matchStatus: v.latest_match_details.match_status,
      },
      recentMatches: v.recent_matches.map(d => ({
        umpires: d.umpires,
        result: d.result,
        manOfTheMatch: d.man_of_the_match,
        id: d.id,
        date: d.date,
        venue: d.venue,
        competingTeam: d.competing_team,
        competingTeamLogo: d.competing_team_logo,
        firstInnings: d.first_innings,
        secondInnings: d.second_innings,
        matchStatus: d.match_status,
      })),
    }
    setData(dataCamelCase)
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="match_main">
      {isLoading ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <div className="match-container">
          <img src={data.teamBannerUrl} alt="team banner" />
          <p className="text-white">Latest Match</p>
          <LatestMatch
            data={data.latestMatchDetails}
            key={data.latestMatchDetails.id}
          />
          <ul className="match_card_container">
            {data.recentMatches.map(v => (
              <MatchCard data={v} key={v.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default TeamMatches
