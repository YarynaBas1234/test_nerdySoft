import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AnnouncementContainer from '../components/AnnouncementContainer';
import BasicButton from '../components/elements/BasicButton';

const SimilarAnnouncements = ({ item }) => {
    const { announcement } = useSelector(state => state);

    return (
        <Box>
            <Link to='/'>
                <BasicButton value={'Back'} />
            </Link>
            <AnnouncementContainer elem={item} index={item.id} isOpen={true} />
            {
                announcement.map((elem, index) => {
                    if (elem.visible === true) {
                        return elem.similar &&
                            <AnnouncementContainer
                                elem={elem}
                                index={index}
                                isOpen={false}
                            />
                    }
                })
            }
        </Box>
    );
}

export default SimilarAnnouncements;