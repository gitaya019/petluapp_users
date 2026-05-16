import axios from "axios";

const auth = axios.create({
    baseURL:
        import.meta.env.VITE_AUTH_API_URL,
});

export default auth;