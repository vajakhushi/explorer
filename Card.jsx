function Card() {
    return (
        <div className="Card">
            <div class="card" style ={{ width :"18rem"}}>
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}
export default Card;
