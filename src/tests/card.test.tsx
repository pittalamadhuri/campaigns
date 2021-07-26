import { fireEvent, render, screen } from '@testing-library/react';
import CardComponent from '../components/common/card/card';
import { Campaign } from '../types/types';

const onEdit = jest.fn();
const onDelete = jest.fn();
function renderCardComponent() {
    const date = new Date();
    const tempDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    const tempCampaign: Campaign = {
        id: 1,
        name: "campaign1",
        creator: "Madhuri",
        lastModified: tempDate,
        createdAt: tempDate
    }
    render(<CardComponent onEditHandler={onEdit} onDeleteHandler={onDelete} campaign={tempCampaign} />)
}

test('checking Card component - Checking if card is rendered properly', () => {
    renderCardComponent();
    const firstCampaign = screen.getByText('campaign1');
    expect(firstCampaign).toBeTruthy();
})

test('checking card component - check if delete and edit icons are present', () => {
    renderCardComponent();
    const editIcon = screen.getByTestId('edit-icon');
    const deleteIcon = screen.getByTestId('delete-icon');
    expect(editIcon).toBeTruthy();
    expect(deleteIcon).toBeTruthy();

})

test('checking card component - check if last modified, creator and created on present', () => {
    renderCardComponent();
    const creator = screen.getByTestId('creator')
    const modified = screen.getByTestId('modified')
    const created = screen.getByTestId('created')
    expect(creator).toBeTruthy();
    expect(modified).toBeTruthy();
    expect(created).toBeTruthy();

})

test('checking card component - check if edit works', () => {
    renderCardComponent();
    fireEvent.click(screen.getByTestId('edit-icon'));
    expect(onEdit).toHaveBeenCalled();

})

test('checking card component - check if delete works', () => {
    renderCardComponent();
    fireEvent.click(screen.getByTestId('delete-icon'));
    expect(onDelete).toHaveBeenCalled();

})
