import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdoptionRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost:5000/request/all");
        if (!response.ok) {
          throw new Error("Failed to fetch adoption requests");
        }
        const data = await response.json();
        setRequests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="AdoptionRequests">
      <h1>Adoption Requests</h1>
      {requests.length === 0 ? (
        <p>No adoption requests available.</p>
      ) : (
        <ul>
          {requests.map((request) => (
            <li key={request._id}>
              <Link to={`/adoption-request/${request._id}`}>
                {`User: ${request.user.name}, Pet: ${request.pet.name}, Status: ${request.status}`}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdoptionRequests;
