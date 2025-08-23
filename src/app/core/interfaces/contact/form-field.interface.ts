export interface FormRow {
    name: string;
    type: string;
    placeholder: string;
    svg?: string;
    rows?: number;
    required: boolean;
}

export interface FormField {
    row: FormRow[];
}