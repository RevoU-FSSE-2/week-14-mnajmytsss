import { render, screen } from '@testing-library/react'
import Register from '.'
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../src/matchMedia.mock';

describe('Register Form Test', () => {

    test('field Register form render correctly', async () => {
        render(
            <Router> 
                <Register />
            </Router>
        );
        const title = screen.getByText('Register Form')
        expect(title).toBeDefined();
    })
    test('field name render correctly', async () => {
        render(
            <Router> 
                <Register />
            </Router>
        );
        const name = screen.getByTitle('name')
        const form = screen.getByPlaceholderText('Name')
        expect(name).toBeDefined();
        expect(form).toBeDefined();
    })
    test('field email render correctly', async () => {
        render(
            <Router> 
                <Register />
            </Router>
        );
        const email = screen.getByTitle('email')
        const form = screen.getByPlaceholderText('Email')
        expect(email).toBeDefined();
        expect(form).toBeDefined();
    })
    test('field status render correctly', async () => {
        render(
            <Router> 
                <Register />
            </Router>
        );
        const password = screen.getByTitle('password')
        const form = screen.getByPlaceholderText('Password')
        expect(password).toBeDefined();
        expect(form).toBeDefined();
    })
    test('Register button render correctly', async () => {
        render(
            <Router> 
                <Register />
            </Router>
        );
        const title = screen.getByTitle('Register')
        expect(title).toBeDefined();
    })
    test('Register button render correctly', async () => {
        render(
            <Router> 
                <Register />
            </Router>
        );
        const title = screen.getByText('Login here')
        expect(title).toBeDefined();
    })
})