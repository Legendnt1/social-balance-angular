export interface TermContent {
    type: string;
    text?: string;
    items?: string[];
}

export interface TermData {
    title: string;
    content: TermContent[];
}