import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationEvents } from "react-navigation";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { fetchConfig } from '../../redux/App/app.actions';

export class ChecksScreen extends Component<any, any> {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        // console.log("check screen unmounted");
    }

    componentDidMount = async () => {
        this.checkScreen();

        // if (this.props.app.AppVersion != "") {
        //     this.checkScreen();
        // } else {
        //     await this.props.fetchConfig();
        //     this.checkScreen();
        // }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavigationEvents onDidFocus={() => this.componentDidMount()} onDidBlur={() => this.componentWillUnmount()} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <ActivityIndicator size={32} color="fff" />
                </View>
            </View>
        );
    }

    checkScreen = async () => {
        try {
            if (this.props.app) {
                if (!this.props.app.NewApp) {
                    this.props.navigation.navigate('Auth');
                }
                else {
                    this.props.navigation.navigate('Permissions');
                }
            }
        } catch (error) {
            this.props.navigation.navigate('Permissions');
        }
    };
}

const mapStateToProps = (state) => {
    const { app, user } = state;
    return { app, user }
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(ChecksScreen);
