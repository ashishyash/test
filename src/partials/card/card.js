import './card.scss';
const Card = (props)=> {
    const markup = { __html: props.info?.description?.featuresBenefits };
    return(
        <div className="card_wrapper">
            <h3>{props.info?.sortingDisplayName}</h3>
            <div className="description" dangerouslySetInnerHTML={markup}></div>
        </div>
    );
}
export default Card;