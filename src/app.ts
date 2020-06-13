import https from 'https'
import { IMessageOptions, ISlackAlert } from './interfaces'

const requestOptions = {
	method: 'POST',
	header: {
	  'Content-Type': 'application/json',
	},
}

const pushToSlack = ({ webhookURL, message }: ISlackAlert) => {
	const req = https.request(webhookURL, requestOptions, (res: any) => {
		let response = ''
		res.on('data', (data: string) => {
			response += data
		});

		res.on('end', () => {
		  Promise.resolve(response)
		})
	})

	req.on('error', (e: any) => {
		Promise.reject(e)
	})
	req.write(message)
	req.end()
}

const alertSlack = async (webhookURL: string, notificationData: IMessageOptions) => {
	try {
		await pushToSlack({ webhookURL, message: notificationData })
    console.log('Slack Alert:: Pushed to slack')
  } catch (error) {
    console.error('Slack Alert Error::', error)
  }
}

export default alertSlack
