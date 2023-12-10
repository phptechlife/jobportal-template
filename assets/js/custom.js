$(document).ready(function(){
    var lazyLoadInstance = new LazyLoad({elements_selector:"img.lazy, video.lazy, div.lazy, section.lazy, header.lazy, footer.lazy,iframe.lazy"});
    let bannerHeight = $(window).height();
    $("#center").not('.slick-initialized').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<i class="icon-left-arrow right-arrow arrow shadow"></i>',
        nextArrow:'<i class="icon-right-arrow left-arrow arrow shadow"></i>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 5,
                slidesToScroll: 1,
                
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,      
            }
        }] 
    
    });

    $("#testimonials").not('.slick-initialized').slick({
        speed: 1000,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<i class="icon-left-arrow right-arrow arrow shadow"></i>',
        nextArrow:'<i class="icon-right-arrow left-arrow arrow shadow"></i>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: false,
                  arrows: true
              }
            },{
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: true,
              }
          },{
                breakpoint: 546,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
              }
          }]
      
    });

    $("#video-slider").not('.slick-initialized').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '250px',
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        arrows:true,
        dots: false,
        prevArrow:'<i class="icon-left-arrow right-arrow arrow shadow"></i>',
        nextArrow:'<i class="icon-right-arrow left-arrow arrow shadow"></i>',
        responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: false,
                  arrows: true,
                  centerPadding: '100px',
                  infinite: true,
              }
          },{
              breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: true,
                infinite: true,
                centerPadding: '60px',
              }
          },{
              breakpoint: 546,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                centerPadding: '30px',
                infinite: true,
              }
          }]
    });

    $("#insects-slider").not('.slick-initialized').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<i class="icon-left-arrow right-arrow arrow shadow"></i>',
        nextArrow:'<i class="icon-right-arrow left-arrow arrow shadow"></i>',

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                centerPadding: '0px',
                arrows: false,
            }
        },{
            breakpoint: 576,
            settings: {
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,                
            }
        }] 
    
    });

    $("#works").not('.slick-initialized').slick({
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        lazyLoad: 'ondemand',
        prevArrow:'<i class="icon-left-arrow right-arrow arrow shadow"></i>',
        nextArrow:'<i class="icon-right-arrow left-arrow arrow shadow"></i>',

        responsive: [{
            breakpoint: 1365,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
            }
        },{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
            }
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0px',
                arrows: true,
            }
        },{
            breakpoint: 576,
            settings: {
                centerPadding: '0px',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,                
            }
        }] 
    
    });

    $("#pest-treatment").not('.slick-initialized').slick({
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        lazyLoad: 'ondemand',
        prevArrow:'<i class="icon-left-arrow right-arrow arrow shadow"></i>',
        nextArrow:'<i class="icon-right-arrow left-arrow arrow shadow"></i>',

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
            }
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '0px',
                arrows: true,
            }
        },{
            breakpoint: 576,
            settings: {
                centerPadding: '0px',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,                
            }
        }] 
    
    });

    $("#pest-testimonial").not('.slick-initialized').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        prevArrow:'<i class="icon-left-arrow right-arrow arrow shadow"></i>',
        nextArrow:'<i class="icon-right-arrow left-arrow arrow shadow"></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
            }
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 arrows: true,
            }
        },{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 arrows: true,
            }
        }] 
    
    });

    $(".scoll-outer").click(function () {
        $("html, body").animate({ scrollTop: "+=" + bannerHeight + "px" }, 800);
    });
});

const fileType = (fileName) => {
    return fileName.split('.').pop();
}

let videoPlayer = null;

$('body').on('click','.video-change',function(e){
    let videoPoster = $(this).attr('data-video-poster');
    let videoPath= $(this).attr('data-video');

    $('.video-change').removeClass('active');
    $(this).addClass('active');


    $("#video-image").attr('data-src',videoPoster).attr('src',videoPoster);
    $("#play-btn").attr('data-video-poster',videoPoster).attr('data-video',videoPath);    
})

$('body').on('click','.play-btn',function(){
    $("#videoModal").modal('show');
    let videoPoster = $(this).attr('data-video-poster');
    let videoPath= $(this).attr('data-video');

    let type = fileType(videoPath);

    $("#videoModal .modal-body").html('<div class="py-5 text-center"><i class="icon-spin"></i></div>');

    let videoTag = `<video
                    id="my-video-1"
                    class="video-js-modal"
                    controls
                    preload="auto"
                    width="100%"
                    height="100%"
                    poster="`+videoPoster+`"
                    data-setup='{"controls": true, "autoplay": false, "preload": "auto"}'
                  >
                    <source src="`+videoPath+`" type="video/`+type+`" />
                    <p class="vjs-no-js">
                      To view this video please enable JavaScript, and consider upgrading to a
                      web browser that
                      <a href="https://videojs.com/html5-video-support/" target="_blank"
                        >supports HTML5 video</a
                      >
                    </p>
                </video>`;

    setTimeout(() => {
        $("#videoModal .modal-body").html(videoTag);        
    },1000)         
})


let videoModal = document.getElementById('videoModal');
if (videoModal) {
    videoModal.addEventListener('hidden.bs.modal', function (event) {
        let videoElement = document.getElementById('my-video-1');
        videoElement.pause();
        videoElement.removeAttribute('src');
        videoElement.load();
    })
}






