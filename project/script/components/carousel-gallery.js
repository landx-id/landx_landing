const carouselGallery = (props) => {
    var images = [];
    props.previewImages.map((image) => {
        images.push(
        React.createElement("li",
            {
                "data-thumb": image,
                key: image
            },
            React.createElement("img", {
                src: image,
                className: "slider-img"
            })
        )
        );
    });
    return React.createElement("div",
        {
            className: "col-md-6 left-box"
        },
        React.createElement("div",
            {
                className: "item"
            },
            React.createElement("div",
                {
                    className: ""
                },
                React.createElement("ul",
                    {
                        id: "image-gallery",
                        className: "gallery list-unstyled cS-hidden"
                    },
                    images
                )
            )
        )
    );
};
  