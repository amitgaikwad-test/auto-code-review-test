import React,{Component} from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
import './App.css';
import { AppRoutes } from './app-routes';

type AppProps = {
  rotating?: boolean,
  stopAction? :any,
  startAction? : any
}
type AppState={
  cities: any
}

class App extends Component<AppProps, AppState>  {
  constructor(props:any){
    super(props);
    this.state= { cities: []};
    this.onLogoClick = this.onLogoClick.bind(this);
  }

  componentDidMount(){
    axios.get('http://demo0116564.mockable.io/cities').then((response : any)=>{
      this.setState({cities: response.data})
    })
  }

  onLogoClick(){
    if(this.props.rotating){
      this.props.stopAction();
    }else{
      this.props.startAction()
    } 
  }
  render(){
    return (
          <AppRoutes></AppRoutes>
 );  
  }
}

const mapStateToProps = (state : any) => ({
  ...state
});

const mapDispatchToProps = (dispatch: any) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
