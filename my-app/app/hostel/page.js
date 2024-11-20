'use client'
import Loader from '@/src/components/loader/loader';
import { useQuery , gql} from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      _id
      name
      image
      hostelsCount
    }
  }
`;


export default function Hostel() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div>
        <h1>Locations</h1>
        <div>
          {data.locations.map((location) => (
            <div key={location._id}>
              <Link href={`/location/${location.id}`}>
                <a>
                  <img src={location.image} alt={location.name} />
                  <h2>{location.name}</h2>
                  <p>{location.hostelsCount} hostels available</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  