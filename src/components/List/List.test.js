import { render, fireEvent, screen } from '@testing-library/react';
import { List } from './index';

it('component Form render', () => {
    const { queryByTitle } = render(<List/>);
    const form = queryByTitle("form");
    expect(form).toBeTruthy();
});

it('component List render', () => {
    const { queryByTitle } = render(<List/>);
    const list = queryByTitle("list");
    expect(list).toBeTruthy();
});

describe('add element', () => {
    it('New Item', ()=> {
        const { queryByTitle } = render(<List/>);
        const form = queryByTitle("form");
        const submitButton = queryByTitle("submitButton");
        
        fireEvent.change(form, {target:{newItem:{value: "nuevo elemento"}}})
        fireEvent.click(submitButton);

        const element = screen.getByText(/nuevo elemento/i);
        expect(element).toBeInTheDocument();
    });

});