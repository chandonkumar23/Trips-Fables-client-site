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
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pruqppn5_yo?si=00pJUaCr1_ab6JwR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           
          ></iframe>
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
