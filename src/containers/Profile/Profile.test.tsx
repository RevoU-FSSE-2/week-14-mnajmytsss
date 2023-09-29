import { render, screen } from "@testing-library/react";
import Profile from ".";
import { MemoryRouter } from "react-router-dom";
import '../../../src/matchMedia.mock';

describe('Profile Form Test', () =>{

    test('field Profile render correctly', async () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );
        const title = screen.getByText('Profile')
        expect(title).toBeDefined();

    })
    test('field item name render correctly', async () => {
        render(
            <MemoryRouter> 
                <Profile />
            </MemoryRouter>
        );
        const name = screen.getByText('ID')
        expect(name).toBeDefined();

    })
    test('field item name render correctly', async () => {
      render(
          <MemoryRouter> 
              <Profile />
          </MemoryRouter>
      );
      const name = screen.getByText('NAME')
      expect(name).toBeDefined();

  })
  test('field item name render correctly', async () => {
    render(
        <MemoryRouter> 
            <Profile />
        </MemoryRouter>
    );
    const name = screen.getByText('EMAIL')
    expect(name).toBeDefined();

})
test('field item name render correctly', async () => {
  render(
      <MemoryRouter> 
          <Profile />
      </MemoryRouter>
  );
  const name = screen.getByText('BACK')
  expect(name).toBeDefined();

})
})