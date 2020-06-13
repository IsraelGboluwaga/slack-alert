interface ISlackAlert {
  webhookURL: string
  message: IMessageOptions
}

interface IMessageOptions {
	username: string
	text?: string
	icon_emoji?: string
	attachments?: IAttachmentOptions
}

interface IAttachmentOptions {
	color: string
	fields?: IAttachmentFields[]
	actions?: IAttachmentActions[]
}

type TStyle = 'primary' | 'danger'
interface IAttachmentActions {
	type: string,
	text: string,
	style?: TStyle
	url?: string
}

interface IAttachmentFields {
	title: string
	value: string | number
	short: boolean
}

export { IMessageOptions, ISlackAlert }
