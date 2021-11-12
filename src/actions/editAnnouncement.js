import { EDIT_ANNOUNCEMENT } from '../constants/announcement';

export function editAnnouncement( title, description, index ) {
    return { type: EDIT_ANNOUNCEMENT, id: index, title: title, description: description }
}