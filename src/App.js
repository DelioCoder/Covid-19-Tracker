import React from 'react';

//COMPONENTS
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import { Cards, Chart, CountryPicker } from './components';

//STYLES
import styles from './App.module.css';

//API
import { fetchData } from './api';

//IMAGE
import coronaImage from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){

        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
        //console.log(data);

    }

    handleCountryChange = async (country) =>{
        
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render(){

        const { data, country } = this.state;

        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <code>
                    Hecho por @ProgrammingGeek02 
                    <a href="https://github.com/ProgrammingGeek02" style={{textDecoration: 'none'}}> Github</a>
                </code>
            </div>
        )
    }
}

export default App;