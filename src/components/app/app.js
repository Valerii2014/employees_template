import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employes-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Valerii Fatchenko', salary: 20000, addSalary: false, rise: true, id: 1},
                {name: 'Eugenii Timoshenko', salary: 50000, addSalary: true, rise: false, id: 2},
                {name: 'Tetiana Pavlychenko', salary: 40000, addSalary: false, rise: false, id: 3},
                {name: 'Dmitry Olgich', salary: 35000, addSalary: true, rise: false, id: 4}
            ],
            maxId: 4,
            term: '',
            filterBtn: 'all'
        }
        
    }

    onToggleProps = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(el => {
                const newEl = {...el}
                if(el.id === id){
                 newEl[prop] = !(el[prop])
                }
                return newEl;
            })
        }))
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
                data: data.filter(item => item.id !== id)
            })
        )
    }

    addItem = (name, salary) => {
        this.setState(({data, maxId}) => {
            const newEmploye = {
                name: name,
                salary: salary,
                addSalary: false,
                rise: false,
                id: maxId + 1
            }
            const newData = data.map(el => {return el})
            newData.push(newEmploye)
            return {
                data: newData,
                maxId: maxId + 1
            }
        })
    }

    hadIncrease = () => {
        let i = 0;
        this.state.data.forEach(el => {
            if (el.addSalary === true){
                i++
            }
        })
        return i;
    }

    filterEmploye = (term) => {
        if(term.length === 0){
            return this.state.data
        }
        return this.state.data.filter(item => {
            return (item.name.toLowerCase()).indexOf(term) > -1
        })
    }

    filterWithBtn = (filterBtn, data) => {
        switch(filterBtn) {
            case 'rise': return data.filter(item => {return item.rise === true});
            case 'moreSalary': return data.filter(item => {return item.salary >= 40000});
            default: return data; 
        }
    }

    onUpdateBtn = (filter) => {
        this.setState(state => ({
            filterBtn: filter
        }))
    }

    onUpdateTerm = (term) => {
        const updateTerm = term.toLowerCase();
        this.setState(state => ({term: updateTerm}))
    }

    render() {
        const visibleEmploye = this.filterWithBtn(this.state.filterBtn,
                               this.filterEmploye(this.state.term))
        return(
            <div className='app'>
                <AppInfo
                totalEmploye={this.state.data.length}
                hadIncrease={this.hadIncrease}/>
                <div className="search-panel">
                    <SearchPanel
                    onUpdateTerm={this.onUpdateTerm}/>
                    <AppFilter
                    onUpdateBtn={this.onUpdateBtn}
                    filterBtn={this.state.filterBtn}/>
                </div>
                <EmployeesList 
                data={visibleEmploye}
                onDelete={this.deleteItem}
                onToggleProps={this.onToggleProps}/>
                <EmployeesAddForm
                onItem={this.addItem}/>
            </div>
        );
    }
   
}

export default App;