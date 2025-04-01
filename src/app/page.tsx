import Body from "@/components/Body";
import AboutUs from "@/components/Body/Component/AboutUs";
import Sales from "@/components/Body/Component/Sales";
import ContactUs from "@/components/ContactUs/ContactUs";
import RoadMap from "@/components/RoadMap";

export default function Home() {
  return (
    <div id="home" className="bg-[#030b15]">
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
