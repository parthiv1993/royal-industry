import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { DataTableContainer, DataTableRow, Key, Value } from './DataTable.style';

const DataTable = ({ data }) => {
  return (
    <>
      <DataTableContainer>
        <tbody>
          {data.map((row, index) => (
            <DataTableRow key={index}>
              <Key>
                <Typography variant='body1'>{row.key}</Typography>
              </Key>
              <Value>
                <Typography variant='h6'>{row.value}</Typography>
              </Value>
            </DataTableRow>
          ))}
        </tbody>
      </DataTableContainer>
    </>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

DataTable.defaultProps = {
  data: [],
};

export default DataTable;
