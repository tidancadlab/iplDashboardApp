// Write your code here
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplData = await response.json()
    const dataCamelCase = iplData.teams.map(v => ({
      teamImageUrl: v.team_image_url,
      id: v.id,
      name: v.name,
    }))
    setData(dataCamelCase)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="home_main">
      {isLoading ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <div>
          <div className="heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1>IPL Dashboard</h1>
          </div>
          <div className="card-main">
            {data.map(v => (
              <TeamCard key={v.id} data={v} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
