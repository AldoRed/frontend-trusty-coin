import { useMoralis } from "react-moralis";
import BadgeCard from "../BadgeCard/badgeCard";

const supportedChains = ["31337", "11155111"];

const Partners = () => {
    const { isWeb3Enabled, chainId } = useMoralis();

    // Example data for badges
    const badges = [
        { title: "Partner 1", description: "This is a description of Partner." },
        { title: "Partner 2", description: "This is a description of Partner." },
        { title: "Partner 3", description: "This is a description of Partner." },
        { title: "Partner 4", description: "This is a description of Partner." }
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Partners</h1>
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

export default Partners;
