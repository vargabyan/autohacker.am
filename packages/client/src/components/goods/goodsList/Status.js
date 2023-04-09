import React from 'react';
import { useTranslation } from 'react-i18next';
import LightTooltip from '../../../common/tooltip/LightTooltipStyles';
import { StatusBoxStyles } from './StyledComponent';

const Status = ({ product }) => {
  const { t } = useTranslation();
  let icon_name = '';

  if (product.status === 'at-auction') {
    icon_name = 'icon-auction';
  }
  if (product.status === 'on-the-way') {
    icon_name = 'icon-delivery';
  }
  if (product.status === 'in-armenia') {
    icon_name = 'icon-weHave';
  }

  return (
    <LightTooltip title={t(`goods.status-button.${product.status}`)}>
      <StatusBoxStyles className={`${icon_name}`} />
    </LightTooltip>
  );
};

export default Status;
