'use client';

import { useParams } from 'next/navigation';
import { useQuery, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { addOrRemoveFromCart } from '../../../redux/action';
import './Location.css';
import Loader from '@/src/components/loader/loader';

const GET_HOSTELS = gql`
 query Hostels($locationId: ID!) {
  hostels(locationId: $locationId) {
    id
    name
    image
    locationId
  }
}
`;

export default function Location() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_HOSTELS, {
    variables: { locationId: id },
  });

  console.log(data)
  const dispatch = useDispatch();

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="location-container">
      <h1 className="title">Hostels</h1>
      <div className="hostel-list">
        {data.hostels.map((hostel) => (
          <div key={hostel.id} className="hostel-card">
        
            <div className="hostel-image">
              <img src={hostel.image} alt={hostel.name} />
            </div>

            <div className="hostel-details">
              <h2 className="hostel-name">{hostel.name}</h2>
              <p className="hostel-info">This is a cozy and affordable hostel with all the basic amenities.</p>
              <p className="hostel-price">Price: ₹1500 per night</p>
              <button
                className="add-to-cart-btn"
                onClick={() => dispatch(addOrRemoveFromCart(hostel))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
