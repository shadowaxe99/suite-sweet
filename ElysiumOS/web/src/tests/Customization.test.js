
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Customization from '../components/Customization';

test('renders customization component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Customization />
    </Provider>
  );

  expect(getByText(/Customize Your Assistant/i)).toBeInTheDocument();
});

test('handles input change', () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <Customization />
    </Provider>
  );

  const input = getByLabelText('Assistant Name');
  fireEvent.change(input, { target: { value: 'Elysium' } });
  expect(input.value).toBe('Elysium');
});

test('handles form submit', () => {
  const { getByText, getByLabelText } = render(
    <Provider store={store}>
      <Customization />
    </Provider>
  );

  const input = getByLabelText('Assistant Name');
  fireEvent.change(input, { target: { value: 'Elysium' } });

  const button = getByText('Save');
  fireEvent.click(button);

  expect(store.getState().assistant.name).toBe('Elysium');
});
