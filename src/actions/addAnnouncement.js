import { ADD_ANNOUNCEMENT } from '../constants/announcement';

export function addAnnouncement( title, description, date ) {
    return { type: ADD_ANNOUNCEMENT, title: title, description: description, date: date }
}