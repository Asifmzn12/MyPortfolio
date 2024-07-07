import Card from 'react-bootstrap/Card';
import { data } from './config/skillscustomapi';

function Skills() {
  return (
    <div className='container py-lg-4 py-3'>
      <h2 className="text-center  mb-lg-5 mb-3">Skills</h2>

      <div className='row justify-content-md-start justify-content-center   align-items-center text-center'>

        {
          data.map((skills) => (
            <div  className=' col-sm-6 col-6 col-md-4 col-lg-3 my-2 ' key={skills.id} >
              <Card className='mylang skills position-relative overflow-hidden '>
              
                <Card.Body className='d-flex flex-column justify-content-center  align-items-center gap-lg-3 gap-2 position-relative '>
                  <img src={skills.img} className='img-fluid skillimg'></img>
                  <Card.Text className='mb-0 fw-bold h5'>{skills.SkillName}</Card.Text>
                  <Card.Text className="level slevel mb-0 " >{skills.level}</Card.Text>
                  <div>

                  </div>


                </Card.Body>
              </Card>
            </div>
          ))
        }



      </div>
    </div>
  );
}

export default Skills;
