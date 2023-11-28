import { ALL_CHARACTERS_QUERY } from "../queries/all-characters";
import { ALL_SEARCH_QUERY } from "../queries/all-search";
import { CHARACTER_QUERY } from "../queries/character";
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
