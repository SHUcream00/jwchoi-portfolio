import React from 'react';
import {BigHeader, SmallHeader} from '../components/Header';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <BigHeader headerText={"About"} />
        <p>Short story about myself</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <SmallHeader headerText={"I am"} />
          <p>
            A developer originally from Seoul, Korea, but now living in Irvine, California.
            I enjoy create things that people would love to use, and say thank you for making it more convenient to use <strong>"#PUT YOUR FAVORITE SERVICE's NAME"</strong>.
            I am a kind of person that keeps trying to make improvement on current products. That is why I enjoy reading journals about algorithms and pattern recognition.
            </p>
            <p>
            In my spare time I write codes for mods on several gaming communities and am also a passionate gamer who enjoys playing various genres of masterpieces.
            Recently, I'm working on Discord Chat Support Bots.
          </p>

          <hr />

          <BigHeader headerText={"What I am interested in"} />
          <p><span className="image left"><img src="https://cdn.discordapp.com/attachments/695373167627337859/742653101244153886/unknown.png" alt="" /></span>
            Other than programming, I am also interested in various range of topics. Ranging from Greek philosophy to Astronomy.
            Recently, I've bought a new telescope that will let me watch stars more closer than I've been ever able to.
            The first celestial object I've seen with the telescope was <strong><a href="https://en.wikipedia.org/wiki/C/2020_F3_(NEOWISE)"> C/2020 F3 NEOWISE</a></strong> which has passed Earth in early July, 2020
            and this will be the memory I'll never be able to forget. I also love learning new languages so that I can widen the horizon of my perception.
          </p>

        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
