import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../src/matchMedia.mock';
import Dashboard from '.'

describe('Dashboard Form Test', () => {

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
})