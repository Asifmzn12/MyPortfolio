import {FiDownload} from 'react-icons/fi'
function About() {
  return (
    <div className="container py-lg-5 py-3 mb-3 bg-white text-black rounded">
      <div className="row align-items-center justify-content-center">
       
        <div className="col-md-10 col-12 py-md-0 pt-lg-0 pt-3">
          <div className=" d-flex flex-column  gap-0 align-items-center align-items-lg-start">
            <h3>ABOUT ME</h3>
            <p className=" text-center text-lg-start">Passionate Frontend Developer with a solid foundation in HTML, CSS, JavaScript, Bootstrap,React and Git. Eager to apply my skills and contribute to building innovative web applications.
            </p>
            <p className=' text-center text-lg-start'> I enjoy creating engaging user interfaces and delivering seamless experiences. Open to collaborative opportunities that allow me to learn and grow in the field. Lets connect and explore how I can leverage my frontend knowledge to create impactful solutions using ReactJS.</p>

            <div className="itscv"><a href="https://flowcv.com/resume/jedrmjpmds" download="Asif-Ali-Resume.pdf" target="_blank" rel="noopener noreferrer"><button className="site-btn-outline" >Download Cv <FiDownload/></button></a></div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default About
