import { render, fireEvent, screen } from '@testing-library/react';
import { ListItem } from './index';
import { List } from '../List';

it('component List render', () => {
    const { queryByTitle } = render(<ListItem/>);
    const listItem = queryByTitle("listItem");
    expect(listItem).toBeTruthy();
});

describe('delete element', () => {
    it('delete Item', ()=> {
        const { queryByTitle } = render(<List/>);
        const form = queryByTitle("form");
        const submitButton = queryByTitle("submitButton");
        fireEvent.change(form, {target:{newItem:{value: "elemento a borrar"}}})
        fireEvent.click(submitButton);
        const element = screen.getByText(/elemento a borrar/i);
        expect(element).toBeInTheDocument();
        
        // there are 3 initial elements in the list. The nexte element to insert has the index 3
        const deleteButton = queryByTitle("deleteItem_3");  
        fireEvent.click(deleteButton);
        expect(element).not.toBeInTheDocument();
    });

});