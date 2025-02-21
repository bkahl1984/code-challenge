import { Key } from "react";

export interface PRLabelsObject {
    id: Key | null | undefined;
    color: string;
    name: string;
}
  
export interface PRObject {
    html_url: string;
    id: Key | null | undefined;
    title: string;
    created_at: string;
    labels: PRLabelsObject[];
}

export type Option = {
    label: string;
    value: string;
}