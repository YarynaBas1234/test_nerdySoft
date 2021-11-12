import { DELETE_ANNOUNCEMENT } from '../constants/announcement';

export function deleteAnnouncement( index ) {
    return { type: DELETE_ANNOUNCEMENT, id: index }
}