const gift = document.querySelector("#gift");

const giftScreen = document.querySelector("#giftScreen");

const messageScreen = document.querySelector("#messageScreen");

const closeBtn = document.querySelector("#closeBtn");

const music = document.querySelector("#music");

// =========================
// TẠO HOA RƠI
// =========================

function createFallingFlowers() {
    const flowers = ["🌸", "🌹", "🌷", "💮", "🌺"];

    // Tạo 40 bông hoa
    for (let i = 0; i < 40; i++) {
        const flower = document.createElement("div");

        flower.classList.add("falling-flower");

        // Chọn hoa ngẫu nhiên
        flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

        // Vị trí ngang ngẫu nhiên
        flower.style.left = Math.random() * 100 + "vw";

        // Kích thước ngẫu nhiên
        const size = Math.random() * 20 + 15;

        flower.style.fontSize = size + "px";

        // Thời gian rơi ngẫu nhiên
        const duration = Math.random() * 3 + 3;

        flower.style.animationDuration = duration + "s";

        // Delay ngẫu nhiên
        flower.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(flower);

        // Xóa hoa sau khi rơi xong
        setTimeout(
            () => {
                flower.remove();
            },
            (duration + 2) * 1000,
        );
    }
}

// =========================
// MỞ HỘP QUÀ
// =========================

gift.addEventListener("click", () => {
    // Tạo hoa rơi
    createFallingFlowers();

    // Ẩn hộp quà
    giftScreen.style.display = "none";

    // Hiện lời chúc
    messageScreen.style.display = "block";

    // Phát nhạc
    music.play().catch((error) => {
        console.log("Không thể phát nhạc:", error);
    });
});

// =========================
// ĐÓNG QUÀ
// =========================

closeBtn.addEventListener("click", () => {
    // Dừng nhạc
    music.pause();

    // Đưa nhạc về đầu
    music.currentTime = 0;

    // Ẩn lời chúc
    messageScreen.style.display = "none";

    // Hiện lại hộp quà
    giftScreen.style.display = "block";
});
