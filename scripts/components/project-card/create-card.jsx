function CreateCard(props) {
    ReactDOM.render(
        <div className="container">
            <div className="row">
                {CardBase(props)}
            </div>
        </div>

        , document.getElementById("card-base")
    );
}