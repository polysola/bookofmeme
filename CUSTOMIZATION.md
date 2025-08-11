# 🎨 Hướng dẫn tùy chỉnh Website

## 📝 Thay đổi Text và Nội dung

Tất cả nội dung có thể thay đổi trong file `app/config/site-config.ts`:

### 1. Thay đổi tiêu đề chính
```typescript
content: {
  hero: {
    title1: "THE BOOK OF",    // Dòng tiêu đề đầu
    title2: "OG MEMES",       // Dòng tiêu đề thứ hai
    buttonText: "BUY!"        // Text button chính
  }
}
```

### 2. Thay đổi section About
```typescript
about: {
  title1: "WHAT IS",                    // Tiêu đề phần 1
  title2: "BOOK OF OG MEMES?",         // Tiêu đề phần 2  
  description: "Nội dung mô tả...",    // Đoạn mô tả chính
  buttonText: "BUY NOW"                // Text button
}
```

### 3. Thay đổi Tokenomics
```typescript
tokenomics: {
  title: "TOKENOMICS",           // Tiêu đề section
  tokenSymbol: "$BOOM",          // Ký hiệu token
  supply: {
    amount: "1 BILLION",         // Số lượng token
    label: "TOKEN SUPPLY"        // Label
  },
  tax: {
    rate: "0%",                  // Tỷ lệ tax
    label: "BUY/SELL TAX:"       // Label tax
  },
  finalButtonText: "GET $BOOM NOW!"  // Button cuối
}
```

## 🖼️ Thay đổi Hình ảnh

### 1. Thay đổi hình ảnh từ URL
```typescript
images: {
  logo: "https://your-domain.com/logo.png",
  heroImage: "https://your-domain.com/hero.jpg",
  backgroundVideo: {
    desktop: "https://your-domain.com/bg-desktop.mp4",
    mobile: "https://your-domain.com/bg-mobile.mp4"
  }
}
```

### 2. Sử dụng hình ảnh local
1. Thêm hình vào thư mục `public/images/`
2. Cập nhật config:
```typescript
images: {
  logo: "/images/my-logo.png",
  heroImage: "/images/my-hero.jpg"
}
```

### 3. Tắt background video
```typescript
animations: {
  enableBackgroundVideo: false  // Tắt video, chỉ dùng gradient
}
```

## 🔗 Thay đổi Links

### 1. Links chính
```typescript
urls: {
  website: "https://your-website.com",
  buyLink: "https://your-swap-link.com",
  contractAddress: "Your-Contract-Address-Here"
}
```

### 2. Social Media Links
```typescript
socialLinks: [
  {
    name: "Twitter",
    href: "https://twitter.com/your-handle",
    icon: "https://your-domain.com/twitter-icon.svg"
  },
  // Thêm hoặc xóa social links
]
```

## 🎨 Thay đổi Màu sắc

```typescript
theme: {
  primary: "#a3e635",     // Màu chính (lime-400)
  secondary: "#06b6d4",   // Màu phụ (cyan-500)
  accent: "#eab308",      // Màu nhấn (yellow-500)
  background: "#000000",  // Màu nền
  text: "#ffffff"         // Màu chữ
}
```

## ⚙️ Tùy chỉnh Animations

```typescript
animations: {
  enableFloatingParticles: true,    // Bật/tắt particles bay
  particleCount: 20,                // Số lượng particles
  enableBackgroundVideo: true,      // Bật/tắt video nền
  enableHoverEffects: true,         // Bật/tắt hover effects
  enableLoadingScreen: true,        // Bật/tắt loading screen
  loadingDuration: 3000             // Thời gian loading (ms)
}
```

## 📱 Ví dụ Customization hoàn chỉnh

Tạo một website hoàn toàn mới:

```typescript
export const siteConfig = {
  name: "MY AWESOME PROJECT",
  title: "MY AWESOME PROJECT", 
  subtitle: "CRYPTO TOKEN",
  description: "This is my awesome crypto project description...",
  
  urls: {
    website: "https://myproject.com",
    buyLink: "https://pancakeswap.finance/swap",
    contractAddress: "0x123456789..."
  },

  images: {
    logo: "/images/my-logo.png",
    heroImage: "/images/my-hero.jpg",
    backgroundVideo: {
      desktop: "/videos/bg-desktop.mp4",
      mobile: "/videos/bg-mobile.mp4"
    }
  },

  content: {
    hero: {
      title1: "MY AWESOME",
      title2: "CRYPTO PROJECT",
      buttonText: "BUY NOW!"
    },
    
    about: {
      title1: "WHAT IS",
      title2: "MY PROJECT?",
      description: "My project is the next big thing in crypto...",
      buttonText: "GET TOKENS"
    },

    tokenomics: {
      title: "TOKENOMICS",
      tokenSymbol: "$MYTOKEN",
      supply: {
        amount: "100 MILLION",
        label: "TOTAL SUPPLY"
      },
      tax: {
        rate: "5%",
        label: "TRANSACTION FEE:"
      },
      features: [
        {
          title: "LIQUIDITY",
          value: "LOCKED",
          bgColor: "bg-blue-100/90",
          textColor: "text-blue-600"
        }
      ],
      finalButtonText: "GET $MYTOKEN NOW!"
    }
  }
}
```

## 🚀 Sau khi thay đổi

1. Save file `app/config/site-config.ts`
2. Website sẽ tự động cập nhật (hot reload)
3. Kiểm tra kết quả tại `http://localhost:3000`

## 💡 Tips

- **Backup config cũ** trước khi thay đổi lớn
- **Test từng thay đổi nhỏ** để dễ debug
- **Sử dụng hình ảnh tối ưu** (WebP, kích thước phù hợp)
- **Kiểm tra responsive** trên mobile và desktop
- **Validate links** trước khi deploy

## 🆘 Troubleshooting

### Hình ảnh không hiển thị
- Kiểm tra đường dẫn file
- Đảm bảo file tồn tại trong `public/images/`
- Kiểm tra URL external có hoạt động

### Animation không hoạt động
- Kiểm tra `animations.enableXXX` trong config
- Clear browser cache
- Kiểm tra console errors

### Links không hoạt động
- Kiểm tra URL format đúng (bao gồm `https://`)
- Test links manually trước khi config
