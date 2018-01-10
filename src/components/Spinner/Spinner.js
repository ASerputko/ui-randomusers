import React from 'react';

/**
 * Show spinner
 */
const Spinner = () => {
  return (
    <div style={container}>Loading....</div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWight: 'bold'
  }
};

const { container } = styles;

export default Spinner;
