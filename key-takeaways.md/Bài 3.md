1. Câu lệnh if , if else, if else if
2. Câu lênh for :
      - for (<Đk khởi tạo> ; <ĐK lặp> ; <ĐK thay đổi>)
3. Convention :
   - snake_case : tất cả các chữ viết thường, cách nhau bằng dâú gach dưới
   - kebab-case: tất cả các chữ viết thường, cách nhau bằng dâú gach ngang
   - camelCase : chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu tiên
   - PascalCase : tất cả các chữ cái đầu viết hoa
4. Console nâng cao: Template literal: dùng dấu ` ${tênbiến}`
     let name = 'Anh';
     console.log ( `Toi la ${name}`);
 5. format code: 
 - mac: option + shift + F 
 - window: alt + shift + F
6. Lệnh undo:
  - git restore --staged <tenfile>: restore file từ staging về working directory
  - git restore --staged .: restore all file từ staging về working directory
  - git reset HEAD~<so_luong_commit>: uncommit về working directory
  - git reset --soft HEAD~<so_luong_commit>: uncommit về staging
  - git commit --amend -m"message": thay đổi nội dung message commit (
  => Việc undo và thay đổi message ở commit thì chỉ thay đổi và undo ở commit nhánh
  1. Git Branching
     - Tạo nhánh: git branch <tennhanh>
     - Kiểm tra nhánh: git branch 
     - Để chuyển nhánh: git checkout/switch <tennhanh>
     - Vừa tạo và chuyển nhánh: git branch -b <tennhanh>
     - Xoá nhánh: git branch -D <tennhanh>
     - Đưa nhánh lên github: git push origin main 
     - Xoá nhánh ol (trên github): git push origin -D tennhanh
 - Note: luôn tạo nhánh từ main để dễ quản lý
 1. Git ignore: giúp chỉ định file và thư mục nào sẽ k đc theo dõi bởi git
    - ignore thư mục: tenthumuc/
    - ignore file cụ thể: tenfile.txt
    - 