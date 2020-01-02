import React from 'react';
import Emoji from './Emoji.json';


function searchEmoji(search){
	return (data) => {
        // console.log(data)
        // return data.keywords.toLowerCase().includes(search.toLowerCase()) ;
        if (data.title.toLowerCase().includes(search.toLowerCase())) {
            return true;
            }
        if (data.keywords.includes(search)) {
        return true;
        }
        return false;
	}
}

class EmojiList extends React.Component {
    constructor(){
        super();
        this.state = {jsondata:Emoji, search: '',copySuccess: ''}
    }
// this method for updateing input
changeInput(){
    this.setState({
        search:this.searchEmoji.value
    })
}

copyToClipboard = (symbol) => {
    console.log('text', symbol)
    var textField = document.createElement('textarea')
    textField.innerText = symbol
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  render() {
           const emojiList = this.state.jsondata.filter(searchEmoji(this.state.search)).slice(0, 20).map(emoji =>
            <div className="list"> 
            <li className="emoji-list">{emoji.symbol}  <span className="emoji-title">{emoji.title}</span> 
                {this.state.copySuccess}
                <span className="copys" onClick={()=>this.copyToClipboard(emoji.symbol)}>Click to Copy</span>
            </li>
            </div>) 
            
        return(
            <div className="search-input">
               <form>
               <input placeholder="Search..." ref={input => this.searchEmoji = input} onChange={this.changeInput.bind(this)} className="input" />
               </form>
               <div className="searchEmoji">{emojiList}</div>
            </div> 
           
        )
        

    }
}
export default EmojiList;



