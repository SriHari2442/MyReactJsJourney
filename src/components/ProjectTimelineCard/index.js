import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
    tagsList,
  } = projectDetails

  return (
    <div className="ProjectCardContainer">
      <img className="ProjectImage" src={imageUrl} alt="project" />
      <div className="ProjectTitleAndDurationContainer">
        <h1 className="ProjectTitle"> {projectTitle} </h1>
        <div className="DurationContainer">
          <AiFillCalendar color="#171f46" />
          <p className="Duration"> {duration} </p>
        </div>
      </div>
      <p className="ProjectDescription"> {description} </p>
      <ul className="CourseTagsList">
        {tagsList.map(eachTag => (
          <li className="CourseTagItem" key={eachTag.id}>
            <p className="CourseTag"> {eachTag.name} </p>
          </li>
        ))}
      </ul>
      <a
        className="VisitLink"
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
