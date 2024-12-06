import { describe, it, expect } from 'vitest';
import Shop from '../pages/Shop'
import {Card} from "../pages/Shop"
import { render, screen } from '@testing-library/react';
import App from '../App';
import HomePage from '../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../pages/Cart';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});



describe("HomePage component", () => {
    it("Home-page renders", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
  
      const heading = screen.getByText(/arcade/i);
      expect(heading).toBeInTheDocument();

      const homeBar = screen.getByText(/Home/i);
      expect(homeBar).toBeInTheDocument();

      const explore = screen.getByText(/explore/i);
      expect(explore).toBeInTheDocument();

      const {container} = render(<BrowserRouter> <HomePage /></BrowserRouter>)
      expect(container).toMatchSnapshot()
    });
  });

  
  describe('Shop component', () => {
    it('Cart renders', () => {
      const { container } = render(
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      );
  
      expect(container).toMatchSnapshot();
    });
  });