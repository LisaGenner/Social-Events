import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import CitySearch from './CitySearch';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('App passes "locations" state as a prop to CitySearch', () => {
  const AppWrapper =mount(<App />);
  const AppLocationsState = AppWrapper.state('locations');
expect(AppLocationsState).not.toEqual(undefined);
expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
  AppWrapper.unmount();
});
