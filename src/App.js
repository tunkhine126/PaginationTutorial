import React, { Component } from "react";
import "./App.css";
import Users from './Users'
import { API } from './constants'
import ReactLoading from 'react-loading'
import PaginationControls from './PaginationControls'

class App extends Component {

  state = {
    allUsers: [],
    isLoading: true,

    currentPage: 1,
    per_page: 10, 
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchAPI()
    }, 1200);
  }

  fetchAPI = () => {
    fetch(API)
      .then(res => res.json())
      .then(res => this.setState({
        allUsers: res,
        isLoading: false
      })
    )
  }
  
  handleCLick = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })
  }

  render() {
    const currentPage = this.state.currentPage;
    const PerPage = this.state.per_page;
    const allUsers = this.state.allUsers;

    const indexOfLastUser = currentPage * PerPage;
    const indexOfFirstUser = indexOfLastUser - PerPage;
    const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
      <div className="App">
        <h2 className="App-header">User posts</h2>
          {this.state.isLoading ? (
            <div>
              <ReactLoading className="loading" type={"bars"} color={"grey"} />
            </div>
          ) : (
            <div>
              <PaginationControls
                PerPage={PerPage}
                usersLength={allUsers.length}
                handleCLick={this.handleCLick}
              />
              <Users users={currentUsers} />
            </div>
            )
          }
      </div>
    );
  }
}

export default App;
