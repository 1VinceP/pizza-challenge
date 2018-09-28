import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import franchises from '../../franchises.json';
import './locationPage.css';

class LocationPage extends Component {
    constructor() {
        super();

        this.state = {
            locationInfo: {
                name: '',
                location: '',
                menu: []
            },
            selectedItem: {
                title: '',
                ingredients: [],
                image: ''
            }
        }

        this.onSelectItem = this.onSelectItem.bind(this)
    }

    componentDidMount() {
        this.findInfo()
    }

    componentDidUpdate( prevProps ) {
        if( this.props.match.params.city !== prevProps.match.params.city ) {
            this.findInfo()
        }
    }

    findInfo() {
        let locationInfo = franchises.find( fran =>  fran.location === this.props.match.params.city )

        this.setState({
            locationInfo,
            selectedItem: locationInfo.menu[0]
        })
    }

    onSelectItem( item ) {
        this.setState({ selectedItem: item })
    }

    renderInfo() {
        const { title, ingredients, image } = this.state.selectedItem

        const ingredientList = ingredients.map( (ing, i) => (
            <p key={i}>{ing}</p>
        ) )

        return (
            <div className='location-d-info'>
                <img src={image} />

                <div className='location-d-i-container'>
                    <h2>{title}</h2>
                    {ingredientList}
                </div>
            </div>
        )
    }

    render() {
        const { name, location, menu } = this.state.locationInfo

        console.log( franchises )

        return (
            <div>
                <Header />

                <section className='location-body'>
                    <Menu items={menu} onSelect={this.onSelectItem} />

                    <div className='location-details'>
                        <h2 className='location-d-name'>{name}</h2>
                        <p className='location-d-loc'>{location}</p>

                        {this.renderInfo()}
                    </div>
                </section>
            </div>
        )
    }
}

export default LocationPage;