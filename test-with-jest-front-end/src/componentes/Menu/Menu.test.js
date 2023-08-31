import { render, screen } from '@testing-library/react';
import Menu from './index.jsx';

const links = ['Inicial', 'Transferências', 'Investimentos', 'Outros serviços'];

test('Should be render a link to start page', () => {
  render(<Menu />);

  links.map((link) => {
    const linkStartPage = screen.getByText(link);
    expect(linkStartPage).toBeInTheDocument();
  });
});

test('Should be render a list link and return the amount desired', () => {
  render(<Menu />);

  const listLinks = screen.getAllByRole('link');
  expect(listLinks).toHaveLength(4);
});

test('Should be not render the link to extrato', () => {
  render(<Menu />);

  const linkExtrato = screen.queryByText('Extrato');
  expect(linkExtrato).not.toBeInTheDocument();
});

test('Should reneder a link list with class link', () => {
  render(<Menu />);

  const classLinks = screen.getAllByRole('link');
  classLinks.forEach((link) => expect(link).toHaveClass('link'));
  expect(classLinks).toMatchSnapshot();
});
