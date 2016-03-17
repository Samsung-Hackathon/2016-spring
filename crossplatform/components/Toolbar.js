import React, { Component, PropTypes, Text, View,StyleSheet } from 'react-native';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';


export default class Toolbar extends Component {

    static contextTypes = {
        navigator: PropTypes.object
    };

    static propTypes = {
        onIconPress: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    componentDidMount = () => {
    };

    componentWillUnmount() {
    }

    render() {
        const { navigator } = this.context;
        const { theme, counter } = this.state;
        const { onIconPress } = this.props;

        return (
            <MaterialToolbar
                title={navigator && navigator.currentRoute ? navigator.currentRoute.title : 'Hackathon'}
                primary={theme}
                icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
                actions={[{
                    icon: 'warning',
                    badge: { value: counter, animate: true },
                    onPress: this.increment
                }]}
                rightIconStyle={{
                    margin: 10
                }}
                style={{
                  marginTop: 30
                }}
            />
        );
    }
}
