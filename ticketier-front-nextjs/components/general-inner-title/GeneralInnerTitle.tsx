interface Props {
  title: string;
}

const GeneralInnerTitle = ({ title }: Props) => {
  return <h1 className='text-xl sm:text-3xl font-bold my-8'>{title}</h1>;
};

export default GeneralInnerTitle;
