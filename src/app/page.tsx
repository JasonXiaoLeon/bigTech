import Body from "@/components/Body";
import AboutUs from "@/components/Body/Component/AboutUs";
import Sales from "@/components/Body/Component/Sales";
import ContactUs from "@/components/ContactUs/ContactUs";
import RoadMap from "@/components/RoadMap";

export default function Home() {
  return (
    <div id="home" className="bg-[linear-gradient(1turn,#0b1d33,rgba(11,29,51,0)_97.51%)]">
      <div>
        <Body/>
      </div>

      <div id="about-us">
        <AboutUs/>
      </div>

      <div id="sales">
        <Sales/>
      </div>

      <div id="roadmap">
        <RoadMap/>
      </div>

      <div id="contact-us">
        <ContactUs/>
      </div>
    </div>
  );
}
