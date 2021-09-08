const header = () => {

    return `
    <!doctype html>
    <html lang="en">
    <head>
        <title>LandX | Investasi Bisnis dan Properti Semudah Belanja Online</title>
        <link id="favicon" rel="icon" type="image/png" href="img/LandX-faveicon.png"/>

        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="Miliki dan Nikmati Keuntungan dari Bisnis Rendah Risiko Mulai dari Rp. 1 juta. Equity Crowdfunding Berizin dan Diawasi OJK.">

        <!-- google tag manager -->
        <script src="/scripts/tag.js"></script>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        !-- facebook domain verification -->
        <meta name="facebook-domain-verification" content="811r5ta54vxgwocrkxbk6zcubfrpwc" />

        <!-- LX Custom CSS -->
        <link rel="stylesheet" href="/style.css">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800;900&display=swap" rel="stylesheet">
        <!-- Facebook Pixel Code -->
        <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '341440499911698');
        fbq('track', 'PageView');
        </script>
        <noscript>
        <img height="1" width="1"
        src="https://www.facebook.com/tr?id=341440499911698&ev=PageView
        &noscript=1"/>
        </noscript>
        <!-- End Facebook Pixel Code -->

        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- JQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


        <!-- Custom Style -->
        <link rel="stylesheet" href="/stylesheets/custom-style.css">
        <link rel="stylesheet" href="/stylesheets/card.css">

        <!-- Light Slider -->
        <link type="text/css" rel="stylesheet" href="/stylesheets/lightslider.min.css" />
        <script src="/scripts/lightslider.min.js" defer></script>
    
        <!-- Iconify -->
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    
        <!-- Showdown JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js"></script>

        
    </head>

    <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P9LT23"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        
        <!-- NAVIGATION -->
        <nav class="navbar d-flex-inline fixed-top navbar-expand-lg py-4 mb-3">
                <div class="float-sm-left float-md-left float-lg-left hamburgerMenu">
                    <img src="/img/hamburgerMenu.svg" alt="Menu" data-toggle="collapse" data-target="#navbarActive" aria-controls="navbarActive" aria-expanded="false" aria-label="Toggle navigation">
                </div>
                <div class="navbar-brand float-sm-none landxLogo" href="">
                    <a href="/">
                        <img src="/img/LandX_Logo.png" alt="LandX_Logo">
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
                                <a class="nav-link text-primary" href="blog/">Blog</a>
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
                                <a class="nav-link text-primary" href="blog/faq-landx/">FAQ</a>
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
                                <a class="nav-link text-primary" href="contact.html">Kontak</a>
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
