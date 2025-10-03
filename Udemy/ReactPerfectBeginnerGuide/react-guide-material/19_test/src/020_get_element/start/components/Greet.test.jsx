import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('h1 is available or not', () => {
  const { debug, container } = render(<Greet />);
  // const h1E1 = screen.getByText('こんにちは');
  // expect(h1E1).toBeInTheDocument();

  // const radioEl = screen.getByRole('radio');
  // expect(radioEl).toBeInTheDocument();
  // debug(radioEl);
  // screen.debug(radioEl);
  // debug();
  // expect(radioEl).toBeInTheDocument();

  // const imgEl = screen.getByRole('img');
  // debug(imgEl);
  // const imgEl = screen.getByAltText('React Logo');
  // debug(imgEl);
  // expect(imgEl).toBeVisible();

  // const headingEl = screen.getByRole('heading', { name: 'こんにちは' });
  // debug(container);
  const h2El = container.querySelector('h2');
  debug(h2El);
});
