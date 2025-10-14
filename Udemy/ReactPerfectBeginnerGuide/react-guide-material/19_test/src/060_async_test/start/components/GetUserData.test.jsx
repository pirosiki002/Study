import { vi } from 'vitest';
import axios from 'axios';

// axiosをモック（インポート前に実行）
vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

import { render, screen } from '@testing-library/react';
import GetUserData from './GetUserData';
import { ENDPOINT_URL } from '../Example.jsx';

describe('GetUserData check', () => {
  beforeEach(() => {
    // 各テスト前にモックをリセット
    vi.clearAllMocks();
  });

  test('outside data is getting', () => {
    // モックを即座に解決しないようにする（pending状態を維持）
    axios.get.mockImplementation(() => new Promise(() => {}));

    render(<GetUserData url={ENDPOINT_URL} />);

    const h1El = screen.getByRole('heading', { name: '通信中です！' });
    expect(h1El).toBeInTheDocument();
  });
  test('after outside data obtained', async () => {
    // モックデータを返すように設定
    axios.get.mockResolvedValue({
      data: { id: 1, name: 'テストユーザー' },
    });

    render(<GetUserData url={ENDPOINT_URL} />);

    const h2El = await screen.findByRole('heading', { name: 'プロフィール' });
    expect(h2El).toBeInTheDocument();

    const itemEls = await screen.findAllByRole('listitem');
    expect(itemEls[0].textContent).toBe('ID: 1');
    expect(itemEls[1].textContent).toBe('Name: テストユーザー');
  });
});
