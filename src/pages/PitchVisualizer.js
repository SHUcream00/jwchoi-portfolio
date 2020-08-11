import React from 'react';
import {BigHeader} from '../components/Header';
import Footer from '../components/Footer';

import snell from '../assets/nsb/BS.png';
import degrom from '../assets/nsb/JD.png';

const IndexPage = () => (

    <section>

        <BigHeader headerText={"MLB Pitching Visualizer Example"} />
        <p>
        <i>Visualized <a href="https://baseballsavant.mlb.com/"><strong>STATCAST</strong></a> 2018 Cy Young winners' pitch location on pitch types</i><br/>
        <strong>Joon-Won Choi</strong>

        </p>

        <div classname="inner">
            <h3>Prerequirements</h3>
            <pre>
                <code>
                import pandas as pd <br />
                import numpy as np <br />
                import matplotlib.pyplot as plt <br />
                </code>
            </pre>
            <h3>Data Input</h3>
            <pre>
                <code>
                    #Setting up Name and CSV location<br />
                    player_name = "Blake Snell"<br />
                    file_src = "~/0Projects/NSB/2018_blake_snell.csv"<br />
                    <br />
                    #Read raw csv
                    raw = pd.read_csv(file_src)<br />
                    df = pd.DataFrame(raw)<br />
                    <br />
                    #Filter the results using preset dict <br />
                    df = df.replace(replace_dict)<br />
                    df = df[df["description"].isin(["contact", "miss"])]<br />
                    for i in df["pitch_type"].unique():<br />
                        visualize(df, i)<br />
                    <br />
                </code>
            </pre>

            <h3>Visualization</h3>
            <strong><a href="https://github.com/SHUcream00/MLBPitchVisual">Source Code</a></strong>

        </div>

        <br />

        <div classname="inner">
        <h2> 2018 American League Cy Young Winner - Blake Snell</h2>
        </div>
        <div className="col-12"><span className="image fit"><img src={snell} alt="" /></span></div>
        <div classname="inner">
        <h2> 2018 National League Cy Young Winner - Jacob deGrom</h2>
        </div>
        <div className="col-12"><span className="image fit"><img src={degrom} alt="" /></span></div>
        <p>
            The primary goal in this example of <strong> MLB Pitching Visualizer </strong> is to see which pitch type of a player has led to more swings and misses.
            A pitcher would want to make batter swing for their balls, especially when they're baiting batters out of the strike zone with breaking balls.
            Every pitcher will have own "winning strategy" and such tendency of using a certain strategy can be seen when it comes to visualization. For example, it can be seen that
            one of the Jacob deGrom in 2018's favorite pitch was a 4-Seam Fastball, aiming upper left corner of the strikezone. Like this, I believe this kind of data
            can serve better purposes through visualization, from analysis  to simple visualization for baseball blog posts for users to understand.
        </p>
        <p>
            I've collected the raw data through Baseballsavant's Statcast data. Statcast provides the location of strikezone for every pitch, pitch types, and corresponding results.
            While I've focused on swing and misses for this example, the one I'm working on right now is focusing on correlationship between ball speed and hits so that a researcher
            would be able to draw conclusion about whether there's a strong relationship between those factors. Those are just some of the potential combinations, and amazingly many
            sabermetrics can be supported one day. Although this example covers only 2 pitchers from 2018, technically this script, at current stage, can even analyze every pitcher in Statcast's raw csv files.
        </p>
        <br />
        <center>
        <a href="/" className="button secondary">
          Go back to the main page
        </a>
        </center>
        
        <div id="page-wrapper"><Footer /></div>
    </section>

);

export default IndexPage;
