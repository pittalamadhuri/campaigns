import { fireEvent, render, screen } from '@testing-library/react';
import EditCampaignComponent from '../components/views/editCampaign/editCampaign';
import { Campaign } from '../types/types';

function onClosehandler(){
    console.log('closed');
}

const date = new Date();
const tempDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

const tempCampaign: Campaign = {
    id: 1,
    name: "campaign1",
    creator: "Madhuri",
    lastModified: tempDate,
    createdAt: tempDate
}

test('checking Edit campaign component - check if title is Edit campaign', () => {
    render(<EditCampaignComponent campaign={tempCampaign} isOpen={true} onClose={onClosehandler}/>)
    const title = screen.getByTestId("title");
    expect(title.innerHTML).toContain('Edit Campaign');
})

test('checking Edit campaign component - name field presence', () => {
    render(<EditCampaignComponent campaign={tempCampaign} isOpen={true} onClose={onClosehandler}/>)
    const nameField = screen.getByTestId("name");
    expect(nameField).toBeTruthy();
})

test('checking Edit campaign component - button presence', () => {
    render(<EditCampaignComponent campaign={tempCampaign} isOpen={true} onClose={onClosehandler}/>)
    const button = screen.getByTestId("update-button");
    expect(button).toBeTruthy();
})

test('checking Edit campaign component - If field is not empty when opened', () => {
    render(<EditCampaignComponent campaign={tempCampaign} isOpen={true} onClose={onClosehandler}/>)
    const nameField = screen.getByTestId("name").querySelector('input')?.value;
    expect(nameField).toEqual("campaign1");
})

test('checking Edit campaign component - Button is disable initially when value is same in edit component', () => {
    const handleClose = jest.fn();
    render(<EditCampaignComponent campaign={tempCampaign} isOpen={true} onClose={handleClose}/>)
    const button = screen.getByTestId("update-button");
    fireEvent.click(button);
    expect(handleClose).toHaveBeenCalledTimes(0)
})


test('checking Edit campaign component - If name field gets values when input', () => {
    render(<EditCampaignComponent campaign={tempCampaign} isOpen={true} onClose={onClosehandler}/>)
    const nameField = screen.getByTestId("name").querySelector('input') as Node;
    fireEvent.change(nameField, {target: {value: 'Good Day'}})
    const value = screen.getByTestId("name").querySelector('input')?.value;
    expect(value).toEqual('Good Day');
})

test('checking Edit campaign component - Button is enabled when name is changed', () => {
    const handleClose = jest.fn();
    render(<EditCampaignComponent campaign={tempCampaign} isOpen={true} onClose={handleClose}/>)
    const nameField = screen.getByTestId("name").querySelector('input') as Node;
    fireEvent.change(nameField, {target: {value: 'Good Day'}})
    const button = screen.getByTestId("update-button");
    fireEvent.click(button);
    expect(handleClose).toHaveBeenCalledTimes(1)
})
