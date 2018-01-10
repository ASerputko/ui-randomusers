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
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWight: 'bold'
  }
};

const { container } = styles;

export default Spinner;
