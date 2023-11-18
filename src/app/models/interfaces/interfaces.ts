export interface Digimons {
    content:  Content[];
    pageable: Pageable;
}

export interface Content {
    id:    number;
    name:  string;
    href:  string;
    image: string;
}

export interface Pageable {
    currentPage:    number;
    elementsOnPage: number;
    totalElements:  number;
    totalPages:     number;
    previousPage:   string;
    nextPage:       string;
}


//Detalle
export interface DigimonDetail {
    id:              number;
    name:            string;
    xAntibody:       boolean;
    images:          Image[];
    levels:          Level[];
    types:           Type[];
    attributes:      Attribute[];
    fields:          Field[];
    releaseDate:     string;
    descriptions:    Description[];
    skills:          Skill[];
    priorEvolutions: Evolution[];
    nextEvolutions:  Evolution[];
}

export interface Attribute {
    id:        number;
    attribute: string;
}

export interface Description {
    origin:      string;
    language:    string;
    description: string;
}

export interface Field {
    id:    number;
    field: string;
    image: string;
}

export interface Image {
    href:        string;
    transparent: boolean;
}

export interface Level {
    id:    number;
    level: string;
}

export interface Evolution {
    id:        number;
    digimon:   string;
    condition: string;
    image:     string;
    url:       string;
}

export interface Skill {
    id:          number;
    skill:       string;
    translation: string;
    description: string;
}

export interface Type {
    id:   number;
    type: string;
}

export interface Agify {
    count: number;
    name:  string;
    age:   number;
}
