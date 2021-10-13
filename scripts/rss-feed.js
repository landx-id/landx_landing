$.when($.ready).then(function () {
    fetch('https://landx.id/blog/rss/')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            // console.log(data)
            const items = data.querySelectorAll("item");
            let mobileView = "";
            let desktopView = "";
            items.forEach((element, index) => {
                let title = element.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                let description = element.getElementsByTagName("description")[0].childNodes[0].nodeValue;
                let link = element.getElementsByTagName("link")[0].childNodes[0].nodeValue;
                let category = element.getElementsByTagName("category")[0].childNodes[0].nodeValue;
                
                if(index <= 2){
                    mobileView += `
                    <div class="carousel-item custom${index === 0 ? ' active' : ''}">
                        <div class="col-12">
                            <div class="card-body p-4" style="border-radius: 12px !important;">
                                <p class="rss-categori">${category}</p>
                                <p class="rss-title">${title}</p>
                                <p class="rss-description">${description}</p>
                                <div class="rss-btn-detail-blog">
                                    <a href="${link}" target="_blank">Selengkapnya di blog</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;

                    desktopView += `
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div class="card-body p-4">
                            <p class="rss-categori">${category}</p>
                            <p class="rss-title">${title}</p>
                            <p class="rss-description">${description}</p>
                            <div class="rss-btn-detail-blog">
                                <a href="${link}" target="_blank">Selengkapnya di blog</a>
                            </div>
                        </div>
                    </div>
                    `;
                }else{
                    return true;
                }

                document.getElementById('rss-mobile-view').innerHTML = mobileView;
                document.getElementById('rss-desktop-view').innerHTML = desktopView;
            });
        })
});