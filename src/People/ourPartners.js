import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrustyCoin from '../contracts/TrustyCoin.json';
import PartnerCard from './partnerCard';

// ABI del contratto (assicurati di avere l'ABI corretta del tuo contratto)
const trustyCoinAbi = TrustyCoin.abi;

// Indirizzo del contratto (sostituisci con l'indirizzo del tuo contratto distribuito)
const contractAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'; // Inserisci l'indirizzo del tuo contratto

function OurPartners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const loadPartners = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, trustyCoinAbi, signer);

        try {
          // Chiamata allo smart contract per ottenere gli indirizzi dei partner
          const partnerAddresses = await contract.getPartnerAddresses();

          // Funzione per ottenere i dettagli del partner dal database locale
          const fetchPartnerDetails = async (address) => {
            const response = await fetch(`http://localhost:5000/api/partners?address=${address}`);
            const data = await response.json();
            return data;
          };

          const partnerDetailsPromises = partnerAddresses.map(address => fetchPartnerDetails(address));
          const partnerDetails = await Promise.all(partnerDetailsPromises);

          setPartners(partnerDetails);
        } catch (error) {
          console.error("Error fetching partner addresses: ", error);
        }
      } else {
        console.error("Ethereum object not found");
      }
    };

    loadPartners();
  }, []);

  return (
    <div className="content">
      <h1>Our Partners</h1>
      <div className="row">
        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            image={partner.image}
            title={partner.title}
            description={partner.description}
          />
        ))}
      </div>
    </div>
  );
}

export default OurPartners;
