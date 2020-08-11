import React from 'react';
import {BigHeader, SmallHeader} from '../components/Header';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Projects</h2>
        <p>Projects I couldn't discuss in the main page</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
            <SmallHeader headerText={"There will be more exciting projects page later on!"} />
            <p>
              Every awesome masterpiece takes some time to be created!
              Please wait!
            </p>

          <hr />

          <SmallHeader headerText={"Project EURIKA"} />
          <p>
            EURIKA
          </p>

          <hr />

          <SmallHeader headerText={"Project pyMLB"} />
          <p>
            Data science approach to baseball
          </p>

          <hr />
            <SmallHeader headerText={"Project PupstarHeroes"} />
            <p>
              Pupstarheroes using Unity engine and C#
            </p>

          <hr />

        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
