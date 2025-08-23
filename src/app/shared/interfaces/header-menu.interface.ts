import { HeaderLink } from "./header-link.interface";

export interface HeaderMenu {
    page: string;
    router: string;
    links: HeaderLink[];
}