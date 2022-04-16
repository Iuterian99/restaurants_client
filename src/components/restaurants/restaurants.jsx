import { gql, useQuery } from "@apollo/client";
import { useParams, Link, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const { id } = useParams();
  const { data } = useQuery(Restaurants, {
    variables: { type_id: id },
  });

  return (
    <>
      <ul className="d-flex flex-wrap justify-content-evenly m-0 p-0 mt-3">
        {data &&
          data.restaurants.map((e, i) => (
            <li
              onClick={() => history.push(`/branches/${e.restaurant_id}`)}
              className="list-unstyled border border-success border-2 p-bottom-2 shadow p-3 mb-5 bg-body rounded"
              key={i}
            >
              <img src={e.restaurant_image} alt="" height="250" width="300" />
              <div className="bg-secondary">
                <h1 className="text-center mt-3 fw-bold text-light">
                  {e.restaurant_name}
                </h1>
              </div>
            </li>
          ))}
      </ul>
      <div className="bg-black p-3">
        <Link
          to="/"
          className="d-block fs-3 align-center text-light text-center"
        >
          ◀Go to first page
        </Link>
      </div>
    </>
  );
}

export default RESTAURANTS;
