import { MovieType } from "./movieTypes.ts";

export type RensponseTrendingType = {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
};