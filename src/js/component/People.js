import React from "react";
import { Context } from "../store/appContext";

export class People extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.peopleStorage.map((item, index) => {
								return (
									<div className="col-md-4" key={index}>
										<div className="card">
											<img src="..." className="card-img-top" alt="..." />
											<div className="card-body">
												<h5 className="card-title">{item.name}</h5>
												<p className="card-text">
													Some quick example text to build on the card title and make up the
													bulk of the cards content.
												</p>
												<a href="#" className="btn btn-primary">
													Go somewhere
												</a>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
