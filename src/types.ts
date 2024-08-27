export interface ProjectInterface {
    title: string;
    description: string;
    tech: TagsInterface[];
    image: string;
    web: string;
    repo?: string;
    frontRepo?: string;
    backRepo?: string;
    }

export interface TagsInterface {
    name: string;
    class: string;
}

export interface ExperienceInterface {
    title: string;
    description: string;
    bullets: string[];
    company: string;
    logo?: string;
    date: string;
    }