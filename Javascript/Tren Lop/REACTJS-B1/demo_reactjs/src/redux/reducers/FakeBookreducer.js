const stateDefault = {
  comments: [
    {
      name: 'Yone',
      content: 'Hi ! Yasou',
      avatar: 'https://i.pravatar.cc/150?u=yone',
    },
    {
      name: 'Yasou',
      content: 'Hi ! Bro',
      avatar: 'https://i.pravatar.cc/150?u=yasou',
    },
  ],
};
const FakeBookreducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'add_comment': {
      state.comments = [...state.comments, action.userComment];

      return { ...state };
    }
  }
  return { ...state };
};

export default FakeBookreducer;
