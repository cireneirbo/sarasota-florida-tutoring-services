import classroom2 from '../assets/classroom2.jpg';
function Expertise() {
  return(
    <section id="expertise" className="wrapper spotlight style3">
      <div className="inner">
        <img src={classroom2} className="image" alt="" />
        <div className="content">
          <h2 className="major">Areas of Expertise</h2>
          <p><b>My services include:</b></p>
          <p><b>Grades K-5th</b> tutoring in reading, writing, and math. I will specifically focus on FSA standards to assist your child in being successful on state assessments.
          </p>
          <p><b>Grades 6 -12th</b> tutoring in reading and English with a focus on FSA English and SAT.</p>
          {/* <!-- <a href="#" className="special">Learn more</a> --> */}
        </div>
      </div>
    </section>
  );
}

export default Expertise;