import React from 'react';
import { question } from '../../../question.js';

export default class survey extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			radioValue: {},
		};
	}

	handleOnChange(e, key){
		let value = this.state.radioValue;
		value[key] = e;
		this.setState({
			radioValue: value,
        });
    };

    submitFrom =(radioValue)=>{
		// console.log(this.state.radioValue);
		localStorage.setItem('answers', JSON.stringify(this.state.radioValue))
        this.props.history.push("success")
    }
    
	render() {
		return (
			<div>
				{question.map((e, i) => {
					return (
						<div key={i}>
							<div >
								<label> question:{e.quetionName}</label>
								<br />
								<input
									type="radio"
									name={i + 'answer'}
									value={e.option1}
									onChange={() => this.handleOnChange(e.option1, i + 'answer')}
								/>{' '}
								{e.option1} <br />
								<input
									type="radio"
									name={i + 'answer'}
									value={e.option2}
									onChange={() => this.handleOnChange(e.option2, i + 'answer')}
								/>
								{e.option2} <br />
								<input
									type="radio"
									name={i + 'answer'}
									value={e.option3}
									onChange={() => this.handleOnChange(e.option3, i + 'answer')}
								/>
								{e.option3} <br />
								<input
									type="radio"
									name={i + 'answer'}
									value={e.option4}
									onChange={() => this.handleOnChange(e.option4, i + 'answer')}
								/>
								{e.option4} <br />
							</div>
						</div>
					);
				})}
				<button onClick={()=>this.submitFrom()}>submit</button>
			</div>
		);
	}
}
