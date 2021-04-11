import { render, screen } from '@testing-library/react';
import App from './App';

it('App component render', () =>{
  const { queryByTitle } = render(<App/>);
  const app = queryByTitle("app");
  expect(app).toBeTruthy();
})



