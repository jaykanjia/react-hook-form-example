"use client";

import DynamicForm from "@/components/form/DynamicForm";
import schema from "@/lib/formSchema/demoFormSchema";
import { FieldValues, useForm } from "react-hook-form";

export default function Home() {
	const form = useForm({ mode: "all" });
	const onSubmit = (data: FieldValues) => {
		console.log({ data });
	};
	return (
		<main className="grid place-items-center p-10">
			<div className="max-w-screen-md w-full mx-auto">
				<DynamicForm form={form} onSubmit={onSubmit} schema={schema} />
			</div>
		</main>
	);
}
