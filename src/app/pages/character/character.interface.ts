export interface ICharacterDataWrapper {
    code?: number;
    status?: string;
    copyright?: string;
    attributionText?: string;
    attributionHTML?: string;
    data?: ICharacterDataContainer;
    etag?: string;
}

export interface ICharacterDataContainer {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results: ICharacter[];
}

export interface ICharacter {
    id?: number;
    name: string;
    description: string;
    modified?: string;
    resourceURI?: string;
    urls?: IUrl[];
    thumbnail: IImage;
    comics?: IComic[];
    stories?: IStory[];
    events?: IEvent[];
    series?: ISerie[];
}

export interface IImage{
    path: string;
    extension: string;
}

export interface IUrl {
    type?: string;
    url?: string;
}

export interface IComic {
    avaliable?: number;
    returned?: number;
    collectionURI?: string;
    items?: IComicSummary[];
}

export interface IStory {
    avaliable?: number;
    returned?: number;
    collectionURI?: string;
    items?: IStorySummary[];
}

export interface IEvent {
    avaliable?: number;
    returned?: number;
    collectionURI?: string;
    items?: IEventSummary[];
}

export interface ISerie {
    avaliable?: number;
    returned?: number;
    collectionURI?: string;
    items?: ISeriesSummary[];
}

export interface IComicSummary {
    resourceURI?: string;
    name?: string;
}

export interface IStorySummary {
    resourceURI?: string;
    name?: string;
    type?: string;
}

export interface IEventSummary {
    resourceURI?: string;
    name?: string;
}

export interface ISeriesSummary {
    resourceURI?: string;
    name ?: string;
}
