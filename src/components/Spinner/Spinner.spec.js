import React from 'react';
import Spinner from './Spinner';
import renderer from 'react-test-renderer';

describe('Spinner', () => {
  it('should render spinner ', () => {
    const tree = renderer
      .create(<Spinner />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
