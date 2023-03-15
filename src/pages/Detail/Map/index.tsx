import React from 'react';
import styled from 'styled-components';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { colors, font } from 'styles';

interface ProductDetailProps {
  detailList: ProductDetailType;
}

const Map = ({ detailList }: ProductDetailProps) => {
  const { latitute, longitute } = detailList;

  const containerStyle = {
    width: '1440px',
    height: '500px',
  };

  const center = {
    lat: latitute,
    lng: longitute,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAP_KEY}`,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Container>
      <Title>호스팅 지역</Title>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF
          position={center}
          icon={{
            url: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
            scale: 1,
            scaledSize: new google.maps.Size(70, 70),
          }}
        />
      </GoogleMap>
    </Container>
  ) : (
    <div>Error</div>
  );
};

const Container = styled.div`
  margin: 20px 0px;
  padding: 30px 0px 50px 0px;
  border-top: 1px solid ${colors.MEDIUMGRAY};
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
`;

const Title = styled.div`
  padding: 10px 0px;
  ${font(20, 500)};
  margin-bottom: 20px;
  color: ${colors.BLACK};
`;

export default React.memo(Map);
