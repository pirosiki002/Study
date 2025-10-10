import { render, screen } from '@testing-library/react';
import Message from './Message';
import userEvent from '@testing-library/user-event';

describe('message component check', () => {
  describe('first display check', () => {
    test('input string is valid?', () => {
      render(<Message />);
      const h2El = screen.getByRole('heading', { name: '入力された文字:' });
      expect(h2El).toBeInTheDocument();
    });
  });

  describe('moniter operation check', () => {
    test('input change -> push send button', async () => {
      const user = userEvent.setup();

      render(<Message />);
      const inputEl = screen.getByRole('textbox');
      const btnEl = screen.getByRole('button', { name: '送信ボタン' });

      const h2El = screen.getByRole('heading', { name: '入力された文字:' });
      expect(btnEl).toBeDisabled(); // invalid button
      expect(inputEl.value).toBe(''); // space

      await user.type(inputEl, 'hello!');

      expect(btnEl).not.toBeDisabled();
      await user.click(btnEl);

      expect(h2El.textContent).toBe('入力された文字:hello!');
    });
  });
});
