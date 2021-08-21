const makeUpcoming = (data) => {
  const expiredAt = new Date(data.expired_at).getTime(); //convert date and time to unix time
  const now = Date.now();
  const distance = expiredAt - now;
  
  return `
  <div class="col-12 col-md-auto col-xl-3" onClick="detail('${data.link}')">
    <div class="card custom">
      <img class="thumnail" src="${data.images}">
      <img class="label-soon" src="assets/soon-listing.png">
      <h5 class="title-thumnail">${data.title}</h5>
      <div class="canv">
        <span class="count-down-thumnail text-count-down-thumnail">${Math.floor(distance / (1000 * 60 * 60 * 24))} Hari : ${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} Jam</span>
      </div>
      <p class="detial-thumnail">PELAJARI LEBIH LANJUT</p>
    </div>
  </div>`
};

$.getJSON("data/upcoming.json", function(data) {
  console.log(data); // this will show the info it in firebug console
  var base = document.getElementById("card-base");
  var container = document.createElement("div");
  container.setAttribute("class", "container");
  container.setAttribute("id", "container");

  var row = document.createElement("div");
  row.setAttribute("id", "row");
  row.setAttribute("class", "row");
  row.innerHTML = makeUpcoming(data.upcoming[0]["kapal-cumi"]);
  container.append(row);
  base.append(container);
});