import React, {Component} from 'react';
import {StatusBar, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Header, Container, Icon} from 'native-base';


export class HomeScreen extends Component{
        state={
            isReady : false,
        };

        async componentWillMount(){
            await Expo.Font.loadAsync({
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            });
            this.setState({isReady:true});
        }

        render() {
            if(!this.state.isReady){
                return <Expo.AppLoading/>;
            }
            return(
                <Container>
                    <Header style={{paddingTop: getStatusBarHeight(), height: 50 + getStatusBarHeight()}}>
                        <StatusBar/>
                        <Left>
                            <Button transparent onPress={()=> this.props.navigation.navigate("HomeScreen")}>
                               <Icon name='home' transparent/>
                            </Button>
                        </Left>
                    </Header>
                </Container>



            );
        }
}