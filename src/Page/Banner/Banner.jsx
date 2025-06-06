import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='mb-36'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-[500px] w-full' src="https://i.postimg.cc/Kv13BMsG/Untitled-Export-PQ5-Te-L6-Ie-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full' src="https://i.postimg.cc/dQhwLqDd/Untitled-Export-Ewewgk-T1p.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full' src="https://i.postimg.cc/htstV2n7/Untitled-Export-t-Rbp-Z9wj-T.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;