type ProductDetailType = {
  name: string;
  description: string;
  district: string;
  neighberhood: string;
  price: number;
  address: string;
  guests: number;
  beds: number;
  bedrooms: number;
  baths: number;
  latitute: number;
  longitute: number;
  host: string;
  host_image: string;
  host_created: string;
  room_images_url: string[];
  check_in: string[];
  room_amenities: AmenityType[];
  check_in_time: string;
  check_out_time: string;
  house_rules: NoticeType[];
  category: string;
};

type HostDetailType = {
  host_image: string;
  host: string;
  host_created: string;
};

type AmenityType = {
  amenity_id: number;
  amenity_name: string;
  amenity_icon_url: string;
};

type NoticeType = { room_rules: string; rules_icon_url: string };
