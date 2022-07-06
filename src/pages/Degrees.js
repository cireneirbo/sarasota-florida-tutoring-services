import classroom4 from '../assets/classroom4.jpg';
function Degrees() {
  return(
    <section id="two" className="wrapper alt spotlight style2">
      <div className="inner">
        <img src={classroom4} className="image" alt="" />
        <div className="content">
          <h2 className="major">Professional Degrees and Achievements</h2>
          
            <p>	Leader Florida School District Administrator (SDA) Certification<br></br>
              Florida School District Leader (SDL) Certification<br></br>
              Master of Literacy from Syracuse University<br></br>
              Bachelor of Science - SUNY Cortland K-12 Education, English concentration<br></br>
              Secondary English Certification<br></br>
              English Extension Certification Grades 7-12<br></br>
              Elementary K-6 Certification<br></br>
              Awarded the Post Standard Golden Apple Award for teaching 2011<br></br>
              Awarded Teacher of the Year for 2003<br></br>
            </p>									
          {/* <!-- <a href="#" className="special">Learn more</a> --> */}
        </div>
      </div>
    </section>
  );
}

export default Degrees;