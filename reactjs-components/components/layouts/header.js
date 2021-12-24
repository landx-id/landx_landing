const header = () => {

    return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <!-- LX Custom CSS -->
        <link rel="stylesheet" href="/style.min.css">
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

        <!-- Custom Style -->
        <link rel="stylesheet" href="/stylesheets/custom-style.css">
        <link rel="stylesheet" href="/stylesheets/card.css">

        <!-- facebook domain verification -->
        <meta name="facebook-domain-verification" content="f7kayy7mhaddcpu6xbwde08hlvsdfm" />

        <!-- Meta Thumbnail -->
        <meta property='og:image' content="./img-new/thumbnailLink.png" />
        <meta itemprop="image" content="./img-new/thumbnailLink.png" />
        <meta name="thumbnail" content="./img-new/thumbnailLink.png" />
        <meta property="og:type" content="website" />

        <!-- Light Slider -->
        <link type="text/css" rel="stylesheet" href="/stylesheets/lightslider.min.css" />
        <script src="/scripts/lightslider.min.js" defer></script>
    
        <!-- Iconify -->
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    
        <!-- Showdown JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-207958011-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-207958011-1');
        </script>
        <style>
        /* square buttons */
            .rec.rec-arrow {
                border-radius: 0;
            }
            /* round buttons on hover */
            .rec.rec-arrow:hover {
                border-radius: 50%;
            }
            /* hide disabled buttons */
            .rec.rec-arrow {
                display: none;
            }
            /* disable default outline on focused items */
            /* add custom outline on focused items */
            .rec-carousel-item:focus {
                outline: none;
                box-shadow: inset 0 0 1px 1px lightgrey;
            }
            button.rec-dot.rec-dot_active{
            background-color: #2dbe60;
            box-shadow: 0 0 1px 3px #2dbe60;
            }

            button.rec-dot:hover, button.rec-dot:active, button.rec-dot:focus  {
            box-shadow: 0 0 1px 3px rgba(235,16,16,0.1);
            }
            @media only screen and (max-width: 768px) {
                /* For desktop: */
                .cardproject {
                    width: 100%;
                    padding:0px;
                }
              }
              @media only screen and (min-width: 768px) {
                /* For desktop: */
                .cardproject {
                    width: 100%;
                    padding-left:150px;
                    padding-right:150px;
                }
              }
        </style>
    </head>

    <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P9LT23"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <span itemprop="image" itemscope itemtype="image/jpeg">
            <link itemprop="url" href="./img-new/thumbnailLink.png">
        </span>
        <!-- NAVIGATION -->

        <div class="fixed-top" id="fixed-top">
            <div class="row" id="banner">
              <div class="container d-flex justify-content-center align-items-center h-100" id="hanging">
                <span style="color:#FFFF;">Hati-hati dengan segala jenis penipuan. LandX tidak memiliki grup Telegram! Akun resmi Customer Service LandX adalah <img src="/img/icon/wa_icon.svg"> 0811 9562 878</span>
              </div>
              <img id="close_banner" src="/img/icon/close_icon.svg">
            </div>

            <nav id="navbar" class="navbar d-flex-inline navbar-expand-lg py-4 mb-3">
                <div class="container">
                    <div class="float-sm-left float-md-left float-lg-left">
                        <a href="/">
                            <img src="/img-new/logo_landx.webp" alt="LandX Platform Equity Crowdfunding Indonesia yang akan membantu investasi bisnis jangka panjang anda" title="LandX Platform Equity Crowdfunding Indonesia yang akan membantu investasi bisnis jangka panjang anda" class="hamburgerMenu">
                        </a>
                    </div>
                    <div class="mobile-view float-sm-right float-md-right float-lg-right hamburgerMenu">
                        <img src="/img/hamburgerMenu.svg" alt="Menu" title="Menu" data-toggle="collapse" data-target="#navbarActive" aria-controls="navbarActive" aria-expanded="false" aria-label="Toggle navigation">
                    </div>
                    <div id="desktop-menu" class="row col-6 col-sm-6 d-flex justify-content-between">
                        <a href="/#why-landx" class="inlink"><p class="text-primary text-center">Mengapa LandX</p></a>
                        <a href="/#ongoing-projects" class="inlink"><p class="text-primary text-center">Proyek</p></a>
                        <a href="/#how-it-works" class="inlink"><p class="text-primary text-center">Cara Kerja</p></a>
                        <a href="/contact.html"><p class="text-primary text-center">Kontak</p></a>
                        <a href="/blog" class="inlink"><p class="text-primary text-center">Blog</p></a>
                        <div class="subnav" style="position:relative; display:inline-block;">
                            <p class="text-primary text-center">Perusahaan <i class="fa fa-angle-down" id="arrow-nav-down"></i><i class="fa fa-angle-up" id="arrow-nav-up"></i></p>
                            <div class="dropdownNav">
                                <a href="/blog/jobs-at-landx/" target="_blank" class="nav-link inlink border-nav"><p class="text-primary text-left">Karir</p></a>
                                <a href="/syarat-dan-ketentuan.html" class="nav-link inlink border-nav"><p class="text-primary text-left">Syarat & Ketentuan</p></a>
                                <a href="/privacy-policy.html" class="nav-link inlink border-nav"><p class="text-primary text-left">Kebijakan Privasi</p></a>
                                <a href="/service-level-agreement.html" class="nav-link inlink border-nav"><p class="text-primary text-left">Service Level Agreement</p></a>
                                <a href="/kebijakan-isms.html" class="nav-link inlink border-nav"><p class="text-primary text-left">Kebijakan ISMS</p></a>
                                <a href="/mitigasi-risiko.html" class="nav-link inlink border-nav"><p class="text-primary text-left">Mitigasi Risiko</p></a>
                                <a href="/blog/faq-landx" class="nav-link inlink"><p class="text-primary text-left">FAQ</p></a>
                            </div>
                        </div>                    
                    </div>
                    <a class="desktop-view" href="/pendaftaran-perusahaan.html">
                        <button type="button" class="btn btn-primary float-md-right float-lg-right d-none d-sm-none d-xs-none d-lg-block">
                            PENDAFTARAN PERUSAHAAN
                        </button>
                    </a>
                </div>
            </nav>
        </div>

        <!-- COLLAPSE NAVIGATION -->
        <nav class="align-items-start collapse navbar-collapse bg-light transparent sticky-top" id="navbarActive">
            <div class="container flex-md-column flex-lg-row">
                <div class="row">
                    <div class="col-sm-4">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 mb-3 pt-2">
                            <li class="nav-item border-nav">
                                <a class="nav-link text-left text-primary font-weight-bold inlink" href="/#why-landx-mobile">Mengapa LandX</a>
                                <span></span>
                            </li>
                            <li class="nav-item border-nav">
                                <a class="nav-link text-left text-primary font-weight-bold inlink" href="/#ongoing-projects">Proyek</a>
                                <span></span>
                            </li>
                            <li class="nav-item border-nav">
                                <a class="nav-link text-left text-primary font-weight-bold inlink" href="/#how-it-works">Cara Kerja</a>
                                <span></span>
                            </li>
                            <li class="nav-item border-nav">
                                <a class="nav-link text-left text-primary font-weight-bold" href="/contact.html">Kontak</a>
                                <span></span>
                            </li>
                            <li class="nav-item border-nav">
                                <a class="nav-link text-left text-primary font-weight-bold inlink" href="/blog">Blog</a>
                                <span></span>
                            </li>
                            <li class="nav-item border-nav" onclick="showMenu()">
                                <p class="nav-link text-left text-primary font-weight-bold">Perusahaan <i class="fa fa-angle-down" id="arrow-nav-down-mobile"></i><i class="fa fa-angle-up" id="arrow-nav-up-mobile"></i></p>
                            </li>
                            <ul id="dropdown-mobile">
                                <li class="nav-item border-nav">
                                    <a class="nav-link text-left text-primary font-weight-normal inlink" href="/blog/jobs-at-landx/" target="_blank">Karir</a>
                                </li>
                                <li class="nav-item border-nav">
                                    <a class="nav-link text-left text-primary font-weight-normal inlink" href="/syarat-dan-ketentuan.html">Syarat & Ketentuan</a>
                                </li>
                                <li class="nav-item border-nav">
                                    <a class="nav-link text-left text-primary font-weight-normal inlink" href="/privacy-policy.html">Kebijakan Privasi</a>
                                </li>
                                <li class="nav-item border-nav">
                                    <a class="nav-link text-left text-primary font-weight-normal" href="/service-level-agreement.html">Service Level Agreement</a>
                                </li>
                                <li class="nav-item border-nav">
                                    <a class="nav-link text-left text-primary font-weight-normal" href="/kebijakan-isms.html">Kebijakan ISMS</a>
                                </li>
                                <li class="nav-item border-nav">
                                    <a class="nav-link text-left text-primary font-weight-normal" href="/mitigasi-risiko.html">Mitigasi Resiko</a>
                                </li>
                                <li class="nav-item border-nav">
                                    <a class="nav-link text-left text-primary font-weight-normal" href="/blog/faq-landx">FAQ</a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div class="col-sm-4 mt-4 pb-3" style="display: flex; justify-content: center;">
                        <a href="/pendaftaran-perusahaan.html">
                            <button type="button" class="btn btn-primary btn-sm float-sm-right float-md-right d-sm-block d-lg-none">
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
