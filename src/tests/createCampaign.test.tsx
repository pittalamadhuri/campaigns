import { fireEvent, render, screen } from '@testing-library/react';
import CreateCampaignComponent from '../components/views/createCampaign/createCampaign';

function onClosehandler(){
    console.log('closed');
}

test('checking Create campaign component - check if title is Create campaign', () => {
    render(<CreateCampaignComponent isOpen={true} onClose={onClosehandler}/>)
    const title = screen.getByTestId("title");
    expect(title.innerHTML).toContain('Create Campaign');
})

test('checking Create campaign component - name field presence', () => {
    render(<CreateCampaignComponent isOpen={true} onClose={onClosehandler}/>)
    const nameField = screen.getByTestId("name");
    expect(nameField).toBeTruthy();
})

test('checking Create campaign component - creator field presence', () => {
    render(<CreateCampaignComponent isOpen={true} onClose={onClosehandler}/>)
    const creator = screen.getByTestId("creator");
    expect(creator).toBeTruthy();
})

test('checking Create campaign component - button presence', () => {
    render(<CreateCampaignComponent isOpen={true} onClose={onClosehandler}/>)
    const button = screen.getByTestId("create-button");
    expect(button).toBeTruthy();
})

test('checking Create campaign component - If fields are empty when opened', () => {
    render(<CreateCampaignComponent isOpen={true} onClose={onClosehandler}/>)
    const nameField = screen.getByTestId("name").querySelector('input')?.value;
    const creator = screen.getByTestId("creator").querySelector('input')?.value;
    expect(nameField).toEqual('');
    expect(creator).toEqual('');
})

test('checking Create campaign component - Button is disable initially when no value in name or creator', () => {
    const handleClose = jest.fn();
    render(<CreateCampaignComponent isOpen={true} onClose={handleClose}/>)
    const button = screen.getByTestId("create-button");
    fireEvent.click(button);
    expect(handleClose).toHaveBeenCalledTimes(0)
})


test('checking Create campaign component - If name field gets values when input', () => {
    render(<CreateCampaignComponent isOpen={true} onClose={onClosehandler}/>)
    const nameField = screen.getByTestId("name").querySelector('input') as Node;
    fireEvent.change(nameField, {target: {value: 'Good Day'}})
    const value = screen.getByTestId("name").querySelector('input')?.value;
    expect(value).toBeTruthy();
})

test('checking Create campaign component - If creator field gets values when input', () => {
    render(<CreateCampaignComponent isOpen={true} onClose={onClosehandler}/>)
    const creatorField = screen.getByTestId("creator").querySelector('input') as Node;
    fireEvent.change(creatorField, {target: {value: 'Good Day'}})
    const value = screen.getByTestId("creator").querySelector('input')?.value;
    expect(value).toBeTruthy();
})

test('checking Create campaign component - Button is enabled when both fiels are filled', () => {
    const handleClose = jest.fn();
    render(<CreateCampaignComponent isOpen={true} onClose={handleClose}/>)
    const nameField = screen.getByTestId("name").querySelector('input') as Node;
    fireEvent.change(nameField, {target: {value: 'Good Day'}})
    const creatorField = screen.getByTestId("creator").querySelector('input') as Node;
    fireEvent.change(creatorField, {target: {value: 'Good Day'}})
    const button = screen.getByTestId("create-button");
    fireEvent.click(button);
    expect(handleClose).toHaveBeenCalledTimes(1)
})
