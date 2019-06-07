import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list';
import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY ="api_key=c845612d3d0290c28a05b9fdac829ab0"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  compomentWillMount(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
      console.log('',response);
    });
  }

  render() {
    return (
        <div>
            <SearchBar/>
            <VideoList/>
        </div>

    );
  }
}

export default App;
