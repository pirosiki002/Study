import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('h1 is available or not', () => {
  render(<Greet />);
  const h1E1 = screen.getByText('こんにちは');
  expect(h1E1).toBeInTheDocument();
});
// test('h1 is available or not(fail)', () => {
//   render(<Greet />);
//   const h1E1 = screen.getByText('good evening');
//   expect(h1E1).toBeInTheDocument();
// });
