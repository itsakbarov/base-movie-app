export const settingss = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        // autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };