import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

class Home extends Component {
    render () {
        return (
            <section className = { Styles.homeComponent }>
                <h1>Monitoring System</h1>
                <div className = { Styles.menu }>
                    {/*<a href = '/press'>Press conference</a>*/}
                    {/*<a href = '/thanksgiving'>Thanksgiving Day</a>*/}
                    {/*<a href = '/hope'>Hope.UA</a>*/}
                    <a href = '/pcm'>PCM</a>
                </div>
            </section>
        );
    }
}

export default Home;
