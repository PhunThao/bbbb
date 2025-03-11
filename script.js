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

function createX() {
    const x = document.createElement("div");
    x.textContent = "❌";
    x.classList.add("x-symbol");
    document.body.appendChild(x);
    
    let xPos = Math.random() * window.innerWidth;
    let yPos = Math.random() * window.innerHeight;
    let speedX = (Math.random() - 0.5) * 4;
    let speedY = (Math.random() - 0.5) * 4;
    
    x.style.left = `${xPos}px`;
    x.style.top = `${yPos}px`;
    
    function move() {
        xPos += speedX;
        yPos += speedY;
        
        if (xPos <= 0 || xPos >= window.innerWidth - 50) speedX *= -1;
        if (yPos <= 0 || yPos >= window.innerHeight - 50) speedY *= -1;
        
        x.style.left = `${xPos}px`;
        x.style.top = `${yPos}px`;
        
        requestAnimationFrame(move);
    }
    move();

    x.addEventListener("click", () => {
        if (Math.random() < 0.5) {
            openRandomLinks(3);
        }
        x.remove();
    });
}

function openRandomLinks(count) {
    const shuffledLinks = links.sort(() => 0.5 - Math.random());
    for (let i = 0; i < count; i++) {
        window.open(shuffledLinks[i], "_blank");
    }
}

for (let i = 0; i < 5; i++) {
    createX();
}
