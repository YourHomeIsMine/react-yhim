import styled from 'styled-components';

interface RoomImageProps {
  room_images_url: RoomImagesType;
}

const ProductImage = ({ data }: RoomImageProps) => {
  const { room_images_url } = data;
  console.log(data.room_images_url);

  return (
    <ProductImageList>
      <ProductLeftImg alt="room-left-image" src={room_images_url[0]} />
      <ProductRightImg alt="room-left-image" src={room_images_url[1]} />
      <ProductRightImg alt="room-left-image" src={room_images_url[2]} />
      <ProductRightImg alt="room-left-image" src={room_images_url[3]} />
      <ProductRightImg alt="room-left-image" src={room_images_url[4]} />
    </ProductImageList>
  );
};

const ProductImageList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
`;

const ProductLeftImg = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: cover;
  width: 100%;
  height: 500px;
  padding: 5px 5px 5px 0px;
  object-fit: cover;
  filter: brightness(1);

  :hover {
    filter: brightness(0.7);
  }
`;

const ProductRightImg = styled.img`
  width: 100%;
  height: 250px;
  padding: 5px;
  filter: brightness(1);

  :nth-child(3) {
    padding-right: 0;
  }
  :last-child {
    padding-right: 0;
  }

  :hover {
    filter: brightness(0.7);
  }
`;

export default ProductImage;
