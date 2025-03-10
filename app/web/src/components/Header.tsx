import Container from './Container';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header
      className="p-4 mb-4"
      style={{ backgroundColor: 'var(--color-brand)' }}
    >
      <Container>
        <h1 className="font-bold text-slate-200">{title}</h1>
      </Container>
    </header>
  );
};

export default Header;
