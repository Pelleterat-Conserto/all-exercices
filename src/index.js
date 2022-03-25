import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChronoComponent from './Chrono';
import reportWebVitals from './reportWebVitals';

const element = <h1 dangerouslySetInnerHTML={{
  __html: '<b>Bold</b> <i>Italic</i>',
}}/>;

const isString = myVar => {
  if (typeof myVar === 'string' || myVar instanceof String)
return true
else
  return false
}

const Video = ({ src, tracks = [], controls = true, ...rest }) => (
  <video src={isString(src) ? src : null} {...rest} controls={controls} >
    {Array.isArray(src) && src.map((s, i) => <source key={i} {...s} />)}
    {tracks.map((track, i) => <track key={i} default={i === 0} kind="subtitles" {...track} />)}
    <p>Sorry, your browser doesn't support embedded videos.</p>
  </video>
);

const elementVideo = <Video
src={[
  { type: 'video/webm', src: '/media/examples/friday.webm' },
  { type: 'video/mp4', src: '/media/examples/friday.mp4' },
]}
tracks={[
  { srcLang: 'en', src: '/media/examples/friday.en.vtt' },
  { srcLang: 'fr', src: '/media/examples/friday.fr.vtt' },
]}
/>

const ListItem = ({ children }) => <li>{children}</li>;

const List = ({ ordered = false, children, content = [] }) => {
  const ElementTag = ordered ? 'ol' : 'ul';

  return <ElementTag>
    {
      content.length > 0 ?
        content.map((item, i) => <ListItem key={i}>{item}</ListItem>)
        : children
    }
  </ElementTag>
};

const elementList = <List content={['wow', 'nice content', 'very pleased']} />

const GreenSquare = () => <div style={{backgroundColor: "green", width: "100px", height: "100px", marginTop: "20px", marginLeft: "20px"}} />

// class ClickCount extends React.Component {
//   state = {
//     count: 0,
//   };

//   add = () => this.setState({
//     count: this.state.count + 1, 
//   });

//   render() {
//     return <button onClick={this.add}>#{this.state.count}</button>;
//   }
// }

const ClickCount = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>#{count}</button>;
};

ReactDOM.render(
  <ChronoComponent />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
