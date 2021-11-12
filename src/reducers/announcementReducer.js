import {
  ADD_ANNOUNCEMENT,
  EDIT_ANNOUNCEMENT,
  DELETE_ANNOUNCEMENT,
  SEARCH_ANNOUNCEMENT,
  SIMILAR_ANNOUNCEMENT,
  RESET_ANNOUNCEMENT,
} from '../constants/announcement';

const initialState = [
  {
    id: 0,
    title: 'Regular 10pm bedtime linked to lower heart risk tr',
    description: 'Synchronising tr sleep to match our internal body clock appears to be good for the heart, claim scientists.',
    date: '2011-01-22',
    visible: true,
    similar: false,
  },
  {
    id: 1,
    title: 'Regular 10pm bedtime linked to lower heart risk tr',
    description: 'Synchronising tr sleep to match our internal body clock appears to be good for the heart, claim scientists.',
    date: '2011-01-22',
    visible: true,
    similar: false,
  },
  {
    id: 2,
    title: 'Regular 10pm bedtime linked to lower heart risk tr',
    description: 'Synchronising tr sleep to match our internal body clock appears to be good for the heart, claim scientists.',
    date: '2011-01-22',
    visible: true,
    similar: false,
  },
  {
    id: 4,
    title: 'tr',
    description: 'Now it is joined other EU nations in mulling new restrictions. What the end of the pandemic could look like. Analysis: Covid-19 vaccine debate takes a strange turn',
    date: '2011-01-20',
    visible: true,
    similar: false,
  },
  {
    id: 3,
    title: 'Regular 10pm bedtime linked to lower heart risk tr',
    description: 'Synchronising tr sleep to match our internal body clock appears to be good for the heart, claim scientists.',
    date: '2011-01-22',
    visible: true,
    similar: false,
  },
  {
    id: 5,
    title: 'some title3 some',
    description: 'some description3',
    date: '2011-01-25',
    visible: true,
    similar: false,
  }
]

export default function getAnnouncement(state = initialState, action) {
  switch (action.type) {

    case ADD_ANNOUNCEMENT:
      let lastID = Math.max.apply(Math, state.map(item => item.id));
      return [
        ...state,
        {
          id: ++lastID,
          title: action.title,
          description: action.description,
          date: action.date,
          visible: true,
          similar: false,
        }
      ]

    case EDIT_ANNOUNCEMENT:
      state[action.id].title = action.title;
      state[action.id].description = action.description;
      return [
        ...state
      ]

    case DELETE_ANNOUNCEMENT:
      state.splice(action.id, 1);
      return [
        ...state
      ]

    case SEARCH_ANNOUNCEMENT:
      state.forEach(elem => {
        if (elem.title.toLowerCase().indexOf(action.value.toLowerCase()) === -1) {
          elem.visible = false;
        }
        else {
          elem.visible = true;
        }
      })
      return [
        ...state
      ]

    case RESET_ANNOUNCEMENT:
      state.forEach(elem => {
        elem.visible = true;
      })
      return [
        ...state
      ]

    case SIMILAR_ANNOUNCEMENT:
      const { title, description, id } = action;
      let countSimilar = 1;

      state.forEach(elem => {
        const stateTitle = elem.title.toLowerCase();
        const stateDescription = elem.description.toLowerCase();
        let similarTitle = false;
        let similarDescription = false;

        if (elem.id === id){
          elem.similar = false;
          return false;
        }
        if (countSimilar <= 3) {
        title.forEach(item => {
          if (stateTitle.indexOf(item) !== -1) {
            similarTitle = true;
          }
        })
        description.forEach(item => {
          if (stateDescription.indexOf(item) !== -1) {
            similarDescription = true;
          }
        })
        }

        if (similarTitle && similarDescription) {
          countSimilar++;
          elem.similar = true;
        } else {
          elem.similar = false;
        }
      })

      return [
        ...state
      ]

    default:
      return state;
  }
}