import profileReducer, {addPost} from './profile-reducer'


let state = {
 posts : [
                    {id: 0, message: "Hello, people", likesCount: 3},
                    {id: 1, message: "It's my first post", likesCount: 15},
                    {id: 2, message: "Hi", likesCount: 3},
                    {id: 3, message: "It's my second post", likesCount: 15},
                    {id: 4, message: "Yo", likesCount: 3},
                    {id: 5, message: "Joy", likesCount: 15}
 ],
 
};

it("length of post should be incremented", () => {
    let newText = "Hello everyone";
    let action = addPost(newText);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(7)
})