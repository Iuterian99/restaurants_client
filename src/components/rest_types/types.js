import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
const RestTypes = gql`
  query {
    restaurant_types {
      type_id
      type_name
      type_image
    }
  }
`;

function Types() {
  const history = useHistory();
  const { data, loading, error } = useQuery(RestTypes);
  return (
    <div className="container">
      <ul className="d-flex flex-wrap justify-content-evenly m-0 p-0 mt-3">
        {loading && <>loading</>}
        {error && <>error</>}
        {data &&
          data.restaurant_types.map((e, i) => (
            <li
              onClick={() => history.push(`/type/${e.type_id}`)}
              className="list-unstyled border border-success border-2 p-bottom-2 shadow p-3 mb-5 bg-body rounded"
              key={i}
            >
              <img
                className="img-responsive"
                src={e.type_image}
                alt=""
                height="300"
                width="400"
              />
              <div className="bg-dark p-2">
                <h1 className="text-center mt-3 fw-bold text-light">
                  {e.type_name}
                </h1>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Types;
