import styled from 'styled-components';
import { colors, flex, font } from '../../../../styles';

const PersonOption = () => {
  return (
    <OptionContainer>
      <div>
        <Count>인원</Count>
        <Guest>게스트 1명</Guest>
      </div>
      <PersonIcon
        alt="arrow"
        src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
      />
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  ${flex('space-between', 'center')};
  padding: 15px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const PersonIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const Count = styled.div`
  padding: 10px 0px 10px 0px;
  margin-bottom: 5px;
  ${font(13, 500)};
`;

const Guest = styled.div`
  padding: 10px 0px 10px 0px;
  ${font(20, 500)};
`;

export default PersonOption;
