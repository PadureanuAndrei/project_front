const BASE_URL = "http://localhost:8080";

export const loginApi = () => `${BASE_URL}/auth/login`;
export const registerApi = () => `${BASE_URL}/auth/register`;


export const getUserByEmail = () => `${BASE_URL}/users`;
export const getUserById = (id: number) => `${BASE_URL}/users/${id}`;

export const announcements = () => `${BASE_URL}/announcements`;
export const announcementById = (id: number) => `${BASE_URL}/announcements/${id}`;
