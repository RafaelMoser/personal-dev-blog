type Props = { key: string; level: number };

const SkillVisualLevel = (props: Props) => {
  const dots: JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    dots.push(
      <div
        key={props.key + i}
        className={`h-4 w-4 rounded-full border-4 border-blue-950
        ${i <= props.level ? "bg-blue-900" : ""}`}
      />
    );
  }

  return (
    <div key={props.key} className={"flex flex-row justify-between px-2"}>
      {dots}
    </div>
  );
};

export default SkillVisualLevel;
