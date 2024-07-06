import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from './config/experiencecustomapi';



function Experience() {
  return (
    <div className="container py-lg-4 py-3">
      <h2 className="text-center mb-3">Experience</h2>
      <div className='Stepper'>
        <VerticalTimeline className='w-100 mw-100'>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#000', color: '#fff' }}
             
              iconStyle={{ background: 'rgba(255, 255, 255,1)', color: '#fff',width:"10",height:"10" }}
              // icon={<img src={experience.img} className='img-fluid' alt="Experience" />}

            >
               <p className='fw-bold my-2'>{experience.date}</p>
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <h5 className="vertical-timeline-element-subtitle my-2">{experience.company}</h5>
              <p>
                Role & Responsibilities: {experience.role}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
