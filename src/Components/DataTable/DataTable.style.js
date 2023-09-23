import styled from 'styled-components';

export const DataTableRow = styled.tr``;

export const DataTableContainer = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  ${DataTableRow}:nth-child(even) {
    background: #f0f0f0;
  }
`;

export const Key = styled.td`
  border-bottom: 1px solid #ddd;
  opacity: 0.6;
`;

export const Value = styled.td`
  border-bottom: 1px solid #ddd;
  padding-block: 4;
`;
