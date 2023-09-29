import { render, screen } from '@testing-library/react'
import AddForm from '.'
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../src/matchMedia.mock';

describe('Add Form Test', () => {

    test('title render correctly', async () => {
        render(
            <Router> 
                <AddForm />
            </Router>
        );
        const title = screen.getByText('Add New Category')

        expect(title).toBeDefined();

    })
    test('field item name render correctly', async () => {
        render(
            <Router> 
                <AddForm />
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
                <AddForm />
            </Router>
        );
        const status = screen.getByTitle('status')
        const form = screen.getByText('Select Status')
        expect(status).toBeDefined();
        expect(form).toBeDefined();
    })
    test('submit button render correctly', async () => {
        render(
            <Router> 
                <AddForm />
            </Router>
        );
        const submitButton = screen.getByTitle('submit')

        expect(submitButton).toBeDefined();

    })
    test('back button render correctly', async () => {
        render(
            <Router> 
                <AddForm />
            </Router>
        );
        const backButton = screen.getByTitle('back')

        expect(backButton).toBeDefined();

    })
})