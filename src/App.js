import React from "react";
import styled from "styled-components";
import { Container, Content } from "./component/components/common";
import Sky from "./component/components/Sky";
import Text from "./component/components/TextCanvas";
import Footer from "./component/components/Footer";
import music from './assets/ido.mp3'
const Button = styled.button`
  border-radius: 4px;
  border: none;
  padding: .5rem;
  margin: .5rem 1rem;
  font-size: .81rem;
  font-family: 'Colfax Regular', "Helvetica Neue",HelveticaNeue,Helvetica,sans-serif;
  background-color: #0076fe;
  color: #fff;
  cursor:pointer;
  position: absolute;
  bottom: 0;
  z-index: 9999;

  ${props => props.type === 'disabled' && {
    backgroundColor: '#c1c1c1',
    color: '#000',
    // cursor:'not-allowed',
    left: '100px'
  }}
  
`;

export default class IndexPage extends React.PureComponent {
  componentDidMount(){
  }

  playAudio(e) {
    console.log({ e })
    e.preventDefault();
    var x = document.getElementById("myAudio");
    x.muted = false;
    x.play();
  }

  pauseAudio(e) {
    e.preventDefault();
    var x = document.getElementById("myAudio");
    x.pause();
  }
  render() {
    return (
      <Container>
        <Content>
        <audio controls autoPlay loop muted hidden id="myAudio">
          <source src={music} type="audio/mp3" autoPlay={true}/>
          Your browser does not support the audio element.
        </audio>
          <Button onClick={e => this.playAudio(e)}>Play Music</Button>
          <Button onClick={e => this.pauseAudio(e)} type="disabled">Pause Music</Button>
          <Sky />
          <Text />
          <Footer />
        </Content>
      </Container>
    );
  }
}
