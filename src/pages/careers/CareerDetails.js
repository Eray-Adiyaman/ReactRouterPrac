import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary: {career.salary} </p>
      <p>Location: {career.location}</p>

      <div className="details">
        <p>
          Sint ad fugiat Lorem cillum proident reprehenderit cillum veniam minim
          cupidatat amet aliqua.
        </p>
      </div>
    </div>
  );
}

//loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  return res.json();
};
