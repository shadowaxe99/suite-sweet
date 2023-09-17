
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Assistant from '../components/Assistant';

test('renders Assistant component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Assistant />
    </Provider>
  );

  expect(getByText(/Elysium Assistant/i)).toBeInTheDocument();
});

test('Assistant responds to user input', async () => {
  const { getByLabelText, findByText } = render(
    <Provider store={store}>
      <Assistant />
    </Provider>
  );

  fireEvent.change(getByLabelText(/user-input/i), { target: { value: 'Hello' } });
  fireEvent.click(getByText(/Send/i));

  expect(await findByText(/Hello, how can I assist you today?/i)).toBeInTheDocument();
});

test('Assistant handles empty user input', () => {
  const { getByLabelText, getByText, queryByText } = render(
    <Provider store={store}>
      <Assistant />
    </Provider>
  );

  fireEvent.change(getByLabelText(/user-input/i), { target: { value: '' } });
  fireEvent.click(getByText(/Send/i));

  expect(queryByText(/Hello, how can I assist you today?/i)).toBeNull();
});
