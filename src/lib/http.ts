import axios from "axios";

export const fetcher = async (url: string) => {
    // this is a generic function to send HTTP requests

    try {
        const res = await axios({
            method: "GET",
            url: `https://www.omdbapi.com/?apikey=34c6327&${url}&type=movie`,
        });

        return res.data;
    } catch (error: any) {
        console.log(error);

        throw new Error(error?.message || "something went wrong");
    }
};
