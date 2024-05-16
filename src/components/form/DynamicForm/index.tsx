import { Controller, FieldValues, UseFormReturn } from "react-hook-form";
import getInputElement from "../getInputElement";
import React, { memo } from "react";
import ErrorMessage from "../ErrorMessage";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type SchemaField = {
	label: string;
	type: string;
	props?: any;
	validation: Record<string, any>;
};

type Props = {
	form: UseFormReturn<FieldValues, any, undefined>;
	onSubmit: (data: FieldValues) => void;
	schema: Record<string, SchemaField>;
};

const DynamicForm = ({ form, onSubmit, schema }: Props) => {
	return (
		<form
			// {...form}
			onSubmit={form.handleSubmit(onSubmit)}
			className="flex flex-col gap-4"
		>
			{Object.entries(schema).map(([key, fields]) => {
				return (
					<Controller
						key={key}
						control={form.control}
						name={key}
						// rules={fields.validation}
						render={({ field }) => {
							return (
								<div>
									<Label htmlFor={key}>
										<span className={cn({ ["sr-only"]: !fields.label })}>
											{fields.label || field.name}
										</span>
										{React.createElement(
											getInputElement(fields.type) as typeof Input,
											{
												...fields.props,
												...field,
											}
										)}
										<ErrorMessage
											control={form.control}
											name={key}
											rules={fields.validation}
										/>
									</Label>
								</div>
							);
						}}
					/>
				);
			})}
			<Button type="submit">Submit</Button>
		</form>
	);
};

export default memo(DynamicForm);
