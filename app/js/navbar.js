import React, {Component} from 'react';

export default class Navbar extends Component {
	render() {
        return(
		<nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
  			<div className="container">
				<div className="navbar-header">
					<a className="navbar-brand qdb-nav-item" href="#">
						<img alt="small-logo" className="qdb-nav-item" id="qdb-logo" src="/qdb/images/small-logo.png" />
						<p className="qdb-nav-item" id="qdb-title">SSE QDB</p>
					</a>
                    <div className="collapse navbar-collapse qdb-nav-item" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav">
                              <li className="active"><a href="#">Quotes</a></li>
                              <li><a href="#">Tags</a></li>
                          </ul>
                     </div> {/* /navbar-collapse */}
				</div> {/* /navbar-header */}
                <div className="navbar-right">
                    <form className="navbar-form navbar-left" role="search">
                      <div className="form-group">
                          <input type="text" className="form-control" placeholder="Search" />
                      </div>
                    </form>
                    <div className="collapse navbar-collapse qdb-nav-item" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#">
                                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                            </a></li>
                        </ul>
                    </div> {/* /navbar-collapse */}
                </div> {/* /navbar-right */}
			</div> {/* /container */}
		</nav>
        );
	}
}
