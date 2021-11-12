import { SIMILAR_ANNOUNCEMENT } from '../constants/announcement';

export function similarAnnouncement( announcement, index ) {
    const title = announcement.title.toLowerCase().split(' ');
    const description = announcement.description.toLowerCase().split(' ');
    return { 
        type: SIMILAR_ANNOUNCEMENT, 
        title: title, 
        description: description, 
        id: index,
    }
}