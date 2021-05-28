const CardBase = (props) => {
    var cards = [];

    /* Take an array of landXProperty */
    for (var i = 0; i < props.length; i++) {
        cards.push(
            <div className="col-sm-12 col-md-6 col-xl-4" key={props[i].id}>
                <div className="card custom">
                    <CardCarousel
                        id={props[i].id}
                        totalImages={props[i].previewImages.length}
                        previewImages={props[i].previewImages}
                    />
                    {CardBody(props[i])}
                </div>
            </div>
        );
    }

    return (cards);
}