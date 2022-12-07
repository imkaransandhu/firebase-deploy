type HeaderProps = {
  mission: string;
};

const Header = ({ mission }: HeaderProps) => {
  return <h1 className="text-3xl font-bold" >{mission}</h1>;
};

export default Header;
