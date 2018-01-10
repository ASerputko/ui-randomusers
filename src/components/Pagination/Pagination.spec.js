import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

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

  it('should chnage active page', () => {
    const mockChangeActivePage = jest.fn();
    const pageNumber = 1;
    const pagination = shallow(<Pagination activePage={pageNumber} changeActivePage={mockChangeActivePage} />);

    // click on page #2
    pagination.find('li').at(1).simulate('click');

    expect(mockChangeActivePage.mock.calls.length).toEqual(1);
    expect(mockChangeActivePage.mock.calls[0][0]).toEqual(2);

    // click on page #1
    pagination.find('li').at(0).simulate('click');

    expect(mockChangeActivePage.mock.calls.length).toEqual(2);
    expect(mockChangeActivePage.mock.calls[1][0]).toEqual(1);

    // click on page #3
    pagination.find('li').at(2).simulate('click');

    expect(mockChangeActivePage.mock.calls.length).toEqual(3);
    expect(mockChangeActivePage.mock.calls[2][0]).toEqual(3);

    // click on page #1
    pagination.find('li').at(0).simulate('click');

    expect(mockChangeActivePage.mock.calls.length).toEqual(4);
    expect(mockChangeActivePage.mock.calls[1][0]).toEqual(1);
  });

  it('should highlight active page', () => {
    const mockChangeActivePage = jest.fn();
    let pagination;

    pagination = shallow(<Pagination activePage={1} changeActivePage={mockChangeActivePage} />);
    expect(pagination.find('li').at(0).props().className).toEqual('page-item active');
    expect(pagination.find('li').at(1).props().className).toEqual('page-item');
    expect(pagination.find('li').at(2).props().className).toEqual('page-item');

    pagination = shallow(<Pagination activePage={2} changeActivePage={mockChangeActivePage} />);
    expect(pagination.find('li').at(0).props().className).toEqual('page-item');
    expect(pagination.find('li').at(1).props().className).toEqual('page-item active');
    expect(pagination.find('li').at(2).props().className).toEqual('page-item');

    pagination = shallow(<Pagination activePage={3} changeActivePage={mockChangeActivePage} />);
    expect(pagination.find('li').at(0).props().className).toEqual('page-item');
    expect(pagination.find('li').at(1).props().className).toEqual('page-item');
    expect(pagination.find('li').at(2).props().className).toEqual('page-item active');
  });
});
