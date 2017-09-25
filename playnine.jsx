var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

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
let button;
switch(props.answerIsCorrect) {
	case true:
  	button = <button className="btn btn-success fa fa-check" onClick={props.acceptAnswer} ></button>
    break;
  case false:
  	button = <button className="btn btn-danger fa fa-times" ></button>
    break;
  default:
  	button = <button className="btn" disabled={props.selectedNumbers.length === 0} onClick={props.checkAnswer}>=</button>
    break;
}
	return (
  	<div className = "col-sm-2 text-center">
  	  {button}
      <br/>
  	  <button className="btn btn-sm btn-warning fa fa-refresh" onClick={props.redraw} disabled={props.redraws === 0}> {props.redraws} </button>

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
  	if(props.usedNumbers.indexOf(number) >=0) {
    return 'used';
    }
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

const DoneFrame = (props) => {
	return (
  	<div className="text-center">
  	  <h2>{props.doneStatus}</h2>
      <button onClick={() => props.newGame()} className="btn btn-success">Again!</button>
  	</div>
  )
}

class Game extends React.Component {
  componentDidMount = function() {
  	this.startTimer();
  };
  componentWillUnmount = function(){
    clearInterval(this.timer);
  }
  startTimer = () => {
  	this.timer = setInterval(this.updateTimeRemaining, 1000)
  }
	updateTimeRemaining = () => {
    this.updateDoneStatus()
    this.setState(prevState => ({
       timeRemaining: prevState.timeRemaining - 1
    }))
  }
	static randomNumber = () => 1 + Math.floor(Math.random() * 9);
  static initialState = () => ({
  	selectedNumbers: [],
    numberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null,
    timeRemaining: 30,
  })
  state = Game.initialState();

  newGame = () => {
  	this.startTimer();
    this.setState(Game.initialState())
    };
  selectNumber = (clickedNumber) => {
  	if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 || this.state.usedNumbers.includes(clickedNumber)) {return; }
  	this.setState(prevState => ({
    answerIsCorrect: null,
    	selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }
  unselectNumber =  (clickedNumber) => {
  	this.setState(prevState => ({
    	answerIsCorrect: null,
    	selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }
  checkAnswer = () => {
  	this.setState(prevState =>({
    	answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };
  acceptAnswer = () => {
  	this.setState(prevState => ({
    	usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfStars: Game.randomNumber(),
      timeRemaining: 30,
    }), () => this.updateDoneStatus());

  }
  redraw = () => {
  	if(this.state.redraws === 0){
    return;
    }
    this.setState(prevState => ({
    numberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    selectedNumbers:[],
    redraws: prevState.redraws - 1,
    timeRemaining: 30,
    }), () => this.updateDoneStatus());
  }
  possibleSolutions = ({numberOfStars, usedNumbers}) => {
  	const possibleNumbers = _.range(1,10).filter(number =>
    	usedNumbers.indexOf(number) === -1
    );
    return possibleCombinationSum(possibleNumbers, numberOfStars);
  }
  updateDoneStatus = () => {
  	this.setState(prevState => {
    	if(prevState.usedNumbers.length === 9){
        clearInterval(this.timer);
      	return {doneStatus: "You Win!"};
      } if (prevState.redraws === 0 && !this.possibleSolutions(prevState) ) {
          clearInterval(this.timer);
      		return {doneStatus: "Game Over!"};
      } if (prevState.timeRemaining <= 1 ) {
        clearInterval(this.timer);
      	return {doneStatus: "Game Over!"};
      }
    });
  }

	render() {
  	const {selectedNumbers, numberOfStars, answerIsCorrect, usedNumbers, redraws, doneStatus, newGame, timeRemaining, updateTimeRemaining} = this.state;
  	return (
    	<div className = "container">
    	  <h3>Play Nine</h3>
        <h4>Time left: {this.state.timeRemaining}</h4>
        <hr />
        <div className = "row">
          <Stars numberOfStars = {numberOfStars}/>
          <Button selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer} answerIsCorrect={answerIsCorrect} acceptAnswer={this.acceptAnswer} redraw={this.redraw} redraws={redraws}/>
          <Answer selectedNumbers={selectedNumbers} unselectNumber= {this.unselectNumber} />
    		</div>
        <br />
        {doneStatus ?
        	<DoneFrame doneStatus={doneStatus} newGame={this.newGame} /> :
          <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} usedNumbers={usedNumbers} />
        }
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
