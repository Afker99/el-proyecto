import type User from "../types/UserTypes/UserInterface";
import sampleUserPic from "../assets/afker.png";

export const sampleUserId = crypto.randomUUID();

export const user: User = {
  id: sampleUserId,
  name: "Afker Hussaindeen",
  email: "afker@my-domain.com",
  profiePicUrl: sampleUserPic,
};
