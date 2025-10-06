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
  // const h2El = container.querySelector('h2');
  // debug(h2El);

  // こちらだとInputの氏名に関連付けられた情報を取得
  // const elByLabel = screen.getByLabelText('氏名');
  // debug(elByLabel);

  // udemyと違って、ラベル情報はgetByTextじゃないと取れない
  // const labelEl = screen.getByText('氏名');
  // debug(labelEl);

  const elByPlaceholder = screen.getAllByPlaceholderText('codemafia');
  // debug(elByPlaceholder);
});
