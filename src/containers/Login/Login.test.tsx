import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Login from '.'
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../src/matchMedia.mock';

global.fetch = jest.fn().mockResolvedValue({
    json: async () => ({ token: 'mockedToken'})
});
describe('Login Form Test', () => {

    beforeAll(() => {
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
    });
    
    test('field login form render correctly', async () => {
        render(
            <Router> 
                <Login />
            </Router>
        );
        const title = screen.getByText('Login Form')
        expect(title).toBeDefined();
    })
    test('field email render correctly', async () => {
        render(
            <Router> 
                <Login />
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
                <Login />
            </Router>
        );
        const password = screen.getByTitle('password')
        const form = screen.getByPlaceholderText('Password')
        expect(password).toBeDefined();
        expect(form).toBeDefined();
    })
    test('login button render correctly', async () => {
        render(
            <Router> 
                <Login />
            </Router>
        );
        const title = screen.getByText('LOGIN')
        expect(title).toBeDefined();
    })
    test('login button render correctly', async () => {
        render(
            <Router> 
                <Login />
            </Router>
        );
        const title = screen.getByText('Register here')
        expect(title).toBeDefined();
    })

    test('onSubmit works correctly', async () => {
        
    render(
        <Router> 
            <Login />
        </Router>
        );
        const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
        const submitButton = screen.getByText('LOGIN');
        
    act(() => {
        fireEvent.change(emailInput, { target: { value: 'test@mail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'Smandak12#' } });
        fireEvent.click(submitButton);
    })
        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith('https://mock-api.arikmpt.com/api/user/login', expect.any(Object));;
        });
    });
})