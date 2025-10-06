import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component check', () => {
  describe('initial disp check', () => {
    test('wheather current count 0 or not', () => {
      render(<Counter originCount={0} />);

      const spanElBeforeUpdate = screen.getByText('現在のカウント:0');
      expect(spanElBeforeUpdate).toBeInTheDocument();
    });
    test('wheather current count 1 or not', () => {
      render(<Counter originCount={1} />);

      const spanElBeforeUpdate = screen.getByText('現在のカウント:1');
      expect(spanElBeforeUpdate).toBeInTheDocument();
    });
  });

  describe('button control check', () => {
    test('「カウントアップ」押下で「現在のカウント」が+1されるか', () => {
      render(<Counter originCount={0} />);

      const spanElBeforeUpdate = screen.getByText('現在のカウント:0');
      expect(spanElBeforeUpdate).toBeInTheDocument();

      const btn = screen.getByRole('button', { name: 'カウントアップ' });
      fireEvent.click(btn);

      const spanEl = screen.getByText('現在のカウント:1');
      expect(spanEl).toBeInTheDocument();
    });

    test('「カウントdown」押下で「現在のカウント」が-1されるか', () => {
      render(<Counter originCount={0} />);

      const spanElBeforeUpdate = screen.getByText('現在のカウント:0');
      expect(spanElBeforeUpdate).toBeInTheDocument();

      const btn = screen.getByRole('button', { name: 'カウントダウン' });
      fireEvent.click(btn);

      const spanEl = screen.getByText('現在のカウント:-1');
      expect(spanEl).toBeInTheDocument();
    });

    test('clear押下で「現在のカウント」がclearされるか', () => {
      render(<Counter originCount={2} />);

      const spanElBeforeUpdate = screen.getByText('現在のカウント:2');
      expect(spanElBeforeUpdate).toBeInTheDocument();

      const btn = screen.getByRole('button', { name: 'クリア' });
      fireEvent.click(btn);

      const spanEl = screen.getByText('現在のカウント:0');
      expect(spanEl).toBeInTheDocument();
    });
  });
});
