import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Packags from "../Packags/Packags";

const Tourism = () => {
  return (
    <div className="mb-36">
      <div className="mb-24">
        <h2 className="text-center font-bold text-xl md:text-3xl lg:text-5xl">
          Tourism <span className="text-[#2EC1DB]">&</span> Travel Guide
        </h2>
      </div>
      <Tabs>
        <TabList>
          <Tab>Overview Tab</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>

        </TabList>

        <TabPanel>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', width: '100%' }}>
            <iframe
              src="https://www.youtube.com/embed/5s8fs_j2xlY?si=IdENqbIe8MVixsbT"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allowFullScreen
            ></iframe>
          </div>

          <br />
          <p>
            Welcome to <strong>Trips Fables</strong>, where every journey is an adventure
            waiting to unfold. We are more than just a tourist agency; we are your
            gateway to immersive travel experiences that linger in your heart and
            memories.
          </p>
          <p>
            <strong>Our Mission</strong> at <strong>Trips Fables</strong> is to
            transform your travel dreams into reality. We believe in curating not
            just itineraries but stories — stories that resonate with the spirit
            of exploration, discovery, and joy.
          </p>
          <p>
            <strong>What Sets Us Apart</strong><br />
            <em>Passionate Experts:</em> Our team consists of passionate travel
            enthusiasts who are dedicated to crafting unique and personalized experiences.
            From off-the-beaten-path adventures to luxurious getaways, we cater to
            diverse interests and preferences.
          </p>
        </TabPanel>


        <TabPanel>
          <Packags></Packags>
        </TabPanel>
        <TabPanel>

        </TabPanel>

      </Tabs>

    </div>
  );
};

export default Tourism;
