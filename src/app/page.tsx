import Body from "@/components/Body";
import AboutUs from "@/components/Body/Component/AboutUs";
import Sales from "@/components/Body/Component/Sales";

export default function Home() {
  return (
    <div id="home">
      <div>
        {/* <Body/> */}
      </div>

      <div id="about-us">
        <AboutUs/>
      </div>

      <div id="sales">
        <Sales/>
      </div>

      <div id="roadmap" className="h-screen bg-orange-200">
        Roadmap
      </div>

      <div id="blog" className="h-screen bg-pink-200">
        Blog
      </div>

      <div id="contact-us" className="h-screen bg-indigo-200">
        Contact Us
      </div>
    </div>
  );
}
