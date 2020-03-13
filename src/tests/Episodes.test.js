import React from 'react';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchShow as mockFetchShow } from '../api/fetchShow';
import { data } from '../data';
import Episodes from '../components/Episodes';
import App from '../App';

jest.mock('../api/fetchShow')

test('correct episodes populate when you select a season', async () => {
 

   
    mockFetchShow.mockResolvedValueOnce(data)



   
    const {getByTestId, getByText} = render(<App />)
    await wait( () => {getByText(/Select a season/i)} )
    const dropDown = getByText(/Select a season/i)
    userEvent.click(dropDown)
   // fireEvent.change(dropDown, {value: "Season 1"})
    const text = getByText(/Season 1/i)
    expect(text).toBeInTheDocument()
    userEvent.click(text)
    getByText(/Season 1, Episode 1/i)
})

