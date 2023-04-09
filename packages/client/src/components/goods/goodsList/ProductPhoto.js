import React, { useEffect, useState } from 'react';
import useHttpRequest from '../../../hook/useHttpRequest/useHttpRequest';
import { ProductPhotoStyles } from './StyledComponent';

const ProductPhoto = ({ children, product }) => {
  const [photo, setPhoto] = useState();
  const { responsetData, getRequestFile } = useHttpRequest();

  useEffect(() => {
    getRequestFile('get', `/product/?photo=${product.photoName[0]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.file) {
      setPhoto(responsetData.file);
    }
  }, [responsetData.file]);

  return <ProductPhotoStyles photo={photo}>{children}</ProductPhotoStyles>;
};

export default ProductPhoto;
