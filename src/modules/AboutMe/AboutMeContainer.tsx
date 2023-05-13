import SkillList, { Skill } from "./SkillList/SkillList";

type Props = {
  aboutMeBody: string;
  skills: Skill[];
};

const AboutMeContainer = (props: Props) => {
  return (
    <div className="w-1/2 h-30 rounded-md shadow-2xl bg-slate-800 flex flex-col p-4">
      <div>{props.aboutMeBody}</div>
      <SkillList skills={props.skills} />
    </div>
  );
};

export default AboutMeContainer;
