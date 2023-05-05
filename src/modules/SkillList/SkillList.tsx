import SkillVisualLevel from "./SkillVisualLevel";

type Skill = {
  id: string;
  title: string;
  level: number;
  comment: string;
  children: Skill[];
};
type Props = { ident: number; skills: Skill[] };

const SkillList = (props: Props) => {
  const bgColor = "bg-zinc-" + (500 - props.ident * 100);
  return (
    <ul className="flex flex-col">
      {props.skills.map((skill) => (
        <li id={skill.id} className={`flex flex-row ${bgColor}`}>
          <div>{skill.title}</div>
          <SkillVisualLevel level={skill.level} />
          <div>{skill.comment}</div>
          {skill.children.length != 0 && (
            <SkillList ident={props.ident + 1} skills={skill.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
