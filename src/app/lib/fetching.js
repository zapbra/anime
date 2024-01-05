import { ALL_CHARACTERS_QUERY } from "../queries/all-characters";
import { ALL_SEARCH_QUERY } from "../queries/all-search";
import { CHARACTER_QUERY } from "../queries/character";
import { ANIME_QUERY } from "@/app/queries/anime";
import { MANGA_QUERY } from "@/app/queries/manga";
import { SEARCH } from "@/app/queries/search";
import { ALL_ANIME_QUERY } from "@/app/queries/anime/all-anime";
import { MANGA_ANIME_SEARCH } from "@/app/queries/AnimeMangaSearch";
import { HOMEPAGE_QUERY } from "@/app/queries/homepage";
import { ANIME_CHARACTERS_BY_PAGE } from "@/app/queries/anime/characters";

// return a list of all media

export const getAllMedia = async () => {
    return await fetchDefault(ALL_SEARCH_QUERY);
};

// return a list of all characters
export const getCharacters = async () => {
    return await fetchDefault(ALL_CHARACTERS_QUERY);
};

// return a single character based on id
// takes in object {id: Int}
export const getCharacter = async (variables) => {
    return await fetchWithVar(CHARACTER_QUERY, variables);
};

// return a single anime based on id
// takes in object {id: Int}
export const getAnime = async (variables) => {
    return await fetchWithVar(ANIME_QUERY, variables);
};

// return a single manga based on id
// takes in object {id: Int}
export const getManga = async (variables) => {
    return await fetchWithVar(MANGA_QUERY, variables);
};

export const globalSearch = async (searchText) => {
    return await fetchWithVar(SEARCH, { query: searchText });
};

// returns a list of animes based on a search parameter
// takes in object {query: String}
export const getAnimeBySearch = async (variables) => {
    return await fetchWithVar(ALL_ANIME_QUERY, variables);
};

// returns a list of animes or mangas based on search, page, and type
// takes in object {page: Int, query: String, type: MediaType}
// Media type = MANGA or ANIME (could be others too)
export const getAnimeMangaBySearch = async (variables) => {
    return await fetchWithVar(MANGA_ANIME_SEARCH, variables);
};

// returns a list of characters based on a search parameter
// takes in object {page: Int, query: String}
export const getCharactersBySearch = async (variables) => {
    return await fetchWithVar(ALL_CHARACTERS_QUERY, variables);
};

// returns a slightly detailed list of animes and mangas (for now)
// takes in object {query: String, results: Int}
export const getHomepageData = async (variables) => {
    return await fetchWithVar(HOMEPAGE_QUERY, variables);
};

// returns a list of 25 (max) characters by anime/manga
// takes in object {id: Int, type: MediaType (MANGA/ANIME), page: Int)
export const getAnimeOrMangaCharacters = async (variables) => {
    return await fetchWithVar(ANIME_CHARACTERS_BY_PAGE, variables);
};

// sends a request to the api with a specified query and returns the result
const fetchDefault = async (query) => {
    const url = "https://graphql.anilist.co",
        options = {
            method: "POST",
            cache: "force-cache",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: query,
            }),
        };

    try {
        const data = await fetch(url, options);
        const response = await data.json();
        return response;
    } catch (error) {
        return error;
    }
};

// sends a request to the api with specific query and variables and returns the result
const fetchWithVar = async (query, variables) => {
    const url = "https://graphql.anilist.co",
        options = {
            method: "POST",
            cache: "force-cache",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: query,
                variables: variables,
            }),
        };

    try {
        const data = await fetch(url, options);
        const response = await data.json();
        return response;
    } catch (error) {
        return error;
    }
};
