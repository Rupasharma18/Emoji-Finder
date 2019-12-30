import React from 'react';
import Emoji from './Emoji.json';

function searchEmoji(search){
	return (data) => {
        // console.log(data)
		return data.keywords.toLowerCase().includes(search.toLowerCase()) ;
	}
}

class EmojiList extends React.Component {
    constructor(props){
        super(props);
        this.state = {jsondata:Emoji, search: '', copySuccess: ''}
    }
// this method for updateing input
changeInput(){
    this.setState({
        search:this.searchEmoji.value
    })
}
// this method for copy cilpboard
copyToClipboard(e){
    this.li.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

    render() {
           const emojiList = this.state.jsondata.filter(searchEmoji(this.state.search)).slice(0, 20).map(emoji =>
            <div className="list"> <li className="emoji-list"> {emoji.symbol} {emoji.title}</li></div>) 
            // console.log(emojiList)
            
        return(
        
            <div className="search-input">
               <form>
               <input placeholder="Search..." ref={input => this.searchEmoji = input} onChange={this.changeInput.bind(this)} className="input" />
               </form>
               <div className="searchEmoji">{emojiList}</div>
               
               {/* {this.state.copySuccess} */}
            </div> 
           
        )
        

    }
}
export default EmojiList;



