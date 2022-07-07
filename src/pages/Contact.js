function Contact() {
  
  function fakeAlert(e) {
    alert("Sorry! This is just a mock website to demonstrate the web developer's ability to create a professional website for clients. :)");
    e.preventdefault();
  }

  return(
    <section id="footer">
      <div id="form" className="inner">
        <h2 className="major">Get in touch</h2>
        <p>Please contact me with any inquiries. I will be happy to discuss my credentials and our tutoring options.</p>

        <form onSubmit={fakeAlert}>
          <div className="fields">
            <div className="field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" /></li>
          </ul>
        </form>

        <ul className="contact">
          <li className="icon solid fa-home">
            Available for instruction in:<br />
            Sarasota, FL Greater Area<br />
            Bradenton, FL Greater Area
          </li>
          <li className="icon solid fa-phone">(123) 456-7890</li>
          <li className="icon solid fa-envelope"><a href="#form">tutor@sarasotatutoring.com</a></li>
          <li className="icon solid fa-gem">Masters in Reading<br></br>
            Masters in Education Administration<br></br>
            Bachelor of Science in Education grades K-12 and a minor in English<br></br>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Sarasota Florida Tutoring Services All rights reserved.</li><li>Created by: <a href="https://github.com/cireneirbo">cireneirbo</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;