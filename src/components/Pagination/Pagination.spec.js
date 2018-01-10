import React from 'react';
import Pagination from './Pagination';
import renderer from 'react-test-renderer';

describe('Pagination', () => {
  it('should render pagination where first page is active', () => {
    const tree = renderer
      .create(<Pagination activePage={1} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render pagination where second page is active', () => {
    const tree = renderer
      .create(<Pagination activePage={2} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render pagination where third page is active', () => {
    const tree = renderer
      .create(<Pagination activePage={3} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
