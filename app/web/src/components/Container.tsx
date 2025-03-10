import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => (
  <div className="max-w-6xl mx-auto">{children}</div>
);

export default Container;
