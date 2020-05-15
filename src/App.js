import React from 'react';
import { Container, Titulo, Texto, FormInput, Button } from './styles/appStyle';
import Warning from './components/warning';
import Card from './components/card';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudShowersHeavy, faCloud, faSun, faSnowflake } from '@fortawesome/free-solid-svg-icons';
library.add(faCloudShowersHeavy, faCloud, faSun, faSnowflake)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.state = {
      cepValue: '',
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
    // Verifica se é um numero
    if (value % 1 === 0){
      this.setState({ cepValue: value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.cepValue === '') {
      this.setState({
        hasAnyError: true,
        errorText: 'O CEP não pode ser vazio!',
        cepValue: ''
      }); 
    } else {
      const cep = {cep: this.state.cepValue};
      fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cep),
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          cepValue: '',
          hasSubmited: true,
          cidade: '',
          data: '',
          tempo: '',
          temperatura: '',
          unidade: '',
        });
        window.scrollBy(0, 670);
      })
      .catch((error) => {
        this.setState({
          hasAnyError: true,
          errorText: 'Houve um erro, verifique seu CEP e tente novamente'
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
                onClickWarning={this.onClickWarning}
                text={this.state.errorText}
              />
            }
            <Titulo>Bem vindo ao Weather App</Titulo>
            <Texto>Digite seu CEP abaixo para ver a previsão do tempo para sua cidade (Brasil)</Texto>
            <form onSubmit={this.handleSubmit}>
              <FormInput 
                placeholder="Digite seu CEP" 
                maxLength="11" 
                value={this.state.cepValue} 
                onChange={this.handleInputChange}              
                />
              <Button type="submit">Ver</Button>
            </form>
        </Container>

      
        <Container backgroundColor="linear-gradient(to bottom, #202020, #282828, #303030)">
          { this.state.hasSubmited ?
            <Card 
              cidade={this.state.cidade}
              data={this.state.data}
              tempo={this.state.tempo}
              temperatura={this.state.temperatura}
              unidade={this.state.unidade}
            /> :
            <Titulo>Aguardando CEP...</Titulo> 
          }
        </Container>
      </div>
    );
  }
}

export default App;
