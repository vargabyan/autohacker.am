import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const ProductPhotoStyles = styled(Box)`
  background: ${({ photo }) => `url(${photo})`};
  background-color: #00000063;
  background-size: cover;
  background-position: center;
  min-height: 216px;
`;

export const StatusBoxStyles = styled(Box)`
  width: 36px;
  height: 36px;
  font-size: 25px;
  color: black;
  background: #e2e2e2;
  border-radius: 5px;
  opacity: 0.6;
  display: grid;
  align-content: center;
  text-align: center;
  margin-top: 8px;
  margin-right: 8px;
`;

export const ListItemStyle = styled('div')`
  .iconButton {
    color: white;
    margin-top: 83px;
    margin-left: 10px;
  }

  .brand-mode-year {
    color: white;
    margin-top: 82%;
    margin-left: 15px;
    font-weight: 900;
  }

  .learn-more {
    margin-right: 15px;
    background: #eb1921;
  }

  .price {
    color: white;
    margin-left: 15px;
    font-size: 12px;
  }
`;
