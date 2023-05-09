import SkillList, { Skill } from "../modules/SkillList/SkillList";
const TEST_SKILLS: Skill[] = [
  {
    id: "1",
    level: 4,
    title: "React",
    comment: "This blog frontend is made in react",
    children: [
      {
        id: "1.1",
        level: 3,
        title: "React Router",
        comment: "This blog frontend uses react router",
        children: [],
      },
      {
        id: "1.2",
        level: 2,
        title: "nextJS",
        comment: "done a small project with it",
        children: [],
      },
    ],
  },
  {
    id: "2",
    level: 3,
    title: "Python",
    comment: "This blog backend is made in python",
    children: [],
  },
];

const AboutMePage = () => {
  return <SkillList skills={TEST_SKILLS} />;
};

export default AboutMePage;
