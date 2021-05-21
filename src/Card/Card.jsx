const Card = (props) => {
    
    return (
        <div className="card mt-3" style={{width: '18rem'}}>

            {props.children}
            
            <div className="card-body">
                <h5 className="card-title">{props.cardsBody.title}</h5>
                <p className="card-text">{props.cardsBody.text}</p>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    )
}

export default Card;