import { GET_VOLUNTEERS } from '../actions/types';

const initialState = {
    volunteers : [
        {
            id:1,name:'Rajesh',
            occupation:'Engineer',
            specializedAreas : 'can talk about technology, marketing',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'A passionate person who is into technology and likes to help other people suffering from depression'
        },

        {
            id:2,
            name:'Ajay',
            occupation:'Student',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque', 
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:3,
            name:'Yash',
            occupation:'teacher',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },
        
        {
            id:4,
            name:'Aditya',
            occupation:'Researcher',
            specializedAreas : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque',
            email : 'johndoe@gmail.com',
            phone : '111-111-1111',
            about:'Lorem ipsum dolor sit Fugit itaque perferendis reprehenderit officiis provident et itaque quidem modi repellendus aliquid '
        },

        {
            id:5,
            name:'Jhon',
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
    ]

};

export default function(state=initialState,action) {
    switch(action.type){
        case GET_VOLUNTEERS:
            return {
                ...state
            };

        default: 
            return state; 
    }
} 