import classroom1 from '../assets/classroom1.png';
function History() {
  return(
    <section id="history" className="wrapper spotlight style3">
      <div className="inner">
        <img src={classroom1} className="image" alt="" />
        <div className="content">
          <h2 className="major">Professional History</h2>
          <p>
            Manatee County School District<br></br>
            Instructional Specialist Elementary K-6<br></br>
            <br></br>
            Lakewood Ranch High School District of Manatee County<br></br>
            Dean of Students<br></br>
            <br></br>
            Manatee School District<br></br>
            Reading Coach & English Department Chair<br></br>
            <br></br>
            Assistant Principal at West Genesee High School (suburban)<br></br>
            Administrative Internship at Onondaga Central School District NY<br></br>
            <br></br>
            Onondaga Central School District (rural)<br></br>
            Administrative Internship at West Genesee High School<br></br>
            Via BOCES Summer School<br></br>
            <br></br>
            Chittenango Central School District (rural)<br></br>
            English Department Chair Person and 7th grade English teacher<br></br>
            <br></br>
            Blodgett School, Syracuse City Schools, NY (urban)<br></br>
            Elementary teacher grade 4 & 7th English<br></br>
            <br></br>
            West Genesee Central Schools (Suburban school)<br></br>
            Adult Education Director
          </p>
          {/* <!-- <a href="#" className="special">Learn more</a> --> */}
        </div>
      </div>
    </section>
  );
}

export default History;