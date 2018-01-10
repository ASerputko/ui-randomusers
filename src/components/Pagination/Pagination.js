import React from 'react';

const Pagination = ({ activePage, changeActivePage }) => {

  const pages = [1, 2, 3];

  return (
    <nav style={container}>
      <ul className="pagination">
        { pages.map((page, index) => {
            const className = page === activePage ? 'page-item active' : 'page-item';
            return (
              <li key={index} className={className} onClick={() => changeActivePage(page)}>
                <a className="page-link">{page}</a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

const styles = {
  container: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const { container } = styles;

export default Pagination;
