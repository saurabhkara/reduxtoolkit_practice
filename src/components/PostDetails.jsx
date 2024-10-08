/* eslint-disable react/prop-types */
export default function PostDetails(props) {
  return (
    <div className="card">
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
      <div className="card-actions">
        <button className="edit-button" onClick={props.onEdit}>
          Edit
        </button>
        <button className="delete-button" onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
