import React from 'react';
import { Container, Titulo, Texto, FormInput, Button } from './styles/appStyle';
import Warning from './components/warning';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cepValue: '',
      hasAnyError: false,
      errorText: '',
    };

    this.onClickWarning = this.onClickWarning.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onClickWarning() {
    this.setState({
      hasAnyError: false
    })
  }

  handleInputChange(e) {
    this.setState({
      cepValue: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.cepValue === 0 || this.state.cepValue > 11) {
      this.setState({
        hasAnyError: true,
        errorText: 'Seu CEP deve ter entre 0 e 12 caracteres!',
      })
    }
  }

  render(){
    return (
      <Container>
          { this.state.hasAnyError &&
            <Warning 
            onClickWarning={this.onClickWarning}
            text={this.state.errorText}
            />
          }
          <Titulo>Bem vindo ao Weather App</Titulo>
          <Texto>Digite seu CEP abaixo para ver a previsão do tempo para sua cidade!</Texto>
          <form onSubmit={this.handleSubmit}>
            <FormInput 
              placeholder="Digite seu CEP" 
              maxLength="8" 
              value={this.state.cepValue} 
              onChange={this.handleInputChange}              
              />
            <Button type="submit">Ver</Button>
          </form>
      </Container>
    );
}
}

export default App;
