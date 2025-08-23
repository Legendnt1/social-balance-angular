export interface ContactFormRow {
    name: string;
    type: string;
    placeholder: string;
    svg?: string;
    rows?: number;
    required: boolean;
}

export interface ContactFormField {
    row: ContactFormRow[];
}