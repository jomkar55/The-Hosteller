'use client'
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import Loader from '@/src/components/loader/loader';
import './HotelCounts.css';

export const GET_HOSTEL_COUNTS = gql`
  query GetHostelCounts {
    hostelCounts {
      locationId
      locationName
      hostelCount
    }
  }
`;


const HostelCounts = () => {
    const { loading, error, data } = useQuery(GET_HOSTEL_COUNTS);
  
    if (loading) return  <Loader />;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div className="container">
        <h1>Hostel Counts by Location</h1>
        <div className="hostelList">
          {data.hostelCounts.map(({ locationId, locationName, hostelCount }) => (
            <div key={locationId} className="location">
              <h2>{locationName}</h2>
              <p className="count">Hostels: {hostelCount}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HostelCounts;
