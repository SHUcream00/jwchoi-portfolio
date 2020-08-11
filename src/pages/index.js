import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';
import {BigHeader, SmallHeader} from '../components/Header';

import pic1 from '../assets/images/eurika.png';
import pic2 from '../assets/images/pymlb.png';
import pic3 from '../assets/images/flyrus.png';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <BigHeader headerText={config.name} />
        <p>Hi, I'm Joon-Won. <br /> I'm a software engineer based in Irvine, CA specialized in <br /> designing, building web apps for exceptional user experience. </p> <p> Open for job opportunities </p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button secondary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn more
        </a>
      </Scroll>

    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            About me
            <br />
          </h2>
          <p>
            Hi, I'm a software engineer based in Irvine, CA.
            For Most of the time I spend my free time creating applications that help people on Social Network Services, or anywhere on the internet to better enjoy what they do
            by using softwares that increase efficiency in everyday tasks. I always look for chances that I can help fellow users to have more exciting moments on the internet.
          </p>
          <p>
            After graduating <strong><a href="http://www.fullerton.edu/">California State University, Fullerton</a></strong> with a B.S. degree of computer Science,
            I'm more actively working with fellow developers and gamers all over the world to make the world more exciting place.
          </p>
         </header>

        <ul className="icons major">
          {config.socialLinks.map(social => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${style} ${icon} major`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
        })}

        </ul>
      </div>
    </section>

    <section id="one-sub" className="wrapper style2">
      <div className="inner">
            <center> <h1> Portfolio </h1> </center>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <BigHeader headerText="EURIKA" />
          <h5> Python | Node.js | SQL | Discord API | Twitter API | Google API </h5>
          <br />
          <p>
            EURIKA is an online assistant program that works like Cortana, and Siri. EURIKA collects data from various Social Networking Services, gaming services, and then analyzed raw data upon user request.
            Check weather, news, your favorite sports team's score, listen to musics on YouTube through EURIKA.
            I've devised several development plans based on user feedback to analyze user needs to achieve exemplary user satisfaction, resulting in a high increase of unique daily users.
          </p>
          <p>
          In 2019, EURIKA is serving more than 90,000 queries a day, for users from various backgrounds in English, Korean, and Japanese.
          </p>
          <ul className="icons major">
            <li>
            <a href={"https://github.com/SHUcream00/EURIKA"} className={`icon brands fa-github`}>
              <span className="label">Github</span>
            </a>
            </li>
            <li>
            <a href={"https://eurika.readthedocs.io/en/latest/"} className={`icon regular fa-file`}>
              <span className="label">Docs</span>
            </a>
            </li>
            <li>
            <a href={"./Projects"} className={`icon solid fa-external-link-alt`}>
              <span className="label">Eurika</span>
            </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
            <BigHeader headerText="pyMLB | MLBPV" />
            <h5> Python | Statcast API </h5>
          <p>
            pyMLB and MLBPitchVisual are Python libraries for web-based interactive pitching model visualization for <a href="https://www.mlb.com/">Major League Baseball</a>.
            The goal is to provide easy, efficient analysis via visualization of complicated set of data which could barrier users from understanding the data.
            pyMLB will have several more interesting features in the future including prospect growth speculation via use of machine learning algorithm.
        </p>
        <p>
            Raw data I've used for these libraries are the intellectual property of MLB.
          </p>
          <ul className="icons major">
            <li>
            <a href={"https://github.com/SHUcream00/MLBPitchVisual"} className={`icon brands fa-github`}>
              <span className="label">Github</span>
            </a>
            </li>
            <li>
            <a href={"./PitchVisualizer"} className={`icon solid fa-external-link-alt`}>
              <span className="label">Topages</span>
            </a>
            </li>
          </ul>

        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
        <BigHeader headerText="Fly's R US - mock airline reservation system" />
        <h5> php | Javascript | Bootstrap | SQL | Paypal API </h5>
          <p>
            Fly'R US was a mock airline website that allowed a user to create account, check in their baggages,
            pay the fee accordingly (No actual cost was charged) via back-end payment system using Paypal API.
            For the purpose, mock airline schedules were generated and multiple users were allowed to select a seat
            to check in the flight they want.
        </p>
        <p>
            This was our class project. As a backend programmer of the team, I've designed and wrote REST API codes, random flight schedule generation,
            and SQL queries.
        </p>
        <p>
            In 2020, <strong>Fly's R US</strong> is offline now due to the nature of applications created for class projects.
          </p>
          <ul className="icons major">
            <li>
            <a href={"https://github.com/SHUcream00/FlyRUS"} className={`icon brands fa-github`}>
              <span className="label">Github</span>
            </a>
            </li>
          </ul>

        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Technologies I'm interested</h2>

        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h3>Python</h3>
          </li>
          <li className="icon solid fa-brain">
            <h3>Artificial Intelligence</h3>
          </li>
          <li className="icon solid fa-book-reader">
            <h3>Machine Learning</h3>
          </li>
          <li className="icon solid fa-code">
            <h3>JavaScript (ES6+)</h3>
          </li>
          <li className="icon solid fa-code">
            <h3>Node.js</h3>
          </li>
          <li className="icon solid fa-space-shuttle">
            <h3>Space Expedition</h3>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Do you want to know more about me?</h2>
          <p>You can download my resume here</p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href='https://drive.google.com/file/d/13FCB8-GAqA7IfOWlIaEvLgjXtEBFSTT3/view?usp=sharing' className="button fit primary icon solid fa-download">
              Resume(PDF)
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1CFtkNyWLlJHVWJrH04ozZb9w1PB6iSMJ/view?usp=sharing" className="button fit icon solid fa-download">
              Resume(Docx)
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="fin" className="wrapper style2">
      <div className="inner">
        <center><BigHeader headerText="Get In Touch" />
        <p>
        I'm actively looking for new opportunities to experience this brave new world!
        If you have any question or have nice idea, please let me know and I'll get back to you!
        </p>
        <a href="mailto:requiemdeciel@gmail.com" className="button primary">Say Hello</a>
        </center>
      </div>
    </section>

  </Layout>
);

export default IndexPage;
