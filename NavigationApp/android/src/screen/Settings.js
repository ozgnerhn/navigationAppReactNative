import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';

export default class Settings extends Component {
    render() {
        return (            
            <Container>
            
            <Content>
              <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: "#FF9501" }}>
                    <Icon active name="notifications" />
                  </Button>
                </Left>
                <Body>
                  <Text>Bildirimleri Sessize Al</Text>
                </Body>
                <Right>
                  <Switch value={false} />
                </Right>
              </ListItem>              
              <Button 
                block dark
                onPress={() => this.props.navigation.navigate('SettingsModal')}>
                    <Text>Hakkında</Text>
              </Button> 
                                         
            </Content>
          </Container>
        );
    }
}
