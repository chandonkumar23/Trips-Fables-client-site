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
        <iframe  src="https://www.youtube.com/embed/5s8fs_j2xlY?si=IdENqbIe8MVixsbT" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <br />
        <br />
        <p> Welcome to [Trips Fables], where every journey is an adventure
          waiting to unfold. We are more than just a tourist agency; we are your
          gateway to immersive travel experiences that linger in your heart and
          memories. Our Mission At [Trips Fables], our mission is to
          transform your travel dreams into reality. We believe in curating not
          just itineraries but stories — stories that resonate with the spirit
          of exploration, discovery, and joy. What Sets Us Apart Passionate
          Experts: Our team consists of passionate travel enthusiasts who are
          dedicated to crafting unique and personalized experiences. From
          off-the-beaten-path adventures to luxurious getaways, we cater to
          diverse interests and preferences.</p>
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
