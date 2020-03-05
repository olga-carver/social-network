import React from 'react';
import * as axios from 'axios';
import classes from './Users.module.css';


class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

render() {

  let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className={classes.pages}>
        {
          pages.map(p => {
          return <li onClick={ () => {this.onPageChanged(p);}} className={`${classes.page} ${this.props.currentPage === p && classes.activePage}`}>{p}</li>
          })
        }
      </ul>     
      {
        this.props.users.map(u => <div key={u.id}>
          <div className={classes.wrap}>
            <div className={classes.imgFollow}>

              <img className={classes.profileImg} src={u.photos.small} alt="" />
              {
                u.followed
                  ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                  : <button onClick={() => this.props.follow(u.id)}>Follow</button>

              }
            </div>
            <div>
              <p className={classes.name}>{u.name}</p>
              <p>{u.status}</p>
            </div>
            {/* <div>hey</div> тут должен быть показан город */}
          </div>
        </div>
        )
      }
    </div>
  )
}
}


export default Users;
