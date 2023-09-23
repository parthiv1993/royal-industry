import { Card, CardContent } from '@mui/material';
import styled from 'styled-components';

export const ContactCard = styled(Card)`
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContactCardContent = styled(CardContent)`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
