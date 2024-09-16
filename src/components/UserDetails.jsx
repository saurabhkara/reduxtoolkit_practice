/* eslint-disable react/prop-types */

export default function UserDetails(props) {
  return (
    <div className="user-card">
      <h2 className="user-name">{props.name}</h2>
      <p className="user-email">{props.email}</p>
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
