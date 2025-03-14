import Container from './Container';

interface FooterProps {
  copyright: string;
}

const Footer = ({ copyright }: FooterProps) => (
  <footer
    className="pt-4 py-4 mt-24"
    style={{ backgroundColor: 'var(--color-brand)' }}
  >
    <Container>
      <p className="text-slate-200 text-xs">
        Copyright &copy; {copyright} All rights reserved.
      </p>
    </Container>
  </footer>
);

export default Footer;
