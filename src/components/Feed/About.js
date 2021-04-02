import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import cssClassses from "./About.module.css";

const About = () => {
  const downloadResume = () => {
    html2canvas(document.querySelector("#resume")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png",1.0);
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG",10, 10, 180, 150);
      pdf.save("mh shifat's resume.pdf");
    });
  };

  return (
    <div id="resume">
      <Container
        style={{
          paddingTop: "60px",
        }}
      >
        <Container>
          <Row>
            <Col style={{ backgroundColor: "white" }}>
              <div className="d-flex justify-content-center">
                <Image
                  alt="mydp"
                  // src="/images/profile_pic.jpg"
                  src='https://drive.google.com/file/d/1NVz2qV9UDHI9TsWGeZh8G3WQ6LIfYSQO/view?usp=sharing'
                  roundedCircle
                  thumbnail
                  width="200"
                />
              </div>
            </Col>

            <Col
              className="d-flex justify-content-center"
              style={{ backgroundColor: "white", textAlign: "right" }}
            >
              <div className="d-flex flex-column ">
                <div className="h3">Mehedi Hasan Shifat</div>
                <p>B.Sc in Software Engineering (2018 - present)</p>
                <p>Android(Flutter) & Web (React | Express) Developer</p>

                <p>
                  Email :{" "}
                  <a href="mailto:mhshifat757@gmail.com">
                    mhshifat757@gmail.com
                  </a>{" "}
                  | Phone : <a href="tel:+8801714986887">+8801714986887</a>
                </p>
                <p>
                  <a href="https://github.com/jspw/">
                    <Image src="https://img.shields.io/badge/--github?label=github&logo=github&style=social" />
                  </a>
                  <a href="https://www.linkedin.com/in/mhshifat">
                    <Image src="https://img.shields.io/badge/--linkedin?label=LinkedIn&logo=LinkedIn&style=social" />
                  </a>
                  <a href="https://twitter.com/mhshifat757">
                    <Image src="https://img.shields.io/badge/--twitter?label=Twitter&logo=Twitter&style=social" />
                  </a>

                  <a href="https://www.facebook.com/rio57mh">
                    <Image src="https://img.shields.io/badge/--facebook?label=Facebook&logo=Facebook-outlook&style=social" />
                  </a>
                  <a href="https://www.quora.com/profile/Mehedi-Hasan-Shifat">
                    <Image src="https://img.shields.io/badge/--quora?label=Quora&logo=quora-outlook&style=social" />
                  </a>
                  <a href="https://dev.to/mhshifat">
                    <Image
                      src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                      alt="5hfT's DEV Profile"
                      height="20"
                      width="30"
                    />
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <hr></hr>

        <Container style={{ paddingTop: "10px" }}>
          <p>
            Hi, I am Mehedi Hasan Shifat, from Bangladesh, currently studying
            <b> Software Engineering</b> in{" "}
            <a href="https://www.sust.edu/institutes/iict">IICT</a>,
            <a href="https://www.sust.edu/"> SUST</a>. I'm a passionate tech
            enthusiast. I have been learning tech stuffs for 3 years, love to
            write code, solving problems and learn new technologies.I'm a web
            developer as well as android application developer.I also try to
            contribute in open source projects. I have interest in building
            system applications or tools more then commercial apps. Recently, i
            have got{" "}
            <b>Foobar Coding Challenge invitation from Google.(March,2021)</b>
          </p>
          <div>
            <h4>Experience </h4>
            <p>
              <ul>
                <li>
                  I have build some projects as a freelancer.
                  <ul>
                    <li>
                      <a href="https://github.com/jspw/MedEasy">MedEasy</a>
                    </li>
                    <li>
                      <a href="https://github.com/jspw/Food-Delivery-App">
                        {" "}
                        Food Delivery App UI
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Volunteer at Hackathon
                  <ul>
                    <li>SUST TechFest (2019)</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h4>Professional Services</h4>
            <ul>
              <li>
                <b>Assistant Treasurer</b> at Barishal Divisional Student
                Association,SUST (2020-Present)
              </li>
            </ul>
          </div>
          <div>
            <h4>Skills</h4>
            <ul>
              <li>
                <b>Languages: </b> Javascript, Python, Dart, C, Java, Bash
              </li>
              <li>
                <b>Frameworks/Libraries : </b>
                React, Flutter, Redux, Express, Django
              </li>
              <li>
                <b>Operating System : </b> Linux(Ubuntu, Kali linux, Manjaro),
                Windows
              </li>
              <li>
                <b>Version Control : </b> Git
              </li>
            </ul>
          </div>
          <div>
            <h4>Certifications</h4>
            <ul>
              <li>
                <a href="https://icpc.global/ICPCID/FW7Z95QZJNSG">
                  Asia Dhaka Regional Site Online Preliminary Contests (rank:
                  459, Honorable Mention)
                </a>
              </li>
              <li>
                <a href="https://www.udemy.com/certificate/UC-b508de7e-076e-4903-9a63-73e1ff12cdb8/">
                  The Complete Front-End Web Development Course
                </a>
              </li>
              <li>
                <a href="https://www.coursera.org/account/accomplishments/verify/GCB7P7R4DQNA?utm_source=link&utm_campaign=copybutton_certificate&utm_product=course">
                  Programming for Everybody (Getting Started with Python)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Projects</h4>
            <ul>
              <li>
                <a href="https://github.com/jspw/cp-tool">Paper </a> an Online
                Exam Management System (<b>6 ★ </b>)
              </li>
              <li>
                <a href="https://github.com/jspw/cp-tool">cp-tool </a>an auto
                generator for solved problems at different online judges (
                <b>14 ★ </b>)
              </li>
              <li>
                <a href="https://github.com/jspw/Ubuntu-Launcher">
                  Ubuntu Launcher
                </a>{" "}
                An Android Launcher (having Ubuntu flavour) build with Flutter (
                <b>79 ★ </b>)
              </li>
              <li>
                <a href="https://github.com/jspw/Visual-Codeforces">
                  Visual Codeforces{" "}
                </a>{" "}
                This is an Android Application based on Visualizing
                Codeforces(An online Judge) (<b>8 ★ </b>)
              </li>
              <li>
                <a href="https://github.com/jspw/VS-Code-Config">
                  VS-Code-Config
                </a>{" "}
                VS Code Setting (Live input output) to make competitive
                programming easy and program analysis (<b>32 ★ </b>)
              </li>
              <li>
                <a href="https://github.com/jspw/codenerd">CodeNerd </a> A
                Online Educational Platform (<b>8 ★ </b>)
              </li>
            </ul>
          </div>
          <div>
            <h4>Open Source Contributions</h4>

            <ul>
              <li>
                Github
                <ul>
                  <li>
                    <a href="https://github.com/fleaflet/flutter_map">
                      flutter_map
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ErikCH/DevYouTubeList">
                      DevYouTubeList
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://stackoverflow.com/users/9784839/5hifat">
                  Stackoverflow
                </a>
                <b>(Reputation : 376 | top 73%)</b>
              </li>
              <li>
                <a href="https://askubuntu.com/users/844087/5hifat">
                  Ask Ubuntu
                </a>
                <b>(Reputation : 458 | top 42%)</b>
              </li>
            </ul>
          </div>
          <div>
            <h4>Blogs</h4>
            <ul>
              <a href="https://medium.com/@mhshifat757/make-your-own-custom-android-launcher-using-flutter-b204b86ec89a">
                Make Your Own Custom Android Launcher using Flutter
              </a>
            </ul>
          </div>
          <div>
            <h4>Interests</h4>
            <p>Travelling | Listening Music | Netflix & Chill</p>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default About;
