import { IComicSummary, IEventSummary, IImage, ISerie, IStorySummary, IUrl } from "src/app/pages/character/character.interface";

export interface IComicDataWrapper {
    code?: number;
    status?: string;
    copyright?: string;
    attributionText?: string;
    attributionHTML?: string;
    data?: IComicDataContainer;
    etag?: string;
}

export interface IComicDataContainer {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results: IComic[];
}

export interface IComic {
    id?: number;
    digitalId?: number;
    title?: string;
    issueNumber?: number;
    variantDescription?: string;
    description?: string;
    modified?: string;
    isbn?: string;
    upc?: string;
    diamondCode?: string;
    ean?: string;
    issn?: string;
    format?: string;
    pageCount?: number;
    textObjects?: ITextObject[];
    resourceURI?: string;
    urls?: IUrl[];
    series?: ISerie;
    variants?: IComicSummary;
    collections?: IComicSummary[];
    collectedIssues?: IComicSummary[];
    dates?: IComicDate[];
    prices?: IComicDate;
    thumbnail?: IImage;
    images?: IImage[];
    creators?: ICreator;
    characters?: ICharacterList;
    stories?: IStoryList;
    events?: IEventList;
}

export interface ITextObject {
    type?: string;
    language?: string;
    text?: string;
}

export interface IComicDate {
    type?: string;
    date?: string;
}

export interface ICreator {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: ICreatorSummary[];
}

export interface ICreatorSummary {
    resourceURI?: string;
    name?: string;
    role?: string;
}

export interface ICharacterList {
    available?: number;
    returned?: number;
    avacollectionURIilable?: string;
    items?: ICharacterSummary[];
}

export interface ICharacterSummary {
    resourceURI?: string;
    name?: string;
    role?: string;
}

export interface IStoryList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: IStorySummary[];
}

export interface IEventList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: IEventSummary[];
}