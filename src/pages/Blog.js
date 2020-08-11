import React from 'react';
import {BigHeader, SmallHeader} from '../components/Header';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <BigHeader headerText={"Blog"} />
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <SmallHeader headerText={"There will be a nice blog later on!"} />
          <p>
            Every awesome masterpiece takes some time to be created!
            Please wait!
          </p>

        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
