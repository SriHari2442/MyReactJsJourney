import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="TimelineContainer">
      <div className="ResponsiveContainer">
        <div className="HeaderContainer">
          <h1 className="Heading">
            MY JOURNEY ON <br />
            <span className="CCBPHeading"> REACT JS </span>
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(each => (
            <ProjectTimelineCard key={each.id} projectDetails={each} />
          ))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
