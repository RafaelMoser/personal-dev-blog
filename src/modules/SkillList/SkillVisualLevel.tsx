type Props = { level: number };

const SkillVisualLevel = (props: Props) => {
  const dots: JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    dots.push(
      <div
        className={`h-6 w-6 rounded-full border-2 border-blue-950
        ${i <= props.level ? "bg-blue-900" : ""}`}
      />
    );
  }

  return <>{dots}</>;
};

export default SkillVisualLevel;
