import AboutMeContainer from "../modules/AboutMe/AboutMeContainer";

const AboutMePage = () => {
  return (
    <div className="flex flex-col space-y-8 items-center">
      <AboutMeContainer aboutMeBody="test" />
    </div>
  );
};

export default AboutMePage;
