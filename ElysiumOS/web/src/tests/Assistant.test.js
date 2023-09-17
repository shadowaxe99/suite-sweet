
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

  expect(getByText(/Assistant/i)).toBeInTheDocument();
});

test('Assistant responds to user input', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Assistant />
    </Provider>
  );

  const input = getByLabelText('user-input');
  fireEvent.change(input, { target: { value: 'Hello, Assistant!' } });
  fireEvent.click(getByText('Send'));

  expect(getByText(/Hello, user!/i)).toBeInTheDocument();
});

test('Assistant handles empty user input', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Assistant />
    </Provider>
  );

  const input = getByLabelText('user-input');
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(getByText('Send'));

  expect(getByText(/Please enter a message./i)).toBeInTheDocument();
});
