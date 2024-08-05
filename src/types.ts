export interface ProjectInterface {
    title: string;
    description: string;
    tech: TagsInterface[];
    image: string;
    web: string;
    repo: string;
    }

export interface TagsInterface {
    name: string;
    class: string;
}