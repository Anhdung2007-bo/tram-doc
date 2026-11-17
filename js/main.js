// ==================== DỮ LIỆU KHỞI TẠO BAN ĐẦU ====================
const DEFAULT_BOOKS = [
  {
    id: 1,
    title: "Cây Cam Ngọt Của Tôi",
    author: "José Mauro de Vasconcelos",
    category: "Văn học kinh điển",
    theme: "amber",
    desc: "Câu chuyện cảm động về cậu bé Zezé thông minh, nhạy cảm lớn lên trong xóm nghèo Brazil và tình bạn kỳ diệu với cây cam ngọt nhỏ sau vườn.",
    reviews: [
      { user: "Minh Anh (ĐH KHXH&NV)", stars: 5, text: "Một tác phẩm trong trẻo nhưng lấy đi nhiều nước mắt nhất. Zezé dạy ta cách yêu thương ngay cả khi cuộc đời khắc nghiệt.", date: "12/11/2026" },
      { user: "Đỗ Công Bình", stars: 5, text: "Văn phong mộc mạc, đọc xong vẫn còn dư âm mãi về tình cảm giữa Zezé và ông Bồ.", date: "14/11/2026" },
      { user: "Thu Hà", stars: 5, text: "Cuốn sách gối đầu giường của mình suốt những năm đại học.", date: "15/11/2026" }
    ]
  },
  {
    id: 2,
    title: "Atomic Habits — Thay Đổi Tí Hon",
    author: "James Clear",
    category: "Kỹ năng & Tư duy",
    theme: "emerald",
    desc: "Cẩm nang thực tế giúp sinh viên và người đi làm xây dựng thói quen tốt, loại bỏ thói quen xấu thông qua những cải tiến 1% mỗi ngày.",
    reviews: [
      { user: "Phan Tấn Phát", stars: 5, text: "Áp dụng quy tắc 2 phút giúp mình duy trì việc học code và đọc sách mỗi tối cực kỳ hiệu quả.", date: "10/11/2026" },
      { user: "Quốc Bảo", stars: 4, text: "Nhiều ví dụ thực tiễn, dễ áp dụng ngay vào lịch sinh hoạt.", date: "13/11/2026" }
    ]
  },
  {
    id: 3,
    title: "Tư Duy Nhanh Và Chậm",
    author: "Daniel Kahneman",
    category: "Tâm lý học",
    theme: "navy",
    desc: "Công trình kinh điển giải mã hai hệ thống vận hành của bộ não con người và các thiên kiến nhận thức ảnh hưởng đến quyết định hàng ngày.",
    reviews: [
      { user: "Hoàng Anh Tuấn Cương", stars: 5, text: "Sách hơi dày nhưng kiến thức tâm lý học hành vi cực kỳ sâu sắc và đáng suy ngẫm.", date: "08/11/2026" },
      { user: "Lan Phương", stars: 5, text: "Giúp mình hiểu vì sao con người hay đưa ra quyết định cảm tính.", date: "11/11/2026" }
    ]
  },
  {
    id: 4,
    title: "Sapiens: Lược Sử Loài Người",
    author: "Yuval Noah Harari",
    category: "Khoa học & Lịch sử",
    theme: "burgundy",
    desc: "Hành trình tiến hóa của loài Homo sapiens từ thời kỳ đồ đá đến kỷ nguyên công nghệ hiện đại với góc nhìn lịch sử - nhân học lôi cuốn.",
    reviews: [
      { user: "Phạm Duy Hưng", stars: 5, text: "Mở mang tầm mắt về lịch sử văn minh, tiền tệ và tôn giáo của nhân loại.", date: "09/11/2026" },
      { user: "Ngọc Trâm", stars: 4, text: "Cách kể chuyện cuốn hút như một cuốn tiểu thuyết lịch sử.", date: "14/11/2026" }
    ]
  },
  {
    id: 5,
    title: "Clean Code — Mã Sạch",
    author: "Robert C. Martin",
    category: "Công nghệ & Lập trình",
    theme: "plum",
    desc: "Tài liệu nền tảng dành cho sinh viên Công nghệ Thông tin về cách đặt tên biến, cấu trúc hàm và tổ chức mã nguồn dễ bảo trì.",
    reviews: [
      { user: "Đoàn Anh Dũng", stars: 5, text: "Cuốn sách bắt buộc phải đọc nếu muốn viết code chuyên nghiệp khi làm đồ án nhóm.", date: "07/11/2026" },
      { user: "Khánh Duy", stars: 5, text: "Thay đổi hoàn toàn tư duy tổ chức file HTML/CSS/JS của mình.", date: "15/11/2026" }
    ]
  },
  {
    id: 6,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    category: "Văn học kinh điển",
    theme: "amber",
    desc: "Hành trình theo đuổi vận mệnh của chàng chăn cừu Santiago qua sa mạc Sahara đầy triết lý nhẹ nhàng về ước mơ và hạnh phúc.",
    reviews: [
      { user: "Thanh Thảo", stars: 5, text: "Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được.", date: "11/11/2026" },
      { user: "Hoàng Nam", stars: 4, text: "Ngắn gọn, dễ đọc, phù hợp để thư giãn cuối tuần.", date: "16/11/2026" }
    ]
  }
];

