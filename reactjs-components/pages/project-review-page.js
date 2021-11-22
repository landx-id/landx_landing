import { initializeReviewProject } from '../components/project-review-page/components/initialize-project';

/* Styles */
import '../components/project-review-page/stylesheets/style.css';

fetch('/lottie/upcoming.json')
  .then(response => response.json())
  .then(data => {
    let currentProject = [];
    let id = $("#project-id").val();

    data.upcoming.forEach(val => {
        let key = Object.keys(val)[0];
        if(key == id){
            currentProject.push(val[key]);
        }
    });

    if(currentProject.length > 0){
        let previewImages = currentProject[0].images;
        initializeReviewProject(currentProject[0]);

        // Show the carousel gallery
        $("#content-slider").lightSlider({
            loop:true,
            keyPress:true,
        });
        $('#image-gallery').lightSlider({
            gallery:true,
            item: 1,
            thumbItem: previewImages.length,
            slideMargin: 0,
            speed: 1500,
            pause: 5000,
            auto: true,
            loop: true,
            onSliderLoad: function() {
                $('#image-gallery').removeClass('cS-hidden');
            }  
        });
    }
  })