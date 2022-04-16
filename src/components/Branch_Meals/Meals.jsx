import { gql, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal/Modal";

const branch_meals = gql`
  query branch_meals($branch_id: ID!) {
    branch_meals(branch_id: $branch_id) {
      meal_id
      meal_name
      meal_price
      meal_image
    }
  }
`;

function Meals() {
  const { id } = useParams();
  const [order, setOrder] = useState(false);

  const { data } = useQuery(branch_meals, {
    variables: { branch_id: id },
  });

  const handleOrder = (e) => {
    // setOrder(true);
    e.preventDefault();
    const id = e.target.id;
    const selectedMeal = data.branch_meals.find((e) => e.meal_id == id);
    console.log(order);
  };

  return (
    <div className="container-fluid">
      <ul className="d-flex flex-wrap justify-content-evenly m-0 p-0 mt-2">
        {data &&
          data.branch_meals.map((e, i) => (
            <li
              className="list-unstyled border border-success border-2 p-bottom-2 shadow p-1 mb-2 bg-body rounded"
              key={i}
            >
              <img
                className="d-block mx-auto ig-responsive"
                src={e.meal_image}
                alt=""
                height="250"
                width="300"
              />
              <div className="bg-secondary">
                <h1 className="text-center mt-3 fw-bold text-light">
                  {e.meal_name}
                </h1>
                <h2 className="text-center mt-3 fw-bold text-light">
                  {e.meal_price} so'm
                </h2>
              </div>
              <button
                className="btn btn-success d-block mx-auto"
                type="button"
                id={e.meal_id}
                onClick={() => setOrder(true)}
              >
                Buyurtma Berish ✔
              </button>
            </li>
          ))}
      </ul>
      {order && data && (
        <div className="w-50 border border-success border-3 p-2 d-block mx-auto">
          <button onClick={setOrder(false)} className="">
            X
          </button>
          <form className="">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ismingizni Kiriting:"
              />
            </div>
            <div className="mb-3">
              <input
                type="phone"
                className="form-control"
                placeholder="Tel Raqamingiz:"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Manzilingiz:"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-50 fw-bold fs-5 d-block mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <div className="bg-black p-2">
        <Link
          to="/"
          className="d-block fs-3 align-center text-light text-center"
        >
          ◀Go to first page
        </Link>
      </div>
    </div>
  );
}

export default Meals;
