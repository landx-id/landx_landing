var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// (function () { var script = document.createElement('script'); script.src = "https://paperform.co/__embed.min.js"; document.body.appendChild(script); })()

const bennerMobile = document.querySelector('#banner-mobile');
let widthWindow = window.innerWidth
window.addEventListener('resize', () => {
  widthWindow = window.innerWidth
  if (widthWindow >= 360 && widthWindow <= 576) {
    bennerMobile.src = "./assets/images/Mobile-KV-360.webp"
    bennerMobile.className = ("banner-img d-sm-none mt-3")
  }
  if (widthWindow < 360) {
    bennerMobile.src = "./assets/images/Mobile-KV-360.webp"
    bennerMobile.className = ("banner-mobile d-sm-none mt-3")
  }
})
if (widthWindow >= 360 && widthWindow <= 576) {
  bennerMobile.src = "./assets/images/Mobile-KV-360.webp"
  bennerMobile.className = ("banner-img d-sm-none mt-3")
}
if (widthWindow < 360) {
  bennerMobile.src = "./assets/images/Mobile-KV-360.webp"
  bennerMobile.className = ("banner-mobile d-sm-none mt-3")
}

// const btnDownloadPlaystore = document.querySelector('#btn-download-playstore')
// const btnDownloadAppstore = document.querySelector('#btn-download-appstore')

// if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
//   // true for mobile device
//   btnDownloadAppstore.href = "https://apps.apple.com/id/app/landx-aplikasi-investasi/id1453823676?l=id"
// } else {
//   // false for not mobile device
//   btnDownloadPlaystore.href = "https://play.google.com/store/apps/details?id=store.numoney.landxapp"
// }
