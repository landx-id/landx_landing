const header = () => {

    return `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P9LT23"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <!-- NAVIGATION -->
    <nav class="navbar d-flex-inline fixed-top navbar-expand-lg py-4 mb-3">
            <div class="float-sm-left float-md-left float-lg-left hamburgerMenu">
                <img src="https://landx.id/img/hamburgerMenu.svg" alt="Menu" data-toggle="collapse" data-target="#navbarActive" aria-controls="navbarActive" aria-expanded="false" aria-label="Toggle navigation">
            </div>
            <div class="navbar-brand float-sm-none landxLogo" href="">
                <a href="/">
                    <img src="https://landx.id/img/LandX_Logo.png" alt="LandX_Logo">
                </a>
            </div>
            <div>
                <a href="pendaftaran-perusahaan.html">
                    <button type="button" class="btn btn-outline-primary float-md-right float-lg-right d-none d-sm-none d-xs-none d-lg-block">
                        PENDAFTARAN PERUSAHAAN
                    </button>
                </a>
            </div>
    </nav>

    <!-- COLLAPSE NAVIGATION -->
    <nav class="align-items-start collapse navbar-collapse bg-light transparent sticky-top" id="navbarActive">
        <div class="container flex-md-column flex-lg-row">
            <div class="row">
                <div class="col-sm-4">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 mb-3 pt-2">
                        <li class="nav-item">
                            <h6 class="nav-link text-secondary font-weight-bold">PERUSAHAAN</h6>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="https://landx.id/blog/">Blog</a>
                            <span></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="about-landx.html">Tentang LandX</a>
                            <span></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="syarat-dan-ketentuan.html">Syarat & Ketentuan</a>
                            <span></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="privacy-policy.html">Kebijakan Privasi</a>
                            <span></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="service-level-agreement.html">Service Level Agreement</a>
                            <span></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="kebijakan-isms.html">Kebijakan ISMS</a>
                            <span></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="mitigasi-risiko.html">Mitigasi Risiko</a>
                            <span></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="https://landx.id/blog/faq-landx/">FAQ</a>
                            <span></span>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-4">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 mb-3 pt-2">
                        <li class="nav-item">
                            <h6 class="nav-link text-secondary font-weight-bold">DUKUNGAN</h6>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="https://landx.id/contact.html">Kontak</a>
                            <span></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="mailto:hello@landx.id">hello@landx.id</a>
                            <span></span>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-4 mt-4 pb-3">
                  <a href="pendaftaran-perusahaan.html">
                    <button type="button" class="btn btn-outline-primary btn-sm float-sm-right float-md-right d-sm-block d-lg-none">
                        PENDAFTARAN PERUSAHAAN
                    </button>
                  </a>
                </div>

            </div>
        </div>
    </nav>
`;
}
var upcoming_detail = document.getElementById("header");
upcoming_detail.innerHTML = header();