import React from 'react';
import * as axios from 'axios';
import classes from './Users.module.css';


class Users extends React.Component {

  constructor(props) {
    super(props);

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => { 
          this.props.setUsers(response.data.items);       

        });
  }

  render() { 
    
        return (
        <div>     
      {
        this.props.users.map(u =><div key={u.id}>
                debugger

          <div className={classes.wrap}>
            <div>
              
              <img className={classes.profileImg} src="" alt="" />
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
            <div>hey</div>
          </div>
        </div>        
        )
      }
    </div>
        )
  }
}


export default Users;
