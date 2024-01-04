import { ALL_CHARACTERS_QUERY } from "../queries/all-characters";
import { ALL_SEARCH_QUERY } from "../queries/all-search";
import { CHARACTER_QUERY } from "../queries/character";
import { ANIME_QUERY } from "@/app/queries/anime";
import { MANGA_QUERY } from "@/app/queries/manga";
import { SEARCH } from "@/app/queries/search";
import { ALL_ANIME_QUERY } from "@/app/queries/anime/all-anime";

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
}

// return a single manga based on id
// takes in object {id: Int}
export const getManga = async (variables) => {
    return await fetchWithVar(MANGA_QUERY, variables);
};

export const globalSearch = async (searchText) => {
    return await fetchWithVar( SEARCH, { query: searchText } );
}


// returns a list of animes based on a search parameter
// takes in object {query: String}
export const getAnimeBySearch = async (variables) => {
    return await fetchWithVar(ALL_ANIME_QUERY, variables);
}


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
