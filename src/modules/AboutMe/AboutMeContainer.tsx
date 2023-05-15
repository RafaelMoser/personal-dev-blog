type Props = {
  aboutMeBody: string;
};

const AboutMeContainer = (props: Props) => {
  return (
    <div className="w-1/2 h-30 rounded-md shadow-2xl bg-slate-800 flex flex-col p-4">
      <div>{props.aboutMeBody}</div>
    </div>
  );
};

export default AboutMeContainer;
