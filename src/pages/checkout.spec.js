import React from 'react';
import api from '../api';

import {
  act,
  cleanup,
  fireEvent,
  getByLabelText,
  getByRole,
  getByTestId,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkout from '.';

afterEach(cleanup);

it('should load and displays "Estamos quase lá!"', async () => {
  await act(async () => render(<Checkout />));
  const h1Element = screen.getByText('Estamos quase lá!');
  expect(h1Element).toBeInTheDocument();
});

describe('Tests to offer button', () => {
  it('should be able to fetch API', async () => {
    const res = await api.get('offer');
    expect(res.status).toBe(200);
  });

  it('amount of offer buttons should be equal to api array length', async () => {
    await act(async () => render(<Checkout />));
    const { data } = await api.get('offer');

    expect(await screen.findAllByTestId('offer').length).toEqual(data.length);
  });
});

// it('should change page/items when has been clicked', async () => {
//   render(<Checkout />);
//   await waitFor(() => expect(screen.getByLabelText('Page 2')));
// });
