const convertDate = (date: string) => {
  // HJ: useRef 보다 replace + 정규식 패턴을 사용하는게 더 가독성이 좋아보여서 수정했습니다!
  // HJ: match 메소드 결과가 어떻게 나오는지 console.log(match)를 한번 찍어보세요
  const pattern = /^(\d{4})(\d{2})?(\d{2})?$/;
  const match = date.replace('-', '').match(pattern);

  if (match) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, year, month, day] = match;
    if (year && !month) return `${year}-`;
    if (month && !day) return `${year}-${month}-`;
    if (day) return `${year}-${month}-${day}`;
  }

  return date;
};

/* 방법 2
  // HJ: 8자리 다 입력하고 - 붙여주는 방식도 있어요! replace 활용할 수 있습니다.
  const result = date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
  return result;
  */

/* 방법 3
  if (birthRef.current != null) {
  const value = birthRef.current.value.replace(/\D+/g, '');
  
  const numberLength = 8;
  for (let i = 0; i < date.length && i < numberLength; i++) {
    switch (i) {
      case 3:
        result += '-';
        break;
      // case 7:
      //   result += '-';
      //   break;

      default:
        break;
    }
    // result += date[i];
  }

  return result;
  */

export default convertDate;
