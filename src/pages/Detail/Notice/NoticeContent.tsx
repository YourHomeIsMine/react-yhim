import styled from 'styled-components';
import { colors, font, flex } from 'styles';

interface NoticeContentProps {
  data: NoticeType;
}

const NoticeContent = ({ data }: NoticeContentProps) => {
  const { room_rules, rules_icon_url } = data;

  return (
    <Container>
      <RuleList>
        <RuleImg alt="rule_icon" src={rules_icon_url} />
        <RuleContent>{room_rules}</RuleContent>
      </RuleList>
    </Container>
  );
};

const Container = styled.div`
  margin: 15px 0px;
`;

const RuleList = styled.div`
  ${flex('', 'center')}
  margin: 10px 0px;
`;
const RuleImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

const RuleContent = styled.div`
  ${font(18, 500, 22)};
  color: ${colors.GRAY};
`;

export default NoticeContent;
