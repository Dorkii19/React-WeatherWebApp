import React from 'react';
import { Container, Titulo, Texto, FormInput, Button } from './styles/appStyle';
import Warning from './components/warning';
import Card from './components/card';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudRain, faCloud, faSun, faSnowflake } from '@fortawesome/free-solid-svg-icons';
library.add(faCloudRain, faCloud, faSun, faSnowflake);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityValue: '',
      errorText: '',
      hasAnyError: false,
      hasSubmited: false,
      cidade: '',
      data: '',
      tempo: '',
      temperatura: '',
      unidade: '',
    };
    this.onClickWarning = this.onClickWarning.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClickWarning() {
    this.setState({ hasAnyError: false })
  }

  handleInputChange(e) {
    let value = e.target.value;
      this.setState({ cityValue: value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.cityValue === '') {
      this.setState({
        hasAnyError: true,
        errorText: 'O campo não pode ser vazio!',
        cityValue: ''
      }); 
    } else {
      let cidade = {cidade: this.state.cityValue};
      fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cidade),
      })
      .then(response => response.json())
      .then(data => {
          this.setState({ 
            hasSubmited: true,
            cidade: this.state.cityValue,
            data: data.data,
            tempo: data.tempo,
            temperatura: data.temperatura,
            unidade: data.unidade,
          });
            window.scrollBy(0, 670);
      })
      .catch((error) => {
        this.setState({
          hasAnyError: true,
          errorText: 'Houve um erro. Verifique a cidade digitada e tente novamente'
        })
      });
    }
  }

  render(){
    return (
      <div>
        <Container backgroundColor="#202020" id="card">
            { this.state.hasAnyError &&
              <Warning 
                onClickWarning={ this.onClickWarning }
                text={ this.state.errorText }
              />
            }
            <Titulo>Bem vindo ao Weather App</Titulo>
            <Texto>Digite o nome da sua cidade abaixo para ver a previsão do tempo (Brasil)</Texto>
            <form onSubmit={ this.handleSubmit }>
              <FormInput 
                placeholder="Digite sua Cidade" 
                value={ this.state.cityValue } 
                onChange={ this.handleInputChange }              
                />
              <Button type="submit">Ver</Button>
            </form>
        </Container>

      
        <Container backgroundColor="linear-gradient(to bottom, #202020, #282828, #303030)">
          { this.state.hasSubmited ?
            <Card 
              cidade={ this.state.cidade }
              data={ this.state.data }
              tempo={ this.state.tempo }
              temperatura={ this.state.temperatura }
              unidade={ this.state.unidade }
            /> :
            <Titulo>Aguardando entrada...</Titulo> 
          }
        </Container>
      </div>
    );
  }
}

export default App;
