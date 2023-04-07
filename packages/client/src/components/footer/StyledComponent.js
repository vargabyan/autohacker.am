import styled from '@emotion/styled';
import map from './images/map.jpg';

const FooterStyle = styled('div')`
  width: 100%;
  background: rgba(0, 0, 0, 0.96);
  color: white;
  font-size: 11px;

  .iconButtons {
    color: #eb1921;
  }

  .icons {
    color: white;
    font-size: 58px;
  }

  .buttonColor {
    background: #eb1921;
  }

  .formBox {
    background: white;
    padding: 16px;
    border-radius: 5px;
    max-width: 200px;
  }

  .backgroundGrid {
    min-height: 250px;

    div {
      background: url(${map});
      height: 100%;
      background-size: cover;
    }
  }

  .contactItemsGrid {
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export default FooterStyle;
