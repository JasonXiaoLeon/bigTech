import Body from "@/components/Body";

export default function Home() {
  return (
    <div className="">
      <div>
        <Body/>
     </div>

      <div id="about-us" className="h-screen bg-teal-200">
        About us
      </div>

      <div id="sales" className="h-screen bg-purple-200">
        Sales
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
