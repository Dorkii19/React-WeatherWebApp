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
      })
    } else {
      console.log("ok");
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
              maxLength="11" 
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