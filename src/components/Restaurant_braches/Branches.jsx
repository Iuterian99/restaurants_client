import { gql, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
const restaurant_branches = gql`
  query restaurant_branches($restaurant_id: ID!) {
    restaurant_branches(restaurant_id: $restaurant_id) {
      branch_id
      branch_name
      branch_image
    }
  }
`;

function Branches() {
  const { id } = useParams();

  const { data } = useQuery(restaurant_branches, {
    variables: { restaurant_id: id },
  });

  return (
    <>
      <ul className="d-flex justify-content-evenly m-0 p-0 mt-3">
        {data &&
          data.restaurant_branches.map((e, i) => (
            <li
              className="list-unstyled border border-success border-2 p-bottom-2 shadow p-3 mb-2 bg-body rounded"
              key={i}
            >
              <img src={e.branch_image} alt="" height="250" width="300" />
              <div className="bg-dark">
                <h1 className="text-center mt-3 fw-bold text-light">
                  {e.branch_name}
                </h1>
              </div>
            </li>
          ))}
      </ul>
      <div className="bg-black p-2">
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

export default Branches;
