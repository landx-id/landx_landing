var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

(function () { var script = document.createElement('script'); script.src = "https://paperform.co/__embed.min.js"; document.body.appendChild(script); })()

const bennerMobile = document.querySelector('#banner-mobile');
let widthWindow = window.innerWidth
window.addEventListener('resize', () => {
  widthWindow = window.innerWidth
  if (widthWindow >= 360 && widthWindow <= 576) {
    bennerMobile.src = "./assets/images/Mobile-KV@2x.webp"
    bennerMobile.className = ("banner-img d-sm-none mt-3")
  }
  if (widthWindow < 360) {
    bennerMobile.src = "./assets/images/Mobile-KV-320.webp"
    bennerMobile.className = ("banner-mobile d-sm-none mt-3")
  }
})
if (widthWindow >= 360 && widthWindow <= 576) {
  bennerMobile.src = "./assets/images/Mobile-KV@2x.webp"
  bennerMobile.className = ("banner-img d-sm-none mt-3")
}
if (widthWindow < 360) {
  bennerMobile.src = "./assets/images/Mobile-KV-320.webp"
  bennerMobile.className = ("banner-mobile d-sm-none mt-3")
}

    // const btnDownload = document.querySelector('#btn-download')

    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //   // true for mobile device
    //   btnDownload.href = "https://landxapp.page.link/download"
    // } else {
    //   // false for not mobile device
    //   btnDownload.href = "https://play.google.com/store/apps/details?id=store.numoney.landxapp"
    // }
