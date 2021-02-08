export type ClubServerResponse = {
    id: string;
    name: string;
    country: string;
    value: number;
    image: string;
    european_titles: number;
    stadium: {
        size: number;
        name: string;
    };
    location: {
        lat: number;
        lng: number;
    };
};

export type ClubListViewModel = {
    id: string;
    name: string;
    country: string;
    value: number;
    image: string;
};

export type ClubDetailViewModel = ClubServerResponse;

export type SortDirection = 'name-ascending' | 'value-descending';
