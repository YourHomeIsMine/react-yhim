/* types */

import { css } from 'styled-components';

type IJustifyContent =
  | ''
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

type IAlignItems = '' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';

type IFlexDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse';

/* flex */

const flex = (justify: IJustifyContent, align: IAlignItems, direction: IFlexDirection = 'row') => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify}; ;
`;

export default flex;

