export interface Photo {
    id: number;
    url: string;
    isMain: boolean;
    isApproved: boolean;
    username?: string;
}
