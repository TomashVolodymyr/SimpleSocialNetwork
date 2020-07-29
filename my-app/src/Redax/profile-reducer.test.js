import React from "react";
import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

let state = {
    myPostsData: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It\'s my first post', likeCounts: 23}
    ]
}

it( 'length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('hello!');

    // 2. changing state
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.myPostsData.length).toBe(3)
    }
);

it( 'deleting some post ', () => {
        // 1. test data
        let action = deletePostActionCreator(1);

        // 2. changing state
        let newState = profileReducer(state,action);

        // 3. expectation
        expect(newState.myPostsData.length).toBe(1)
    }
)