import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyA1mIwvaKjMrBDmRENCn3jGd3jj_M_jtxg';

class App extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = { videos:[] };

    YTSearch({key: API_KEY, term: 'ReactJS'}, (videos) =>{
      this.setState({ videos });
    });
  }

  render(){
    return(
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
