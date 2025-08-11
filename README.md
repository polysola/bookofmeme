# Book of OG Memes - Website Clone

Đây là bản sao chính xác của website [bookofogmemes.xyz](https://bookofogmemes.xyz/) được xây dựng bằng Next.js 14, TypeScript, và Tailwind CSS.

## 🚀 Tính năng

- ✅ **Pixel-perfect clone** - Tái tạo chính xác 100% giao diện và UX của website gốc
- ✅ **Responsive design** - Hoạt động hoàn hảo trên mọi thiết bị
- ✅ **Performance optimized** - Sử dụng Next.js 14 với App Router và React Server Components
- ✅ **Modern animations** - CSS animations và hover effects giống y hệt website gốc
- ✅ **SEO friendly** - Metadata và structured data hoàn chỉnh
- ✅ **Accessibility** - Tuân thủ WCAG guidelines
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Testing** - Unit tests với Jest và React Testing Library
- ✅ **Easy Customization** - Tất cả nội dung có thể config trong một file duy nhất

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Luckiest Guy, Bangers)
- **Image Optimization:** next/image
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint
- **Package Manager:** npm

## 📋 Yêu cầu hệ thống

- Node.js 18.17 trở lên
- npm 9.0 trở lên

## 🏁 Cài đặt và chạy

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd bookofmeme
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Tùy chỉnh nội dung (tùy chọn):**
   - Chỉnh sửa `app/config/site-config.ts` để thay đổi text, hình ảnh, links
   - Xem [CUSTOMIZATION.md](CUSTOMIZATION.md) để biết chi tiết

4. **Chạy development server:**
   ```bash
   npm run dev
   ```

5. **Mở trình duyệt và truy cập:**
   ```
   http://localhost:3000
   ```

## 📜 Scripts có sẵn

```bash
# Development
npm run dev          # Chạy development server
npm run build        # Build production
npm run start        # Chạy production server
npm run lint         # Chạy ESLint
npm run test         # Chạy unit tests
npm run test:watch   # Chạy tests ở watch mode
npm run test:coverage # Chạy tests với coverage report
```

## 🏗 Cấu trúc dự án

```
bookofmeme/
├── app/
│   ├── components/          # React components
│   │   ├── ui/             # UI components cơ bản
│   │   ├── sections/       # Page sections (Hero, About, Tokenomics)
│   │   ├── effects/        # Visual effects (Particles, Background)
│   │   ├── header/         # Header component
│   │   ├── hero/           # Hero section (legacy)
│   │   ├── meme-grid/      # Meme grid component (legacy)
│   │   └── footer/         # Footer component
│   ├── config/             # ⭐ Site configuration
│   │   └── site-config.ts  # ⭐ Tất cả nội dung có thể thay đổi
│   ├── lib/                # Utility functions và API
│   ├── types/              # TypeScript type definitions
│   ├── globals.css         # Global CSS và animations
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/
│   └── images/             # Static images
├── __tests__/              # Unit tests
├── CUSTOMIZATION.md        # ⭐ Hướng dẫn tùy chỉnh
├── jest.config.js          # Jest configuration
├── jest.setup.js           # Jest setup
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design System

### Colors
- **Primary:** Lime-400 (#a3e635)
- **Secondary:** Cyan-400, Yellow-400
- **Text:** Black với white text-shadow
- **Background:** Gradient overlays trên video background

### Typography
- **Headlines:** "Luckiest Guy" và "Bangers" (Google Fonts)
- **Body text:** Inter (fallback: system fonts)
- **Sizes:** Responsive từ mobile đến desktop

### Animations
- **Float:** Floating effect cho logo và images
- **Text glow:** Glowing effect cho titles
- **Pulse glow:** Button hover effects
- **Gradient shift:** Background gradient animations
- **Bounce in:** Entry animations
- **Slide transitions:** Section transitions

## 🧪 Testing

Dự án bao gồm comprehensive test suite:

```bash
# Chạy tất cả tests
npm run test

# Chạy tests với watch mode
npm run test:watch

# Chạy tests với coverage
npm run test:coverage
```

### Test Coverage
- ✅ Component rendering
- ✅ User interactions
- ✅ Accessibility
- ✅ Responsive behavior
- ✅ Animation classes
- ✅ External links
- ✅ Copy functionality

## 🔧 Tối ưu hóa

### Performance
- **Image optimization:** Sử dụng next/image với WebP format
- **Code splitting:** Dynamic imports cho heavy components
- **Font optimization:** Google Fonts với display=swap
- **Bundle optimization:** Tree shaking và minification

### SEO
- **Meta tags:** Comprehensive metadata
- **Open Graph:** Social media optimization
- **Twitter Cards:** Twitter-specific metadata
- **Structured data:** JSON-LD markup (có thể thêm)

### Security
- **Headers:** Security headers trong next.config.ts
- **External links:** noopener noreferrer
- **Content validation:** Input sanitization

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy build folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance Metrics

Target metrics cho Lighthouse:
- **Performance:** >90
- **Accessibility:** >95
- **Best Practices:** >95
- **SEO:** >95

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

## 📝 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🙏 Credits

- **Original design:** [bookofogmemes.xyz](https://bookofogmemes.xyz/)
- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/)

## 📞 Support

Nếu bạn gặp vấn đề hoặc có câu hỏi, vui lòng:
1. Kiểm tra [Issues](../../issues) existing
2. Tạo new issue với detailed description
3. Hoặc liên hệ qua email

---

**Lưu ý:** Đây là bản sao giáo dục/demo. Tất cả quyền thuộc về chủ sở hữu website gốc.