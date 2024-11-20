'use client';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import './Home.css'; 
import Loader from '@/src/components/loader/loader';

const GET_LOCATIONS = gql`
  query Locations {
    locations {
      id
      name
      image
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <div className="container">
      <h1 className="title">Locations</h1>
      <div className="locations-grid">
        {data.locations.map((location) => (
          <div key={location.id} className="location-card">
            <Link href={`/location/${location.id}`}>
              <img
                src={location.image}
                alt={location.name}
                className="location-image"
              />
              <h2 className="location-name">{location.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
