import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewEmloye = (e) => {
        const {name, salary} = this.state;
        e.preventDefault();
        if(name.length > 2 && 
          (typeof name) === 'string' &&  
          (typeof +salary) === 'number' &&
          +salary > 5000){
            this.props.onItem(name, salary)
          }
        
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Додайте нового працівника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => this.addNewEmloye(e)}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Його ім'я?" 
                        value={name}
                        name='name'
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П у грн?" 
                        value={salary}
                        name='salary'
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                    className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
    }
    
}

export default EmployeesAddForm;