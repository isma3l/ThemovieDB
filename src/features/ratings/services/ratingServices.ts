import { getWithOutParams, post } from "@/lib/api";
import { SessionResponse, RatingResponse } from "./response";
import { Session } from "../domain/Session";
import { Rating } from "@/shared/domain";

export const fetchNewSession = async (): Promise<Session> => {
    const url = `authentication/guest_session/new`;
    
    const sessionResponse = await getWithOutParams<SessionResponse>(url);
    return {
        id: sessionResponse.guest_session_id,
        expire: sessionResponse.expires_at
    }
}

export const rateMovie = async (rating: Rating, movieId?: number, sessionId?: string): Promise<void> => {
    const url = `movie/${movieId}/rating?guest_session_id=${sessionId}`;
    await post<Rating, RatingResponse>(url, rating);
}