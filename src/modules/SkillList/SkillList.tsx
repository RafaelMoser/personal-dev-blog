import SkillVisualLevel from "./SkillVisualLevel";

export type Skill = {
  id: string;
  title: string;
  level: number;
  comment: string;
  children: Skill[];
};
type Props = { skills: Skill[] };

const SkillList = (props: Props) => {
  const generateSkillList = (skills: Skill[], indent: number): JSX.Element => {
    return (
      <>
        {skills.map((skill) => (
          <>
            <tr key={skill.id} className="divide-x divide-slate-800">
              <td key={skill.id + "_title"}>
                {">".repeat(indent) + skill.title}
              </td>
              <td key={skill.id + "_level"}>
                <SkillVisualLevel
                  key={skill.id + "_level"}
                  level={skill.level}
                />
              </td>
              <td key={skill.id + "_comm"}>{skill.comment}</td>
            </tr>
            {skill.children.length !== 0 &&
              generateSkillList(skill.children, indent + 1)}
          </>
        ))}
      </>
    );
  };

  return (
    <table className="table-fixed w-1/3 items-center relative left-1/3 bg-lime-300 rounded-3xl">
      <thead className="table-header-group border-b border-slate-800">
        <tr>
          <th className="w-1/5">Skill</th>
          <th className="w-1/5">Aptitude</th>
          <th className="w-3/5">Comment</th>
        </tr>
      </thead>
      <tbody>{generateSkillList(props.skills, 0)}</tbody>
    </table>
  );
};

export default SkillList;
