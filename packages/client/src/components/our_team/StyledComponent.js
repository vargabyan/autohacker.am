import { styled } from '@mui/material';

const EmployeeContactDetailsStyles = styled('div')`
  font-size: 14px;

  a {
    text-decoration: none;
    color: #eb1921;
  }

  .header {
    font-size: 20px;
    font-weight: 900;
  }

  .iconButtons {
    color: #eb1921;
  }

  .photoGrid {
    display: grid;
    justify-items: ${(props) => (!props.matches ? 'end' : 'start')};
  }

  .photo {
    width: 100%;
    max-height: 150px;
    max-width: 150px;
    border-radius: 18px;
  }

  .fab {
    background: #eb1921;
  }
`;

export default EmployeeContactDetailsStyles;
