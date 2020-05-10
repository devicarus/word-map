import React from 'react'

import { Layer, Box, Button, Markdown, Heading, Paragraph } from 'grommet'
import { Close } from 'grommet-icons'

import SafariSpacer from '../components/SafariSpacer'

const WelcomeModal = ({ closeFunction, content }) => {
	return (
		<Layer
			onEsc={() => closeFunction()}
			onClickOutside={() => closeFunction()}
			margin="medium"
		>
			<Box pad="large">
				<Button
					onClick={() => closeFunction()}
					icon={<Close />}
					style={{
						position: "absolute",
						right: 0,
						top: 0
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
						<Markdown components={{
							h1: {
								component: Heading,
								props: { margin: { top: "none" } }
							},
							p: {
								component: Paragraph,
								props: { margin: { bottom: "none" }}
							}
						}}>{content}</Markdown>
						<SafariSpacer add={20} />
					</Box>
				</Box>
			</Box>
		</Layer>
	)
}
export default WelcomeModal;
