import React from 'react'

import { Layer, Box, Heading, Text, Markdown, Button } from 'grommet'
import { Close, Volume } from 'grommet-icons'

import SafariSpacer from '../components/SafariSpacer'

const CountryModal = ({ closeFunction, data }) => {
	return (
		<Layer
			onEsc={() => closeFunction()}
			onClickOutside={() => closeFunction()}
			margin="medium"
		>
			<Box pad="large" >
				<Box fill="horizontal">
					<Heading margin={{ top: "none" }} textAlign="center" level={2}>{data.name}</Heading>
				</Box>

				<Button
					icon={<Close />}
					onClick={() => closeFunction()}
					style={{
						position: "absolute",
						top: 0,
						right: 0
					}}
				/>

				<Box style={{
					flex: 1,
					overflow: "auto"
				}}>
					<Box style={{
						display: "flex",
						minHeight: "min-content"
					}}>
						<Box gap="medium">
							{data.words.map(word => (
								<Box border={word.translation ? true : false} pad="medium">
									<Box direction="row" gap="small">
										<Text weight="bold">{word.translation}</Text>
										{word.pronunciation &&
											<Text>\{word.pronunciation}\</Text>
										}
										{word.audio &&
											<Button size="small" plain icon={<Volume />} onClick={() => { new Audio(word.audio).play() }} />
										}
									</Box>
									{word.comment &&
										<Markdown margin={{ bottom: "none" }} >{word.comment}</Markdown>
									}
								</Box>
							))}
						</Box>
						<SafariSpacer add={20} />
					</Box>
				</Box>
			</Box>
		</Layer >
	)
}
export default CountryModal;
