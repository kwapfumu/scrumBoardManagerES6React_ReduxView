"use strict";
/** About page panel done with react-bootstrap...**/
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

const aboutPanelInstance = (
	<Grid>
		<Row>
			<Col xsOffset={2} smOffset={2} mdOffset={2} lgOffset={2} xs={10} sm={10}  md={10}  lg={10} >
				<Panel default id="aboutPanel">
					<Col xsOffset={1} smOffset={1} mdOffset={1} lgOffset={1} xs={10} sm={10}  md={10}  lg={10} >
						<p><h4>This was a project implemented by <a href="https://github.com/kwapfumu">pfumu</a> in her journey to grasping the MERN stack and tailoring UIs using Reactjs and React-bootstrap i.e.
								<ListGroup>
									<ListGroupItem>grasping and hopefully mastering Reactjs & Redux,</ListGroupItem>
									<ListGroupItem>improving her javascript ES6 functional programming skills,</ListGroupItem>
									<ListGroupItem>practising testing with jasmine and Jest,...</ListGroupItem>
								</ListGroup>
								<p><h4>The source code can be found <a href="https://github.com/kwapfumu/scrumBoardManagerES6MERNapp">here</a></h4></p>
							</h4>
						</p>
					</Col>
				</Panel>
			</Col>
		</Row>
	</Grid>
);

export default aboutPanelInstance;