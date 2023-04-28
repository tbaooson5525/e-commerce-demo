// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper";

const bannerOptions = [
  "https://etyyxegspipinzrbteoi.supabase.co/storage/v1/object/public/e-commerce/banner/banner1.webp?t=2023-04-27T07%3A20%3A44.650Z",
  "https://etyyxegspipinzrbteoi.supabase.co/storage/v1/object/public/e-commerce/banner/banner2.webp?t=2023-04-27T07%3A20%3A57.420Z",
  "https://etyyxegspipinzrbteoi.supabase.co/storage/v1/object/public/e-commerce/banner/banner3.webp?t=2023-04-27T07%3A21%3A05.001Z",
];

export default function Banner() {
  return (
    <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="banner-swiper"
        >
          {bannerOptions.map((item) => (
            <SwiperSlide key={item}>
              <img src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
}
