import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class My12Form extends React.Component {

  state ={
    id: "",

  }

  onChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault ();
    console.log(this.state.id);
  }

  render(){

  return (
    <div>
      <form onSubmit={this.onSubmit}> 
        <TextField
          id="1"
          label="1"
          style={{ margin: 8 }}

          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
          onChange = {this.onChange}
        />
        <TextField
          id="2"
          label="2"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="3"
          label="3"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="4"
          label="4"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="5"
          label="5"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="6"
          label="6"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="7"
          label="7"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="8"
          label="8"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="9"
          label="9"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="10"
          label="10"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="11"
          label="11"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />
        <TextField
          id="12"
          label="12"
          style={{ margin: 8 }}
          margin="normal"
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {this.state.text}
        />


      </form>

      <Button
        variant="contained"
        color="primary"
      >
        Submit
                </Button>
    </div>
  );
};}
export default My12Form;
