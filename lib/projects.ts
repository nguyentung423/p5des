export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  timeline: string;
  tags: string[];
  heroImage: string;
  images: string[];
  context: string;
  problem: string;
  constraints: string[];
  solution: string[];
  outcomes: string[];
  metricHook: string;
  nextSlug: string;
}

export const projects: Project[] = [
  {
    slug: "orbit-financial",
    title: "Orbit Financial",
    subtitle: "Tái thiết kế luồng thanh toán ứng dụng Tài chính",
    year: "2024",
    role: "Lead Product Designer",
    timeline: "12 weeks",
    tags: ["2024", "Mobile", "Tài chính"],
    heroImage: "/assets/orbit/hero.svg",
    images: ["/assets/orbit/screen-1.svg", "/assets/orbit/screen-2.svg"],
    context:
      "Orbit là nền tảng thanh toán B2B phục vụ các doanh nghiệp quy mô vừa. Luồng thanh toán trên di động (mobile checkout) đã không được cập nhật từ khi ra mắt, và dữ liệu phân tích cho thấy sự ma sát (friction) lớn ở những bước chuyển đổi then chốt.",
    problem:
      "Tỷ lệ bỏ ngang ở bước thanh toán (abandonment rate) đang ở mức báo động. Quy trình hiện tại dài tới 6 bước, cấu trúc phí bị chìm khuất trong các dòng chữ nhỏ (fine print), và thanh tiến trình không phản hồi trạng thái thực tế. Lượng ticket hỗ trợ liên quan đến 'phí bất ngờ' tăng vọt hàng tháng.",
    constraints: [
      "Tuân thủ nghiêm ngặt các quy định pháp lý về công bố minh bạch cấu trúc phí",
      "Tài nguyên kỹ thuật giới hạn trong 3 sprint để triển khai hoàn chỉnh",
      "Phải duy trì khả năng tương thích ngược với cấu trúc API hiện tại",
    ],
    solution: [
      "Tinh gọn quy trình từ 6 bước xuống 3 màn hình tập trung với thanh tiến trình rõ ràng",
      "Thiết kế hiển thị thông tin lũy tiến (Progressive Disclosure) cho phí—tổng quan hiển thị, chi tiết có thể mở rộng",
      "Tích hợp máy tính phí thời gian thực cập nhật khi người dùng thay đổi số tiền",
      "Tạo thứ bậc thị giác dẫn dắt chuyển động mắt: số tiền → phí → xác nhận",
      "Bổ sung các xác nhận vi mô ở mỗi bước để giảm tải nhận thức",
    ],
    outcomes: [
      "Giảm ~20% tỷ lệ bỏ đơn hàng tại bước thanh toán (dữ liệu mô phỏng)",
      "Thời gian hoàn thành trung bình giảm từ 4m 12s xuống 2m 38s",
      "Giảm 35% lượng ticket hỗ trợ liên quan đến phí dịch vụ",
      "Chỉ số NPS sau khi ra mắt tăng từ 32 lên 47",
    ],
    metricHook: "Giảm 20% tỷ lệ bỏ đơn (dữ liệu mô phỏng)",
    nextSlug: "mono-ecom",
  },
  {
    slug: "mono-ecom",
    title: "Mono E-com",
    subtitle: "B2C Design System & Component Library",
    year: "2023",
    role: "Design Systems Lead",
    timeline: "16 weeks",
    tags: ["Design System", "E-commerce", "Documentation"],
    heroImage: "/assets/mono/hero.svg",
    images: ["/assets/mono/screen-1.svg", "/assets/mono/screen-2.svg"],
    context:
      "Mono là nền tảng thương mại điện tử đang phát triển với 12 team sản phẩm triển khai tính năng độc lập. Sự không nhất quán về thị giác đang len lỏi vào hệ thống, và các designer dành 30% thời gian để tái tạo các component đã tồn tại ở nơi khác.",
    problem:
      "Không có nguồn thông tin thống nhất (single source of truth). Mỗi squad duy trì các biến thể button, card style và quy ước spacing riêng biệt. Quy trình bàn giao code-to-design liên quan đến các tài liệu đặc tả dài dòng đã lỗi thời khi engineering bắt đầu làm việc.",
    constraints: [
      "Hệ thống phải hỗ trợ đồng thời cả ứng dụng web và React Native",
      "Không được gián đoạn công việc tính năng đang tiến hành trong quá trình triển khai",
      "Ngân sách công cụ thiết kế hạn chế—không có gói Figma enterprise",
    ],
    solution: [
      "Kiểm toán component hiện tại trên tất cả sản phẩm, xác định 47 biến thể button độc đáo → tinh gọn xuống 6",
      "Xây dựng kiến trúc semantic token: màu sắc, khoảng cách, quy mô typography với quy ước đặt tên rõ ràng",
      "Tạo thư viện component Figma với auto-layout và variants, đồng bộ với Storybook",
      "Viết hướng dẫn đóng góp: cách đề xuất component mới, quy trình loại bỏ (deprecation)",
      "Thiết lập 'giờ hành chính' hỗ trợ áp dụng—slot 30 phút hàng tuần cho câu hỏi của squad",
    ],
    outcomes: [
      "UI inconsistency bugs reduced by 60% in first quarter post-launch",
      "Designer-to-developer handoff time cut by approximately 40%",
      "New feature shipping cycles shortened by 2-3 days on average",
      "Component reuse rate increased from 23% to 71%",
    ],
    metricHook: "Giảm lỗi UI và tăng tốc quy trình shipping (dữ liệu mô phỏng)",
    nextSlug: "vessel-architecture",
  },
  {
    slug: "vessel-architecture",
    title: "Vessel Architecture",
    subtitle: "Editorial Portfolio Redesign",
    year: "2023",
    role: "Product Designer",
    timeline: "8 weeks",
    tags: ["Editorial", "Portfolio", "Brand"],
    heroImage: "/assets/vessel/hero.svg",
    images: ["/assets/vessel/screen-1.svg", "/assets/vessel/screen-2.svg"],
    context:
      "Vessel là công ty kiến trúc boutique chuyên về các dự án nhà ở. Website hiện tại của họ chỉ là một bộ sưu tập hình ảnh với ngữ cảnh tối thiểu—những tác phẩm đẹp bị chìm khuất dưới kiến trúc thông tin kém.",
    problem:
      "Khách hàng tiềm năng không thể hiểu quy trình của Vessel hoặc phân biệt các dự án theo loại hình. Biểu mẫu liên hệ nhận được nhiều yêu cầu không đủ tiêu chuẩn: sai phạm vi ngân sách, phạm vi dự án không tương thích, timeline không rõ ràng. Các đối tác dành hàng giờ để lọc leads thủ công.",
    constraints: [
      "Nội dung phải mang cảm giác biên tập (editorial), không phải doanh nghiệp—đây là một công ty sáng tạo",
      "Các chủ sở hữu công ty kháng cự ngôn ngữ 'bán hàng' hoặc CTA nổi bật",
      "Phải hoạt động mà không cần quản lý nội dung chuyên dụng—cập nhật diễn ra hai lần mỗi năm",
    ],
    solution: [
      "Thiết kế phân loại dự án: Nhà ở / Thương mại / Nội thất với kho lưu trữ có thể lọc",
      "Tạo trang dự án dạng biên tập: cấu trúc tường thuật với bối cảnh → thách thức → phương pháp → kết quả",
      "Định vị CTA liên hệ theo ngữ cảnh—sau câu chuyện dự án, không làm gián đoạn chúng",
      "Xây dựng phần 'Vessel có phù hợp với bạn?' giải quyết kỳ vọng ngân sách một cách minh bạch",
      "Giới thiệu phân loại yêu cầu tinh tế: loại dự án, timeline, phạm vi ngân sách trong biểu mẫu",
    ],
    outcomes: [
      "Qualified inquiry rate increased by ~15% (simulated)",
      "Average time on project pages increased from 45s to 2m 10s",
      "Unqualified inquiries (wrong scope/budget) dropped by 40%",
      "Partners report spending 5 fewer hours weekly on lead qualification",
    ],
    metricHook: "Tăng 15% khách hàng tiềm năng chất lượng (dữ liệu mô phỏng)",
    nextSlug: "orbit-financial",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
