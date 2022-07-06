import tutor from '../assets/tutor.jpg'
function About() {
  return(
    <section id="about" className="wrapper spotlight style1">
      <div className="inner">
        <img src={tutor} className="image" alt="" />
        <div className="content">
          <h2 className="major">About Me</h2>
          <p>Hi, I am Linda, I am a retired educator (August 2020) who has been in education for 30 years and would love to tutor your child.  I have taught elementary, middle school English, and high school English.  I am certified in Exceptional Student Education (ESE) and English to Speakers of Other Languages (ESOL).  I can offer your child individualized instruction based on evaluation/assessments.  I will design my instruction to fit the needs of your child.  Having been an instructional specialist, I have access to the curriculum that your child is using.</p>
          {/* <!-- <a href="#" className="special">Learn more</a> --> */}
        </div>
      </div>
    </section>
  );
}

export default About;