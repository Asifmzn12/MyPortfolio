import { useState } from 'react';
import { Container } from "react-bootstrap";
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
        data-aos="fade-right"
        className="col-lg-5 col-xl-4 mt-md-2 mt-lg-2 mt-xl-4"
        key={projectData.id}
      >
        <div className="mylang p-3">
          <img className='img-fluid' src={projectData.image} alt={projectData.projectName} />
          <div className="py-4">
            <div className="h5">{projectData.projectName}</div>
            <div className="project-info">{projectData.summary}</div>

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
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">Projects</h2>

      <div className="row justify-content-md-center justify-content-xl-start align-items-center gap-3 gy-3 gap-xl-0">
        <div className='col-12 d-flex justify-content-center'>
          <Nav variant="pills" className='gap-2' defaultActiveKey="customTemplate" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
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
    </Container>
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