// ==================== QUẢN LÝ TRẠNG THÁI (LOCALSTORAGE) ====================
const STORAGE_BOOKS_KEY = "tramdoc_books_v1";
const STORAGE_SHELF_KEY = "tramdoc_shelf_v1";
const STORAGE_THEME_KEY = "tramdoc_theme_v1";

let books = JSON.parse(localStorage.getItem(STORAGE_BOOKS_KEY)) || DEFAULT_BOOKS;
let savedShelf = JSON.parse(localStorage.getItem(STORAGE_SHELF_KEY)) || [1, 2];
let currentCategory = "all";
let currentSearch = "";
let currentSort = "rating";
let selectedRatingStars = 5;

function saveState() {
  localStorage.setItem(STORAGE_BOOKS_KEY, JSON.stringify(books));
  localStorage.setItem(STORAGE_SHELF_KEY, JSON.stringify(savedShelf));
  updateBadgesAndStats();
}

// ==================== TIỆN ÍCH HỖ TRỢ ====================
function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function getAvgRating(book) {
  if (!book.reviews || book.reviews.length === 0) return 0;
  const sum = book.reviews.reduce((acc, r) => acc + r.stars, 0);
  return sum / book.reviews.length;
}

function renderStarsText(avg) {
  const full = Math.round(avg);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function createBookCoverHTML(book) {
  const shortCat = book.category.split(" ")[0];
  return `
    <div class="book-3d theme-${book.theme || "amber"}">
      <span class="book-spine-tag">${shortCat}</span>
      <div class="book-cover-title">${book.title}</div>
      <div class="book-cover-author">${book.author}</div>
    </div>
  `;
}

// ==================== RENDER GIAO DIỆN ====================
function updateBadgesAndStats() {
  document.getElementById("shelfBadge").textContent = savedShelf.length;
  document.getElementById("statTotalBooks").textContent = books.length;
  const totalReviews = books.reduce((sum, b) => sum + b.reviews.length, 0);
  document.getElementById("statTotalReviews").textContent = totalReviews;
}

function renderFeaturedHero() {
  const featured = books[0];
  if (!featured) return;
  const avg = getAvgRating(featured).toFixed(1);
  const topQuote = featured.reviews[0]?.text || featured.desc;

  document.getElementById("featuredBookCard").innerHTML = `
    <div class="featured-top">
      <span class="badge-green">★ SÁCH NỔI BẬT TUẦN NÀY</span>
      <span class="muted" style="font-size: 0.84rem; font-weight: 600;">${featured.category}</span>
    </div>
    <div class="featured-body">
      ${createBookCoverHTML(featured)}
      <div class="featured-info">
        <h3>${featured.title}</h3>
        <div class="featured-author">${featured.author}</div>
        <div class="rating-line">
          <span class="stars">${renderStarsText(avg)}</span>
          <span>${avg} / 5.0 <span class="muted">(${featured.reviews.length} đánh giá)</span></span>
        </div>
        <div class="quote-box">"${topQuote}"</div>
        <button class="link-action" onclick="openBookDetail(${featured.id})">
          Đọc toàn bộ đánh giá →
        </button>
      </div>
    </div>
  `;
}

function createBookCardHTML(book) {
  const avg = getAvgRating(book).toFixed(1);
  const isSaved = savedShelf.includes(book.id);

  return `
    <article class="book-card">
      ${createBookCoverHTML(book)}
      <div class="book-card-body">
        <span class="cat-label">${book.category}</span>
        <h3>${book.title}</h3>
        <div class="muted" style="font-size: 0.84rem;">${book.author}</div>
        <div class="rating-line" style="margin: 6px 0 0; font-size: 0.84rem;">
          <span class="stars">${renderStarsText(avg)}</span>
          <span>${avg} (${book.reviews.length})</span>
        </div>
        <p class="book-card-excerpt">${book.desc}</p>
        <div class="book-card-footer">
          <button class="btn btn-outline btn-sm" onclick="openBookDetail(${book.id})">
            Xem &amp; Đánh giá
          </button>
          <button class="icon-save-btn ${isSaved ? "saved" : ""}"
                  title="${isSaved ? "Bỏ khỏi Tủ Sách" : "Lưu vào Tủ Sách"}"
                  onclick="toggleSaveShelf(${book.id})">
            ${isSaved ? "🔖" : "＋"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderHomeGrid() {
  const topBooks = [...books]
    .sort((a, b) => getAvgRating(b) - getAvgRating(a))
    .slice(0, 3);
  document.getElementById("homeFeaturedGrid").innerHTML = topBooks.map(createBookCardHTML).join("");
}

function renderAllBooksGrid() {
  const keyword = removeVietnameseTones(currentSearch.trim());

  let filtered = books.filter((b) => {
    const matchCat = currentCategory === "all" || b.category === currentCategory;
    const matchSearch =
      !keyword ||
      removeVietnameseTones(b.title).includes(keyword) ||
      removeVietnameseTones(b.author).includes(keyword);
    return matchCat && matchSearch;
  });

  if (currentSort === "rating") {
    filtered.sort((a, b) => getAvgRating(b) - getAvgRating(a));
  } else if (currentSort === "reviews") {
    filtered.sort((a, b) => b.reviews.length - a.reviews.length);
  } else {
    filtered.sort((a, b) => b.id - a.id);
  }

  const grid = document.getElementById("allBooksGrid");
  if (filtered.length === 0) {
    grid.innerHTML = `<p class="muted">Không tìm thấy cuốn sách nào phù hợp với từ khóa của bạn.</p>`;
    return;
  }
  grid.innerHTML = filtered.map(createBookCardHTML).join("");
}

function renderShelfGrid() {
  const shelfBooks = books.filter((b) => savedShelf.includes(b.id));
  const grid = document.getElementById("shelfBooksGrid");
  if (shelfBooks.length === 0) {
    grid.innerHTML = `<p class="muted">Tủ sách của bạn đang trống. Hãy vào <strong>Kho Sách</strong> và bấm nút <strong>＋</strong> để lưu sách yêu thích nhé!</p>`;
    return;
  }
  grid.innerHTML = shelfBooks.map(createBookCardHTML).join("");
}

function renderAllViews() {
  updateBadgesAndStats();
  renderFeaturedHero();
  renderHomeGrid();
  renderAllBooksGrid();
  renderShelfGrid();
}

// ==================== TƯƠNG TÁC TỦ SÁCH & MODAL CHI TIẾT ====================
window.toggleSaveShelf = function (bookId) {
  if (savedShelf.includes(bookId)) {
    savedShelf = savedShelf.filter((id) => id !== bookId);
    showToast("Đã xóa sách khỏi Tủ Sách cá nhân");
  } else {
    savedShelf.push(bookId);
    showToast("Đã lưu sách vào Tủ Sách cá nhân!");
  }
  saveState();
  renderAllViews();
};

window.openBookDetail = function (bookId) {
  const book = books.find((b) => b.id === bookId);
  if (!book) return;

  const avg = getAvgRating(book).toFixed(1);
  const total = book.reviews.length;
  const isSaved = savedShelf.includes(book.id);
  selectedRatingStars = 5;

  // Tính phân bổ phần trăm từ 5 sao đến 1 sao
  const breakdownHTML = [5, 4, 3, 2, 1]
    .map((star) => {
      const count = book.reviews.filter((r) => r.stars === star).length;
      const pct = total ? Math.round((count / total) * 100) : 0;
      return `
        <div class="bar-row">
          <span style="width: 42px;">${star} ★</span>
          <div class="bar-track"><div class="bar-fill" style="width: ${pct}%"></div></div>
          <span style="width: 38px; text-align: right;" class="muted">${pct}%</span>
        </div>
      `;
    })
    .join("");

  const reviewsHTML = book.reviews
    .map(
      (r) => `
      <div class="review-item">
        <div class="review-meta">
          <strong>${r.user}</strong>
          <span class="muted">${r.date}</span>
        </div>
        <div class="stars" style="font-size: 0.85rem; margin-bottom: 4px;">${renderStarsText(r.stars)}</div>
        <p style="font-size: 0.92rem;">${r.text}</p>
      </div>
    `
    )
    .join("");

  document.getElementById("bookDetailContent").innerHTML = `
    <div class="detail-header">
      ${createBookCoverHTML(book)}
      <div>
        <span class="cat-label">${book.category}</span>
        <h2 style="font-size: 1.65rem; margin-bottom: 4px;">${book.title}</h2>
        <p class="muted" style="margin-bottom: 10px;">Tác giả: <strong>${book.author}</strong></p>
        <div class="rating-line">
          <span class="stars">${renderStarsText(avg)}</span>
          <span>${avg} / 5.0 (${total} lượt đánh giá)</span>
        </div>
        <p style="font-size: 0.93rem; margin-bottom: 14px;">${book.desc}</p>
        <button class="btn btn-outline btn-sm" onclick="toggleSaveShelf(${book.id}); openBookDetail(${book.id});">
          ${isSaved ? "✓ Đã lưu trong Tủ Sách" : "+ Lưu vào Tủ Sách"}
        </button>
      </div>
    </div>

    <div class="rating-breakdown">
      <strong style="display:block; margin-bottom: 10px;">Phân bổ điểm đánh giá</strong>
      ${breakdownHTML}
    </div>

    <form id="submitReviewForm" style="margin-bottom: 22px;">
      <h3>Viết cảm nhận của bạn</h3>
      <div class="star-picker" id="starPicker">
        ${[1, 2, 3, 4, 5]
          .map(
            (n) =>
              `<button type="button" class="star-btn active" data-star="${n}" aria-label="${n} sao">★</button>`
          )
          .join("")}
      </div>
      <div class="form-group">
        <input type="text" id="reviewerName" required placeholder="Tên của bạn (VD: Nguyễn Văn A - K48)" />
      </div>
      <div class="form-group">
        <textarea id="reviewerText" rows="3" required placeholder="Chia sẻ cảm nhận chân thực của bạn về cuốn sách này..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Gửi Đánh Giá</button>
    </form>

    <div>
      <h3 style="margin-bottom: 8px;">Bình luận từ độc giả (${total})</h3>
      ${reviewsHTML || '<p class="muted">Chưa có bình luận nào. Hãy là người đầu tiên!</p>'}
    </div>
  `;

  // Gắn sự kiện chọn sao
  const starBtns = document.querySelectorAll("#starPicker .star-btn");
  starBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedRatingStars = Number(btn.dataset.star);
      starBtns.forEach((b) => {
        b.classList.toggle("active", Number(b.dataset.star) <= selectedRatingStars);
      });
    });
  });

  // Gắn sự kiện gửi bình luận mới
  document.getElementById("submitReviewForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("reviewerName").value.trim();
    const text = document.getElementById("reviewerText").value.trim();
    if (!user || !text) return;

    const today = new Date().toLocaleDateString("vi-VN");
    book.reviews.unshift({ user, stars: selectedRatingStars, text, date: today });
    saveState();
    renderAllViews();
    openBookDetail(book.id);
    showToast("Cảm ơn bạn! Đánh giá đã được đăng thành công.");
  });

  document.getElementById("bookDetailModal").classList.add("open");
};

// ==================== CHUYỂN TRANG (SPA NAVIGATION) ====================
function switchPage(pageName) {
  document.querySelectorAll(".page-section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `page-${pageName}`);
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === pageName);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo giao diện Sáng / Tối
  const savedTheme = localStorage.getItem(STORAGE_THEME_KEY) || "light";
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("themeIcon").textContent = "☀️";
  }

  document.getElementById("themeToggle").addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(STORAGE_THEME_KEY, "light");
      document.getElementById("themeIcon").textContent = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem(STORAGE_THEME_KEY, "dark");
      document.getElementById("themeIcon").textContent = "☀️";
    }
  });

  // Chuyển tab điều hướng
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      switchPage(el.dataset.nav);
    });
  });

  // Nút "Viết Đánh Giá Ngay" trên Hero mở trực tiếp sách nổi bật
  document.getElementById("heroQuickReviewBtn").addEventListener("click", () => {
    if (books[0]) openBookDetail(books[0].id);
  });

  // Tìm kiếm nhanh từ thanh header
  document.getElementById("globalSearch").addEventListener("input", (e) => {
    currentSearch = e.target.value;
    switchPage("books");
    renderAllBooksGrid();
  });

  // Lọc thể loại
  document.querySelectorAll("#categoryPills .pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("#categoryPills .pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.dataset.cat;
      renderAllBooksGrid();
    });
  });

  // Sắp xếp sách
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderAllBooksGrid();
  });

  // Đóng / Mở các Modal
  document.getElementById("closeDetailModal").addEventListener("click", () => {
    document.getElementById("bookDetailModal").classList.remove("open");
  });

  document.getElementById("openAddBookBtn").addEventListener("click", () => {
    document.getElementById("addBookModal").classList.add("open");
  });

  document.getElementById("closeAddModal").addEventListener("click", () => {
    document.getElementById("addBookModal").classList.remove("open");
  });

  // Form thêm sách mới
  document.getElementById("addBookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title: document.getElementById("newBookTitle").value.trim(),
      author: document.getElementById("newBookAuthor").value.trim(),
      category: document.getElementById("newBookCategory").value,
      theme: document.getElementById("newBookTheme").value,
      desc: document.getElementById("newBookDesc").value.trim(),
      reviews: [
        {
          user: "Thành viên Trạm Đọc",
          stars: 5,
          text: "Đầu sách mới được đề xuất thêm vào thư viện cộng đồng.",
          date: new Date().toLocaleDateString("vi-VN")
        }
      ]
    };
    books.unshift(newBook);
    saveState();
    renderAllViews();
    e.target.reset();
    document.getElementById("addBookModal").classList.remove("open");
    showToast(`Đã thêm "${newBook.title}" vào Kho Sách!`);
  });

  // Form liên hệ
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    showToast("Đã gửi lời nhắn thành công! Nhóm sẽ phản hồi sớm nhất.");
  });

  renderAllViews();
});