import Articles from "../../Articles";
import Discount from "../../Discount";
import Event from "../../EVent";
import Features from "../../Features";
import Footer from "../../Footer";
import Gallery from "../../Gallery";
import Header from "../../Header";
import Hero from "../../Hero";
import Skills from "../../OurSkills";
import Pricing from "../../Pricing";
import Services from "../../Services";
import Stats from "../../Stats";
import TeamMember from "../../TeamMember";
import Testimonials from "../../Testimonials";
import Video from "../../Video";
import WorkSteps from "../../WorkSteps";

function Home() {
  return (
    <>
      <Hero />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <TeamMember />
      <Services />
      <Skills />
      <WorkSteps />
      <Event />
      <Pricing />
      <Video />
      <Stats />
      <Discount />
    </>
  );
}

export default Home;
