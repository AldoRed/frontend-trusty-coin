const BadgeCard = ({ title, description }) => {
    return (
        <div className="card mb-3">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default BadgeCard;
