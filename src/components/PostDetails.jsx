/* eslint-disable react/prop-types */
export default function PostDetails(props) {
  return (
    <div className="card">
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
    </div>
  );
}
