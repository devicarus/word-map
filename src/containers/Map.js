import React, { memo, useContext } from "react";
import {
	ZoomableGroup,
	ComposableMap,
	Geographies,
	Geography
} from "react-simple-maps";

import { ThemeContext } from 'grommet'

import useWindowDimensions from "../util/useWindowDimensions"

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent, showModal, data }) => {
	const { height, width } = useWindowDimensions();
	const theme = useContext(ThemeContext)

	return (
		<>
			<ComposableMap data-tip="" height={height} width={width} projectionConfig={{ scale: width / 6 }}>
				<ZoomableGroup
					onMoveStart={() => {
						setTooltipContent("")
					}}
					onZoomStart={() => {
						setTooltipContent("")
					}}
				>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map(geo => {
								const { NAME } = geo.properties;
								const have = data[NAME] ? true : false

								return <Geography
									key={geo.rsmKey}
									geography={geo}
									onMouseEnter={() => {
										setTooltipContent(NAME);
									}}
									onMouseLeave={() => {
										setTooltipContent("");
									}}
									onClick={() => {
										if (have) {
											setTooltipContent("");
											showModal({
												name: NAME,
												words: data[NAME]
											})
										}
									}}
									style={{
										default: {
											fill: have ? theme.global.colors.brand : theme.global.colors["light-4"],
											stroke: theme.global.colors["light-1"],
											strokeWidth: "0.05vw"
										},
										hover: {
											fill: have ? theme.global.colors["accent-1"] : theme.global.colors["light-4"],
											stroke: theme.global.colors["light-1"],
											strokeWidth: "0.05vw"
										},
										pressed: {
											fill: have ? theme.global.colors["accent-1"] : theme.global.colors["light-4"],
											stroke: theme.global.colors["light-1"],
											strokeWidth: "0.05vw"
										}
									}}
								/>
							})
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
		</>
	);
};

export default memo(MapChart);
