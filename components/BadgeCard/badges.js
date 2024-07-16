import { useMoralis } from "react-moralis";
import BadgeCard from "./badgeCard";

const supportedChains = ["31337", "11155111"];

const Badges = () => {
    const { isWeb3Enabled, chainId } = useMoralis();

    // Example data for badges
    const badges = [
        { title: "Badge 1", description: "This is a description of Badge." },
        { title: "Badge 2", description: "This is a description of Badge." },
        { title: "Badge 3", description: "This is a description of Badge." },
        { title: "Badge 4", description: "This is a description of Badge." }
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Badges</h1>
                <div className="row">
                    {badges.map((badge, index) => (
                        <div key={index} className="col-md-2 mb-2">
                            <BadgeCard 
                                title={badge.title} 
                                description={badge.description} 
                            />
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Badges;
