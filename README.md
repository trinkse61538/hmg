# HMG Portfolio Website

Website portfolio tĩnh dành cho HMG, được tối ưu để triển khai trên GitHub Pages tại `hmg.khaitringuyen.com`.

## Cách đưa website lên GitHub

1. Giải nén và đưa toàn bộ tệp trong thư mục này vào một repository GitHub mới.
2. Trong repository, mở **Settings → Pages** và chọn **Source: GitHub Actions**.
3. Push lên nhánh `main`. Quy trình có sẵn sẽ tự build và xuất bản website.

## Cấu hình tên miền

Tệp `public/CNAME` đã đặt sẵn `hmg.khaitringuyen.com`.

Tại nơi quản lý DNS của `khaitringuyen.com`, tạo bản ghi:

- Type: `CNAME`
- Name/Host: `hmg`
- Target/Value: `<tên-tài-khoản-github>.github.io`

Sau khi DNS cập nhật, quay lại **Settings → Pages**, xác nhận custom domain và bật **Enforce HTTPS**.

## Chạy thử trên máy

```bash
npm install
npm run dev
```

## Build bản tĩnh

```bash
npm run build:github
```

Kết quả nằm trong thư mục `out/`.
