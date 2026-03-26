import { mockUser } from "@/mocks/user";

export async function getCurrentUser() {
    return mockUser.admin;
}