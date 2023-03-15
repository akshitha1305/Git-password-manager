import './index.css'

const YourPassword = props => {
  const {isChecked, itemDetails, onDeleteItem} = props
  const {id, username, websiteName, password} = itemDetails

  const passwordItem = isChecked ? (
    <p className="para">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="imgstars"
    />
  )
  const logo = websiteName[0].toUpperCase()

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item-container">
      <div className="initial-section">{logo}</div>
      <div className="text-cont">
        <p className="heading">{websiteName}</p>
        <p className="para">{username}</p>
        {passwordItem}
      </div>
      <div className="button-cont">
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default YourPassword
