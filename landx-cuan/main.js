var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const btnDownload = document.querySelector('#btn-download')

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // true for mobile device
  btnDownload.href = "https://landxapp.page.link/download"
} else {
  // false for not mobile device
  btnDownload.href = "https://play.google.com/store/apps/details?id=store.numoney.landxapp"
}