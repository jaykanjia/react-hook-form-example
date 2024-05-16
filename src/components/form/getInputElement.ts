import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const getInputElement = (type: string) => {
	switch (type) {
		case "input":
			return Input;
		case "select":
			return Input;
		case "textarea":
			return Textarea;

		default:
			return Input;
	}
};

export default getInputElement;
