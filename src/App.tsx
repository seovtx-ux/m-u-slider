import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import { ShoppingCart, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

// 1. Dữ liệu giả (Mock Data) các sản phẩm - Đã bổ sung label % giảm giá
const products = [
  {
      name: "Tủ Rack 6U D400 Treo Tường (Window/Black)",
      priceOld: "1.500.000 đ",
      priceNew: "1.250.000 đ",
      discount: "-17%",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
      stock: "Còn hàng"
  },
  {
      name: "Tủ Rack 9U D500 Màu Trắng Sữa, Có Bánh Xe",
      priceOld: "2.100.000 đ",
      priceNew: "1.850.000 đ",
      discount: "-12%",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
      stock: "Còn hàng"
  },
  {
      name: "Tủ Rack 42U D800 Cửa Lưới Chuyên Dụng Server",
      priceOld: "8.500.000 đ",
      priceNew: "7.200.000 đ",
      discount: "-15%",
      image: "https://images.unsplash.com/photo-1600267184089-9df2c21966a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
      stock: "Pre-order"
  },
  {
      name: "Thanh nguồn PDU 6 ổ cắm đa năng 19 inch 1U",
      priceOld: "450.000 đ",
      priceNew: "350.000 đ",
      discount: "-22%",
      image: "https://images.unsplash.com/photo-1563208226-0046b025fd5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
      stock: "Còn hàng"
  },
  {
      name: "Khay tủ Rack cố định D400 tải trọng tĩnh 30kg",
      priceOld: "300.000 đ",
      priceNew: "250.000 đ",
      discount: "-17%",
      image: "https://images.unsplash.com/photo-1629851614041-9bd2c2ce0255?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
      stock: "Còn hàng"
  },
  {
      name: "Quạt tản nhiệt nóc tủ 120mm điện áp 220V",
      priceOld: "200.000 đ",
      priceNew: "150.000 đ",
      discount: "-25%",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
      stock: "Còn hàng"
  }
];

// Dữ liệu giả nội dung bài viết
const paragraphs = [
  "Hệ thống mạng doanh nghiệp hiện đại đòi hỏi một cơ sở hạ tầng vững chắc, và tủ Rack chính là \"trái tim\" bảo vệ toàn bộ các thiết bị quan trọng này. Việc lựa chọn một tủ Rack phù hợp không chỉ giúp tối ưu hóa không gian mà còn đảm bảo tản nhiệt tốt, kéo dài tuổi thọ cho server, switch và các thiết bị khác.",
  "Khi triển khai dự án, kỹ thuật viên thường ưu tiên các loại tủ Rack có chất liệu thép SPCC đúc liền khối hoặc được hàn chắc chắn, sơn tĩnh điện chống gỉ. Sự linh hoạt trong việc tháo lắp cửa trước, cửa sau và hai bên hông cũng là một điểm cộng lớn giúp quá trình bảo trì diễn ra thuận lợi hơn.",
  "Bên cạnh tủ Rack, việc trang bị các phụ kiện đi kèm như khay cố định, khay trượt, thanh quản lý cáp, và đặc biệt là thanh nguồn PDU (Power Distribution Unit) chuyên dụng là không thể thiếu. PDU giúp phân phối điện năng ổn định và an toàn, tích hợp các bộ CB chống chập cháy.",
  "Để tối ưu cho các trung tâm dữ liệu (Data Center), hệ thống làm mát tản nhiệt cực kỳ quan trọng. Quạt tản nhiệt gắn trên nóc tủ Rack phải có công suất đủ lớn, hút gió nóng từ trong đẩy ra ngoài, kết hợp với sàn nâng để lưu thông luồng khí lạnh một cách tối ưu nhất.",
  "Như vậy, chúng ta đã đi qua các thành phần cơ bản của một hệ thống cáp mạng vật lý. Một hệ thống tốt không chỉ giải quyết được bài toán hiện tại mà còn phải sẵn sàng để mở rộng (scale-up) trong tương lai từ 5 đến 10 năm tới mà không cần đập đi dọn lại từ đầu.",
  "Trong thực tế, đã có rất nhiều trường hợp vì tiết kiệm chi phí đầu tư hạ tầng ban đầu mà các doanh nghiệp phải gánh chịu hậu quả nặng nề khi hệ thống bị sập do quá nhiệt hoặc cháy chập. Điều này làm gián đoạn hệ thống mạng nội bộ, ảnh hưởng trực tiếp đến hoạt động kinh doanh và bảo mật dữ liệu.",
  "Việc quản lý cáp mạng bên trong tủ Rack cũng cần theo một quy chuẩn nhất định. Các sợi cáp quang, cáp xoắn đôi (Cat6, Cat6A) nên được đi trong các máng cáp xẻ rãnh, phân màu và đánh dấu (label) rõ ràng 2 đầu để kỹ sư dễ dàng xử lý khi có sự cố mạng.",
  "Tóm lại, đầu tư bài bản cho hệ thống tủ Rack và thiết bị vật lý là bước đi thông minh. Đừng quên lựa chọn các nhà cung cấp uy tín, có chế độ bảo hành và hỗ trợ lắp đặt chuyên nghiệp để đảm bảo tiến độ cũng như chất lượng của toàn bộ dự án mạng."
];

// Component Slider Sản Phẩm Mới (Thiết kế cao cấp)
function ProductSlider() {
  return (
    <div className="relative z-10 px-0 sm:px-2">
      <Swiper
        modules={[Navigation, Pagination, EffectCreative]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 1.5, spaceBetween: 20 },
          640: { slidesPerView: 2.2, spaceBetween: 24 },
          768: { slidesPerView: 2.5, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="pb-16 pt-4 px-2"
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <div className="group bg-white rounded-2xl flex flex-col h-full hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 border border-slate-100 overflow-hidden relative">
              
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                <Zap size={12} className="fill-white" />
                {product.discount}
              </div>

              {/* Image Area */}
              <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden flex items-center justify-center p-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out" 
                />
              </div>
              
              {/* Content Area */}
              <div className="p-5 flex flex-col flex-grow bg-white">
                
                {/* Stock Status */}
                <div className="flex justify-start mb-2">
                  <span className="text-xs font-medium text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 size={12} />
                    {product.stock}
                  </span>
                </div>

                <a href={product.link} className="font-semibold text-slate-800 text-[15px] leading-snug line-clamp-2 mb-4 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </a>
                
                <div className="mt-auto flex items-end justify-between mb-5">
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-400 line-through mb-1">{product.priceOld}</span>
                    <span className="text-xl font-bold text-slate-900">{product.priceNew}</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <a href={product.link} className="w-full relative overflow-hidden group/btn bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300">
                  <ShoppingCart size={18} className="transition-transform group-hover/btn:-rotate-12" />
                  <span>Mua ngay</span>
                  <ArrowRight size={16} className="absolute right-4 opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default function App() {
  // 2. Thuật toán tìm vị trí chính giữa của bài viết
  const middleIndex = Math.floor(paragraphs.length / 2) - 1;

  return (
    <div className="font-sans antialiased text-slate-700 bg-slate-50 min-h-screen pb-20">
      {/* Header giả lập */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-black tracking-tighter text-2xl text-blue-600">VTX.</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900">Sản phẩm</a>
            <a href="#" className="text-slate-900">Tin tức & Đánh giá</a>
            <a href="#" className="hover:text-slate-900">Dự án</a>
          </nav>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-5 sm:px-8 mt-12 bg-white sm:rounded-3xl sm:shadow-sm sm:border border-slate-100 py-10 sm:py-16">
        <header className="mb-10 text-center">
          <div className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">Đánh giá chuyên sâu</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Phân Tích Chi Tiết Hệ Thống Tủ Rack & Thiết Bị Viễn Thông Chuyên Môn
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">Chuyên gia hệ thống</span> &bull; 
            <span>Cập nhật: 15/05/2026</span>
          </div>
        </header>
        
        <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed text-justify">
          {paragraphs.map((paragraph, index) => (
              <div key={index}>
                {/* Render đoạn văn bản thông thường, làm chữ to đoạn đầu tiên */}
                <p className={index === 0 ? "text-xl text-slate-700 font-medium tracking-tight mb-8" : "mb-6"}>
                  {paragraph}
                </p>
                
                {/* Nếu đây là vị trí chính giữa, tiến hành render khối Block Slider tuyệt đẹp */}
                {index === middleIndex && (
                  <div className="my-14 -mx-5 sm:-mx-12 py-12 px-5 sm:px-12 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
                    {/* Background decor */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none transform -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none transform translate-y-1/2 -translate-x-1/2"></div>
                    
                    <div className="relative flex flex-col sm:flex-row items-center justify-between mb-8 px-2">
                       <div>
                         <div className="flex items-center gap-3 mb-2">
                           <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                           <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                             Giải Pháp Khuyến Nghị
                           </h3>
                         </div>
                         <p className="text-slate-500 text-sm md:text-base ml-4.5">
                           Các thiết bị mạng & phụ kiện bán chạy nhất cho trung tâm dữ liệu.
                         </p>
                       </div>
                       <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                         Xem tất cả <ArrowRight size={16} />
                       </a>
                    </div>

                    <ProductSlider />
                  </div>
                )}
              </div>
          ))}
        </div>
      </article>
    </div>
  );
}
