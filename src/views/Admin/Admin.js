import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import franchises from '../../franchises.json';
import './admin.css';

class Admin extends Component {
    constructor() {
        super();

        this.state = {

        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput( e ) {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    onSave() {
        const { name, location, title, ingredient1, ingredient2, ingredient3, image } = this.state

        franchises.push({
            name,
            location,
            menu: [
                {
                    title,
                    ingredients: [ ingredient1, ingredient2, ingredient3 ],
                    image
                }
            ]
        })

        this.props.history.push(`/location/${location}`)
    }

    render() {
        return (
            <div className='admin-main'>
                <Header />

                <section className='admin-body'>
                    <div className='admin-create'>
                        <h2>
                            Create Your Franchise
                            <button onClick={() => this.onSave()}>Save Franchise</button>
                        </h2>

                        <div className='admin-inputs'>
                            <section className='admin-i-col'>
                                Franchise Name:
                                <input value={this.state.name} name='name' onChange={this.handleInput} />
                                Franchise Location:
                                <input value={this.state.location} name='location' onChange={this.handleInput} />
                            </section>

                            <section className='admin-i-col'>
                                Menu Item Title
                                <input value={this.state.title} name='title' onChange={this.handleInput} />
                                Ingredient 1
                                <input value={this.state.ingredient1} name='ingredient1' onChange={this.handleInput} />
                                Ingredient 2
                                <input value={this.state.ingredient2} name='ingredient2' onChange={this.handleInput} />
                                Ingredient 3
                                <input value={this.state.ingredient3} name='ingredient3' onChange={this.handleInput} />
                                Menu Item Image
                                <input value={this.state.image} name='image' onChange={this.handleInput} />
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Admin;