import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineLaptop, AiFillGithub } from "react-icons/ai";
import { projects } from "./config/projectcustomapi";

function Projects() {
  const [activeTab, setActiveTab] = useState('customTemplate');

  const getProjectList = () => {
    switch (activeTab) {
      case 'customTemplate':
        return projects.customTemplate || [];
      case 'customWebsite':
        return projects.customWebsite || [];
      case 'liveWebsite':
        return projects.liveWebsite || [];
      default:
        return [];
    }
  };

  const projectList = getProjectList();

  const renderProjects = (projectList) => {
    return projectList.map((projectData) => (
      <div
      
        className="col-sm-6 col-xl-4  mt-md-4 mt-lg-2 mt-xl-4 d-flex"
        key={projectData.id}
      >
        <div className="mylang p-3">
          <img className='img-fluid' src={projectData.image} alt={projectData.projectName} />
          <div className="py-4">
            <h5 className="h5">{projectData.projectName}</h5>
            <h4 className="project-info">{projectData.summary}</h4>

            <div className="row py-4 align-items-center fw-light">
              <div className="col-6 text-start">
                <a
                  target='_blank'
                  href={projectData.demo}
                  className="text-decoration-none text-white text-uppercase"
                  rel="noopener noreferrer"
                >
                  <h6 className="learnmore d-flex align-items-center">
                    <AiOutlineLaptop />
                    &nbsp;Demo
                  </h6>
                </a>
              </div>
              <div className="col-6 text-center">
                <a
                  target='_blank'
                  href={projectData.source}
                  className="text-decoration-none text-white text-uppercase"
                  rel="noopener noreferrer"
                >
                  <h6 className="learnmore">
                    <AiFillGithub />
                    &nbsp;Code
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='container py-lg-4 py-4'>
    <h2 className="text-center ">Projects</h2>

      <div className="row row-gap-3 ">
        <div className='col-12 d-flex justify-content-center'>
          <Nav variant="pills" className='gap-2 justify-content-center' defaultActiveKey="customTemplate" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item className=''>
              <Nav.Link className='site-btn-outline' eventKey="customTemplate">Templates</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='site-btn-outline' eventKey="customWebsite">Websites</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='site-btn-outline' eventKey="liveWebsite">Live Website</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {renderProjects(projectList)}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Projects />
    </div>
  );
}

export default App;
