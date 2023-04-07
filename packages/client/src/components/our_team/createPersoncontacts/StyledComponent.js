import styled from '@emotion/styled';

const CreatePersonContactsStyles = styled('div')`
  max-width: 1200px;
  margin: auto;

  .formBox {
    background: white;
    padding: 16px;
    border-radius: 5px;
    max-width: 200px;
  }

  a {
    text-decoration: none;
    color: #eb1921;
  }

  .photo {
    max-width: 150px;
    max-height: 150px;
    width: 100%;
    border-radius: 18px;
  }

  .uploadButtonDangerous {
    border-color: #eb1921;
    color: rgba(0, 0, 0, 0.6);
    background: white;

    :hover {
      color: black;
      background: white;
    }
  }
  .uploadButtonUsually {
    border-color: rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.6);
    background: white;

    :hover {
      border-color: black;
      color: black;
    }
  }

  .ActionsButton {
    background: #eb1921;
  }
`;

export default CreatePersonContactsStyles;
