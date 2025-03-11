const links = [
        "https://www.nhathuocankhang.com/ban-tin-suc-khoe/15-thoi-quen-tot-cho-suc-khoe-moi-ngay-khong-the-bo-qua-1469128",
        "https://tuoitre.vn/co-gi-o-mang-den-thien-duong-hong-ma-ca-ngan-du-khach-ve-tham-20231231183607197.htm",
        "https://thegioilamvuon.com/chau-nhua-trong-cay/?srsltid=AfmBOopeDxgKPe1sqAvpPcJPGXg8hMlL_g9H8rOcFFul_AMRDFX7ykW9",
        "https://tinder.com/",
        "https://bet888vn.net/vn?utm_source=seo&utm_medium=auto&utm_campaign=giz-ads-1",
        "https://nhipcaudautu.vn/phong-cach-song/di-tim-gia-tri-cho-cong-dong-lgbt-3357185/",
        "https://www.penguin.co.uk/series/EVLC/everymans-library-classics",
        "https://genius.com/Lola-young-messy-lyrics",
        "https://www.crescentmall.com.vn/tenants/ovs",
        "https://archive.org/details/the-pillow-book/page/n4/mode/1up",
];

// Số lượng dấu ❌ muốn tạo (ví dụ 20)
const TOTAL_X = 100;

// Hàm tạo một dấu ❌ rơi từ trên xuống
function createFallingX() {
  // Tạo phần tử dấu ❌
  const xElement = document.createElement("div");
  xElement.textContent = "❌";
  xElement.classList.add("x-symbol");

  // Vị trí ngẫu nhiên theo chiều ngang
  let xPos = Math.random() * window.innerWidth;
  // Bắt đầu từ phía trên màn hình (có thể đặt -50 để ẩn trước khi rơi vào màn hình)
  let yPos = -50;

  // Tốc độ rơi (pixel mỗi khung hình)
  let fallSpeed = 2 + Math.random() * 3; // 2 -> 5
  // Tốc độ di chuyển ngang (có thể = 0 nếu chỉ muốn rơi thẳng)
  let horizontalSpeed = (Math.random() - 0.5) * 2; // -1 -> 1

  // Đặt vị trí ban đầu
  xElement.style.left = `${xPos}px`;
  xElement.style.top = `${yPos}px`;

  // Thêm vào body
  document.body.appendChild(xElement);

  // Mỗi lần animation frame, cập nhật vị trí
  function fall() {
    yPos += fallSpeed;
    xPos += horizontalSpeed;

    // Nếu chạm biên ngang, đổi hướng
    if (xPos < 0 || xPos > window.innerWidth - 40) {
      horizontalSpeed *= -1;
    }

    // Cập nhật style
    xElement.style.left = `${xPos}px`;
    xElement.style.top = `${yPos}px`;

    // Nếu rơi quá khỏi màn hình, xóa dấu ❌
    if (yPos > window.innerHeight) {
      xElement.remove();
      return;
    }

    // Tiếp tục requestAnimationFrame
    requestAnimationFrame(fall);
  }
  // Gọi hàm rơi
  fall();

  // Sự kiện click vào dấu ❌
  xElement.addEventListener("click", () => {
    openRandomLinks(3); // Luôn luôn mở 3 link
    xElement.remove();  // Xóa dấu ❌ sau khi click
  });
}

// Hàm mở 3 link ngẫu nhiên
function openRandomLinks(count) {
  // Copy mảng link và xáo trộn
  const shuffledLinks = [...links].sort(() => Math.random() - 0.5);
  for (let i = 0; i < count; i++) {
    window.open(shuffledLinks[i], "_blank");
  }
}

// Tạo nhiều dấu ❌ rơi
for (let i = 0; i < TOTAL_X; i++) {
  createFallingX();
}
