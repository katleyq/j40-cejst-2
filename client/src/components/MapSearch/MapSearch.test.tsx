import {act, render} from '@testing-library/react';
import * as React from 'react';
import {LocalizedComponent} from '../../test/testHelpers';
import MapSearch from './MapSearch';

describe('rendering of the MapSearch', () => {
  const mockGoToPlace = jest.fn((x) => x);

  // mock fetch as it doesn't exist in test environment
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      }),
    ) as jest.Mock;
  });

  // clean up the mock
  afterEach(() => {
    (global.fetch as jest.Mock).mockClear();
    delete (global as any).fetch;
  });

  it('checks if component renders', async () => {
    const renderResult = render(
        <LocalizedComponent>
          <MapSearch goToPlace={mockGoToPlace}/>
        </LocalizedComponent>,
    );
    await act(async () => {
      // Wait for useEffect and fetch to complete
    });
    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
