import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.scss";
import Button from "components/Button";

const Result = ({
	winner,
	player1Label,
	player2Label,
	onClickPlay,
	loading
}) => (
	<div styleName="Result">
		{winner !== null &&
			!loading && (
				<div className="winner">
					<span>
						{winner === 0
							? "SERI"
							: `${winner === 1 ? player1Label : player2Label} MENANG`}
					</span>
				</div>
			)}
		<div className="play">
			<Button disabled={loading} onClick={onClickPlay}>
				BERMAIN {(loading || winner !== null) && "LAGI"}
			</Button>
		</div>
	</div>
);

export default CSSModules(Result, styles);
