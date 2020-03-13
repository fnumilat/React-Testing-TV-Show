import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { data } from '../data';
import { fetchShow as mockFetchShow } from '../api/fetchShow';
import { act } from 'react-dom/test-utils';



test("Making sure getting the text while fetching the data", async () => {
    const { getByText } = render(<App />);

    const text = getByText(/Fetching data.../i);
    expect(text).toBeInTheDocument();
});



test('fetch makes api call to proper url', async () => {
    const axios = {
        get: jest.fn(() => Promise.resolve({data: {episodes: 'Season'}})),
    }
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
    render(<App url={url}/>)
    expect(axios.get).toHaveBeenCalledTimes(0)
    
})