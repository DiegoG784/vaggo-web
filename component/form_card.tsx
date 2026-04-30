import * as api from "@/app/api"
import { SubmitEventHandler } from "react"

interface FormCardProps {
	endpoint: string
	method: api.requestTypeSupport
	content: api.contentTypeSupport
	onSubmit: Function, //in case you need to implement a custom submission handling
	validator: FormValidatorHandler //a custom validator function for the data entered if needed

	children: any
}

export interface FormValidatorHandler {
	(data: any): any
}

function SubmissionHandler(data: any) {

}

export default function FormCard(
	{
		endpoint,
		method = "POST",
		content,
		onSubmit,
		validator,
		children,
	} : FormCardProps
) {
	return (
		<form onSubmit={(event) => onSubmit ? onSubmit(event) : SubmissionHandler(event) /* fallback to built-in handler if non existent*/}>
			{ children }
		</form>
	)
}