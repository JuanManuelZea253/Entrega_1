import './Modulo.css';
import React from 'react';

class Modulo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: {
        name: "",
        password: "",
      }
    }
  }


  render() {
    console.log(this.state)
    

    return (
      
      <div className="AppInit">
        <form className="login">
          <ul>
            <li>
              
                <label for="name">Nombre</label><br/>

              <input
                type="text"
                onChange={(e) => this.setState({ inputFields: { "name": e.target.value, "password": this.state.inputFields.password } })}
                id="name"
              /><br/>
            </li>
            <li>
                <label for="passWord"> Contraseña </label><br/>
              <input
                type="password"
                onChange={(e) => this.setState({ inputFields: { "name": this.state.inputFields.name, "password": e.target.value } })}
                id="passWord"
              /><br/>

            </li>
            <li>
              <button
                type="submit"
                id="validar"
              >ingreso</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Modulo;
