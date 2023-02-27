/* fonts */

import { css } from 'styled-components';

export const font = (size: number, weight: number, lineHeight: number = 0) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${lineHeight}px;
`;