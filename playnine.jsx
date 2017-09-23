const Stars = (props) => {

  let stars =[];
  for (let i=0; i < props.numberOfStars; i++) {
		stars.push(<i className="fa fa-star"></i>);
  }
	return (
  	<div className = "col-sm-5">
			{stars}
  	</div>
  )
}

const Button = (props) => {
	return (
  	<div className = "col-sm-2">
  	  <button className="btn" disabled={props.selectedNumbers.length === 0}>=</button>
  	</div>
  )
}

const Answer = (props) => {
	return (
  	<div className = "col-sm-5">
    	{props.selectedNumbers.map((number, i) =>
      	<span key={i} className="bw" onClick={() => props.unselectNumber(number)}>{number}</span>
      )}

  	</div>
  )
}

const Numbers = (props) => {
	const numberClassName = (number) => {
  	if(props.selectedNumbers.indexOf(number) >=0) {
    return 'selected';
    }
  }
	return (
  	<div className = "card text-center">
  	  <div>
					{Numbers.list.map((number, i) =>
            <span key={i} className={numberClassName(number)} onClick={() => props.selectNumber(number)}>{number}</span>
          )}
  	  </div>
  	</div>
  )
}
Numbers.list = arrayOfNumbers = _.range(1,10);

class Game extends React.Component {
  state = {
		selectedNumbers: [],
    numberOfStars: 1+ Math.floor(Math.random()*9)
  };
  selectNumber = (clickedNumber) => {
  	if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return; }
  	this.setState(prevState => ({
    	selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }
  unselectNumber =  (clickedNumber) => {
  	this.setState(prevState => ({
    	selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }
	render() {
  	const {selectedNumbers, numberOfStars} = this.state;
  	return (
    	<div className = "container">
    	  <h3>Play Nine</h3>
        <hr />
        <div className = "row">
          <Stars numberOfStars = {numberOfStars}/>
          <Button selectedNumbers={selectedNumbers} />
          <Answer selectedNumbers={selectedNumbers} unselectNumber= {this.unselectNumber}/>
    		</div>
        <br/>
        <Numbers selectedNumbers={selectedNumbers} selectNumber= {this.selectNumber} />
    	</div>
    )
  }
}
class App extends React.Component {
	render() {
  	return (
    	<Game />
      )
  }
}

ReactDOM.render(<App />, mountNode);
