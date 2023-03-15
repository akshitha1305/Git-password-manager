import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import YourPasswords from '../YourPasswords/index'

class AddPassword extends Component {
  state = {
    isChecked: false,
    username: '',
    websiteName: '',
    password: '',
    searchInput: '',
    itemsList: [],
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {username, websiteName, password} = this.state

    const newItem = {
      id: v4(),
      username,
      websiteName,
      password,
    }
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newItem],
      username: '',
      password: '',
      websiteName: '',
    }))
  }

  onDeleteItem = id => {
    const {itemsList} = this.state
    const updatedList = itemsList.filter(each => each.id !== id)

    this.setState({itemsList: updatedList})
  }

  updateSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsiteName = event => {
    this.setState({
      websiteName: event.target.value,
    })
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePasswordName = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  render() {
    const {
      isChecked,
      username,
      websiteName,
      itemsList,
      searchInput,
      password,
    } = this.state
    const updatedList = itemsList.filter(each =>
      each.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const updatedListLength = updatedList.length
    return (
      <div>
        <div className="container-1">
          <img
            alt="password manager"
            className="password-manager-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          />
          <form className="add-new-password" onSubmit={this.onClickAddButton}>
            <h1 className="add-pass-heading">Add New Password</h1>
            <div className="website-container">
              <img
                className="website"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                onChange={this.onChangeWebsiteName}
                value={websiteName}
                className="website-input"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="website-container">
              <img
                className="website"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                onChange={this.onChangeUserName}
                value={username}
                className="website-input"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="website-container">
              <img
                className="website"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
              />
              <input
                onChange={this.onChangePasswordName}
                value={password}
                className="website-input"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="add-butt-container">
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="container-2">
          <div className="before-horizontal-line">
            <div className="count-container">
              <h1 className="para">Your Passwords</h1>
              <p className="para count"> {updatedListLength}</p>
            </div>
            <div className="website-container">
              <img
                className="search"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                onChange={this.updateSearchList}
                value={searchInput}
                className="search-input"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="after-hor-line">
            <div className="checkbox-container">
              <input
                checked={isChecked}
                onChange={this.onChecked}
                id="checkboxId"
                className="checkbox"
                type="checkbox"
              />
              <label htmlFor="checkboxId" className="labelText">
                Show Passwords
              </label>
            </div>
            {updatedListLength === 0 ? (
              <>
                <img
                  alt="no passwords"
                  className="no-password-img"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                />
                <p className="uorder-list-para">No Passwords</p>
              </>
            ) : (
              <ul className="items">
                {updatedList.map(each => (
                  <YourPasswords
                    onDeleteItem={this.onDeleteItem}
                    key={each.id}
                    isChecked={isChecked}
                    itemDetails={each}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default AddPassword
