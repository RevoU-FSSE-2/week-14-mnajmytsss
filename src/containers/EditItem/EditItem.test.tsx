import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../src/matchMedia.mock';
import EditItem from '.';

describe('Edit Form Test', () => {

    test('title render correctly', async () => {
        render(
            <Router> 
                <EditItem />
            </Router>
        );
        const title = screen.getByText('Edit Category')

        expect(title).toBeDefined();

    })
    test('field item name render correctly', async () => {
        render(
            <Router> 
                <EditItem />
            </Router>
        );
        const name = screen.getByTitle('name')
        const form = screen.getByPlaceholderText('Name')
        expect(name).toBeDefined();
        expect(form).toBeDefined();
    })
    test('field item status render correctly', async () => {
        render(
            <Router> 
                <EditItem />
            </Router>
        );
        const status = screen.getByTitle('status')
        const form = screen.getByText('Select a status option')
        expect(status).toBeDefined();
        expect(form).toBeDefined();
    })
    test('submit button render correctly', async () => {
        render(
            <Router> 
                <EditItem />
            </Router>
        );
        const submitButton = screen.getByTitle('submit')

        expect(submitButton).toBeDefined();

    })
    test('back button render correctly', async () => {
        render(
            <Router> 
                <EditItem />
            </Router>
        );
        const backButton = screen.getByTitle('back')

        expect(backButton).toBeDefined();

    })
})