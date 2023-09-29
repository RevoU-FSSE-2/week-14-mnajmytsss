import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../src/matchMedia.mock';
import Dashboard from '.'

global.fetch = jest.fn().mockResolvedValue({
    json: async () => ({ token: 'mockedToken' })
})
describe('Dashboard Form Test', () => {

    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
    test('title render correctly', async () => {
        render(
            <Router>
                <Dashboard />
            </Router>

        );
        const title = screen.getByText('DASHBOARD CATEGORY')

        expect(title).toBeDefined();

    })
    test('Add category button render correctly', async () => {
        render(
            <Router>
                <Dashboard />
            </Router>

        );
        const title = screen.getByText('Add New Category')

        expect(title).toBeDefined();

    })
    test('Profile button render correctly', async () => {
        render(
            <Router>
                <Dashboard />
            </Router>

        );
        const title = screen.getByText('Profile')

        expect(title).toBeDefined();

    })
    test('Logout button render correctly', async () => {
        render(
            <Router>
                <Dashboard />
            </Router>

        );
        const title = screen.getByText('Logout')

        expect(title).toBeDefined();

    })
    test('Action list render correctly', async () => {
        render(
            <Router>
                <Dashboard />
            </Router>

        );
        const title = screen.getByText('Action')

        expect(title).toBeDefined();

    })
    test('status list form render correctly', async () => {
        render(
            <Router>
                <Dashboard />
            </Router>

        );
        const title = screen.getByText('Status')

        expect(title).toBeDefined();

    })
    test('name list render correctly', async () => {
        render(
            <Router>
                <Dashboard />
            </Router>

        );
        const title = screen.getByText('Name')

        expect(title).toBeDefined();

    })
    test('Id list render correctly', async () => {
        render(
            <Router>
                <Dashboard />
            </Router>

        );
        const title = screen.getByText('ID')

        expect(title).toBeDefined();

    })
})