import React from 'react';

export default class Navbar extends Component {
	render() {
		<nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
  			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">
						<img alt="small-logo" src="assets/small-logo.png" />
						SSE QDB
					</a>
					<button type="button" class="btn btn-default navbar-btn">Quotes</button>
                    <button type="button" class="btn btn-default navbar-btn">Tags</button>
				</div>
			</div>
		</nav>
	}
}
