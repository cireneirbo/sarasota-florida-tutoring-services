import classroom3 from '../assets/classroom3.jpg';
import cafe1 from '../assets/cafe1.jpg';

function Services() {
  return(
    <section id="services" class="wrapper alt style1">
      <div class="inner">
        <h2 class="major">Professional Services</h2>
        <p></p>
        <section class="features">
          <article>
            <img src={classroom3} className="image" alt="" />
            <h3 class="major">E-Learning Assistance</h3>
            <p>Does your child need help with maneuvering their online coursework and uploading materials?  I am fully trained in Schoology and can show your child how to locate coursework, upload materials, and use the platform to its fullest.</p>
            
          </article>
          
          <article>
            <img src={cafe1} className="image" alt="" />
            <h3 class="major">Preferred Methods of Instruction</h3>
            <p>
              The best option is using my Zoom channel for no-contact instruction. Zoom is a web-service with screen-sharing capabilities which has been utilized by the Manatee School District, among many others.
              Also, provided safety precautions are considered, I may be available to tutor in a public space, such as a library or cafe.
            </p>
            <p><b>Currently, I am not making home visits due to the COVID-19 epidemic.</b></p>
            
          </article>
        </section>
        
      </div>
    </section>
  );

}

export default Services;