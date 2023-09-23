import { Typography } from '@mui/material';
import styled from 'styled-components';

export const TitleInHeaderForDesktop = styled(Typography).attrs({
  variant: 'h5',
  noWrap: true,
  component: 'a',
  sx: {
    mr: 2,
    display: 'flex',
    fontFamily: 'monospace',
    fontWeight: 700,
    color: 'inherit',
    textDecoration: 'none',
  },
})``;
