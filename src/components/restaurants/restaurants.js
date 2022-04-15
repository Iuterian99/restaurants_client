import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
const Restaurants = gql`
  query restaurants($type_id: ID!) {
    restaurants(type_id: $type_id) {
      restaurant_id
      restaurant_name
      restaurant_image
    }
  }
`;

function RESTAURANTS() {
  const { id } = useParams();

  const { data } = useQuery(Restaurants, {
    variables: { type_id: id },
  });

  return (
    <>
      <ul className="d-flex justify-content-evenly mt-3">
        {data &&
          data.restaurants.map((e, i) => (
            <li
              className="list-unstyled border border-success border-2 p-bottom-2 shadow p-3 mb-5 bg-body rounded"
              key={i}
            >
              <img src={e.restaurant_image} alt="" height="300" width="400" />
              <div className="bg-dark">
                <h1 className="text-center mt-3 fw-bold text-light">
                  {e.restaurant_name}
                </h1>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default RESTAURANTS;
