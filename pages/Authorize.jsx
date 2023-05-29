import { useEffect, useState } from "react";

export default function Authorize() {
  const [authorizationData, setAuthorizationData] = useState(null);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Fetch authorization data
    fetchAuthorizationData();
  }, []);

  const fetchAuthorizationData = async () => {
    try {
      // Retrieve IP address
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const { ip } = await ipResponse.json();

      // Retrieve location data
      const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const locationData = await locationResponse.json();

      // Set the authorization data in the state
      setAuthorizationData({
        ip,
        location: `${locationData.city}, ${locationData.country_name}`,
        network: locationData.org,
      });
    } catch (error) {
      console.error("Failed to fetch authorization data:", error);
    }
  };

  return (
    <div>
      {authorizationData ? (
        <div>
          <h2>You are authorized!</h2>
          <p>IP: {authorizationData.ip}</p>
          <p>Location: {authorizationData.location}</p>
          <p>Network: {authorizationData.network}</p>
        </div>
      ) : (
        <p>Loading authorization data...</p>
      )}
    </div>
  );
}
