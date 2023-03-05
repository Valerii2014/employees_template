import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

        onUpdate = (e) => {
        const {onUpdateTerm} = this.props;
        this.setState(state => ({
            term: e.target.value
        }))
        setTimeout(() => {onUpdateTerm(this.state.term)})
    }

    render() {
        return (
            <input type="text"
            className='form-control serch-panel' 
            placeholder='Знайти працівника'
            onChange={(e) => this.onUpdate(e)}/>
        )
    }
    }

export default SearchPanel;