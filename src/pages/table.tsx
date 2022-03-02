import React, { useContext } from 'react';
import SheetsContext from '../store/SheetsContext';

const Table = (): JSX.Element => {
  const sheetCtx = useContext(SheetsContext);

  return (
    <>
      <p>{sheetCtx.locationName}</p>
      <p>{sheetCtx.calls}</p>
      <p>{sheetCtx.operation}</p>
    </>
  );
};

export default Table;
