import { GET_VOLUNTEERS,GET_USER_CHOICE,UPDATE_USER_CHOICE } from '../actions/types';

const initialState = {
    volunteers : [
        {
            id:1,name:'Rajesh',
            occupation:'Engineer',
            specializedAreas : 'can talk about technology, marketing',
<<<<<<< HEAD
            email : 'rajesh@gmail.com',
=======
            email : 'johndoe@gmail.com',
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
            phone : '111-111-1111',
            about:'A passionate person who is into technology and likes to help other people suffering from depression'
        },

        {
            id:2,
            name:'Ajay',
<<<<<<< HEAD
            occupation:'Student in Finance',
            specializedAreas : 'Can give career motivation, and can talk about managing your finances', 
            email : 'ajay@gmail.com',
            phone : '111-111-1111',
            about:'An avid reader, writer, and a basketball player. Stays in the vicinity of Hyderabad. He can talk to any person who has problems related to finance.'
=======
            occupation:'Student',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque', 
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
        },

        {
            id:3,
            name:'Yash',
            occupation:'teacher',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
<<<<<<< HEAD
            about:'He has gone through his fair share of troubles but has emerged victorious. He can give you great advices and can help you in deciding about your future.'
=======
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
        },
        
        {
            id:4,
<<<<<<< HEAD
            name:'Sowmya',
=======
            name:'Aditya',
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
            occupation:'Researcher',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:5,
<<<<<<< HEAD
            name:'John',
=======
            name:'Jhon',
>>>>>>> 56418bc0f612d2a742b05a8cbc9906240ff5ae15
            occupation:'Researcher',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:6,
            name:'Rachel',
            occupation:'Researcher',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:7,
            name:'Priyanka',
            occupation:'Researcher',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:8,
            name:'Somalia',
            occupation:'Researcher',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },
        
        {
            id:9,
            name:'Mahesh',
            occupation:'Scientist',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum color sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '}
    ],
    videoSearchM:" English Motivational Videos"
};

export default function(state=initialState,action) {
    switch(action.type){
        case GET_VOLUNTEERS:
            return {
                ...state
            };
        case GET_USER_CHOICE:
            return{
                ...state,
                videoSearchM: action.payload
            }
        case UPDATE_USER_CHOICE:
            return{
                ...state,
                videoSearchM: action.payload
            }
        default: 
            return state; 
    }
} 