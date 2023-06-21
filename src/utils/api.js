import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
        "X-RapidAPI-Host": "https://www.googleapis.com/youtube/v3",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
