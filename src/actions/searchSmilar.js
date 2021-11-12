import { SEARCH_ANNOUNCEMENT } from '../constants/announcement';

export function searchAnnouncement( value ) {
    return { type: SEARCH_ANNOUNCEMENT, value: value }
}